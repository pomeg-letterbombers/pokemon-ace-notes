## Preamble

In December 2024, efforts has been started to simplify the writing of the hexadecimal writer (hexwriter) with the power of mail corruption being able to modify Pokémon data.
The version of the hexwriter guide present on this website was from one of these efforts.

## Memory storing techniques

The main reason why this version of the hexwriter guide is shorter than the others is that it uses an unconventional form of `STR <rd>, [<rn>, #0x4]!`.
Usually the standard form of this instruction is unwritable using the US/European character encoding.

However with a scaled register offset, we can use the bit shifted value of a regsiter, and use that as the offset for `STR`.
Thankfully there are some bit-shift operations[^1] available for use with the limited charset, allowing a way to write some `STR` instruction with unwritable offsets.
In addition, with writeback (`!`), it also increments by the offset which saves an `ADC` or `LDRSB` instruction used to increment `rn` to where we want to write our data to.
Below is what the instruction looks like in ARM assembly:

```
STR <rd>, [<rn>, <rm>, LSR #nn]!
```

`lr` is always initially a ROM address when executing grab ACE, where the most significant byte is always 0x8.
By performing a bit shift right (can be `LSR` or `ASR`) by 25, we can get an offset of 0x4 from `lr`, allowing the `STR` instruction to always write to `rn+4` which is highly useful for the hexwriter.

Since the hexwriter writing codes use `r12` to store the working values and `r11` to store the destination, the `STR` works out to what is shown below:

```
E7ABCCAE	STR r12, [r11, lr, LSR #25]!
```

[^1]:
    The writable scaled register offsets are:

    - `LSL` with `rm` as `r0`, and `shift_imm` being an even value
    - `LSR` with `rm` as `r1` to `lr`, and `shift_imm` being an odd value
    - `ASR` with `rm` as `r0` to `pc`, and `shift_imm` being an odd value
    - There are probably more not covered, but these are the more useful operations.

### Mail corruption

In FireRed/LeafGreen, mail corruption allows directly writing into the first 9 halfwords of Box 3, Slot 1.
This allows for (mostly) bypassing the need to use arithmetic to compute bytes 0-17 of the hexwriter.

Even when there is not a easy chat system word with an index that corresponds to a halfword within the hexwriter data, there is certainly a word where the lower 8 bits of the index matches.
As such, a single `MOVS` and `STRB` can be used to overwrite the upper 8 bits of the halfword in this case.

When choosing mail words to write, words that were available by default were chosen over unlockable words whenever possible.
If the only word options are unlockable words then words that are likely to be unlocked in a regular playthrough of FR/LG are given priority over other unlockable words.
In cases where the only words available are words that are locked to the post game or needs a time-consuming extra step, `STRH` is used to fill in the space instead.
Below is the mail message with the words substituted for their respective hexadecimal indexes:

```
2A8A	2A8F
0E00	0000
0402	045C
0466	044F
1009
```

??? question "What about mail word 4?"

    At the time it was considered that using mail word 4 is simply not worth it, due to all of the candidates for it being only unlockable in the post-game.
    However it is found to be possible to unlock one of the candidates via unlocking the National Dex from running the script via NPC.
    Still the savings from using that word is only 4 characters, and the player would still need to go out of their way to unlock the National Dex before using it, so it was omitted.
    Below is the word that can be feasibly unlocked before the post game.

    | Word                   | Index (hex) |
    | ---------------------- | ----------- |
    | AZUMARILL              | 2AB8        |

    Here is the orignal code 1 that used mail word 4:
    ```
    Box  1: C C U n 7 T … o	[CCUn7T…o]
    Box  2: _ _ _ 7 F Q q _	[   7FQq ]
    Box  3: _ _ n F … o _ _	[  nF…o  ]
    Box  4: _ 9 F Q q _ _ _	[ 9FQq   ]
    Box  5: t F … o – F Q q	[tF…o–FQq]
    Box  6: _ _ _ o F … o _	[   oF…o ]
    Box  7: _ _ ” F Q q _ _	[  ”FQq  ]
    Box  8: _ F F … o _ _ _	[ FF…o   ]
    Box  9: ’ F Q q N G … o	[’FQqNG…o]
    Box 10: _ _ _ ♀ F w q _	[   ♀Fwq ]
    Box 11: _ _ s R … o _ _	[  sR…o  ]
    Box 12: _ d F ? n _ _ _	[ dF?n   ]
    Box 13: ‘ F Q m _ _ _ _	[‘FQm    ]
    ```

## Determining the initial `SBC` offset

With the right immediate for the initial `SBC` instruction used to set the value of `r11`, an initial `STR` instruction can be used to both store the first data value, and advance `r11` all at once.

- This removes an additional `ADC`/`SBC` or `LDRH`/`LDRSB` usually used to further adjust `r11`.

To be able to use the initial large `STR` offset, this immediate must set `r11` to an address at least 0xA1 bytes before the box slot as that is the first writable offset after 0x0 (space).

- Due to the `pc` register having a value that is always 0xA[^2] ahead of BOX_NAMES_START, and `shifter_operand` being restricted to `0x0`-`0xFF` bit rotated right by a multiple of 2, 0xA1 cannot be used as all immediates that have an offset of 0xA1 before a box slot are all located within Box 14.
- Due to `SBC` always adding an additional subtraction by ~CARRY_FLAG (which is always 1 under normal circumstances), the `STR` offset has +1 added to account for this.
- This leaves 0xA7 as the lowest possible offset that can be used as the first initial `STR` offset, let this be PID_OFFSET

[^2]:
    Due to the ACE entrypoint of 0x351 having both bit 0 unset, and bit 1 set, the `pc` register is not word-aligned which affects `pc`-relative operations.
    Specifically, it is +0x2 from the value the `pc` register is expected to be.

As such immediate needs to satify the below equation:

- (BOX_NAMES_START + 0xA) - immediate - 1 = BOX_SLOT_ADDRESS - 0xA7
    - The value of `pc` is the address of the current instruction + 0xA when `pc` is misaligned (executed from 0x351)
    - Since the instruction is `SBC`, the immediate is subtracted by ~CARRY_FLAG which is always `1` under normal circumstances

Using the below algorithm, a list of immediates that satisfy the above equation can be generated:

```
BIT_LENGTH <- 32
BIT_MASK <- 2**BIT_LENGTH - 1
VALID_CHARS <- [...] # Codepoints of every writable character
VALID_IMMEDIATES <- {
    (c >> i * 2) | ((c << (BIT_LENGTH - i * 2)) & BIT_MASK)
    FOR i IN range(0, 16)
    FOR c IN VALID_CHARS
    }
PC_OFFSET <- 8 # Working with standard values makes calculation easier
PID_OFFSET <- 0xA8
offsets <- []
distance <- PC_OFFSET
FOR box_number IN range(BOXES, 0, -1):
    FOR box_slot IN range(SLOTS, 0, -1):
        distance <- distance + BOX_MON_SIZE
        FOR immediate IN VALID_IMMEDIATES:
            IF immediate = (distance + PID_OFFSET):
                offsets.add([box_number, box_slot, immediate])
```

Immediate 0x2F40 was found which targets Box 10, Slot 2, let this be INITIAL_OFFSET.

## Box name codes

Each box name code starts with this instruction:

```
SBC r11, pc, INITIAL_OFFSET
```

Codes are generally structured as the following:

- All of them generally start with the following instructions:
  ```
  MOV r12, { data } ? ; Some data is computed by hand instead
  ```

- The first 32-bit word stored use this `STR` instruction:
  ```
  STR r12, [r11, { PID_OFFSET + offset }]!
  ```

- All other words after the first use this `STR` instruction:
  ```
  STR r12, [r11, lr, LSR #25]!
  ```

- Code 1 is an exception, all bytes and halfwords (except for the last byte and halfword) in that code is structured like the following:
  ```
  STRB r12, [r11, { PID_OFFSET + offset }] ; STRH for halfword
  ```

- The last byte type data stored in Code 1 is structured like this (to get around STRH offset limitations):
  ```
  STRB r12, [r11, { PID_OFFSET + offset }]!
  ```

- The last halfword in Code 1 stored uses the following instruction:
  ```
  STRH r12, [r11, {offset - last_byte_offset}]
  ```

Below is a table, mapping each word (4-byte sequence) to at least an offset in the box name codes.

!!! note inline end "Legend"

    - Each offset has a type associated with it, corresponding to the `STR` type used for the data.
    - **Boldface** indicates that the highlighted part was written by mail corruption.

| Code No. | Data                 | Offset(s) (B/H/W) |
| -------: | :------------------- | :---------------- |
|        1 | E2**8F**80**8A**     | 0x1 (B), 0x3 (B)  |
|        1 | E8B8**0E00**         | 0x6 (H)           |
|        1 | E3**5C0402**         | 0xB (B)           |
|        1 | 32**4F**C0**66**     | 0xD (B), 0xF (B)  |
|        1 | E7D8**1009**         | 0x12 (H)          |
|        2 | E25110B1             | 0x14 (W)          |
|        2 | 32911010             | 0x18 (W)          |
|        2 | 5081B20B             | 0x1C (W)          |
|        3 | 459CB000             | 0x20 (W)          |
|        3 | E31A0001             | 0x24 (W)          |
|        3 | 14CCB001             | 0x28 (W)          |
|        4 | 13A0B000             | 0x2C (W)          |
|        4 | E35A0007             | 0x30 (W)          |
|        4 | 328AA001             | 0x34 (W)          |
|        5 | 23A0A000             | 0x38 (W)          |
|        5 | 22899001             | 0x3C (W)          |
|        5 | E2899001             | 0x40 (W)          |
|        6 | E359007E             | 0x44 (W)          |
|        6 | 424FF040             | 0x48 (W)          |
|        6 | E12FFF10[^3]         | 0x4C (W)          |

[^3]: E12FFF1E for `BX lr` exit

## References and Acknowledgements

- [E-Sh4rk's original article for the hexwriter, crafting egg, and CPSR status reset](https://e-sh4rk.github.io/ACE3/emerald/hex-writer/hex-writer/)
- [Adrichu00's method of writing the hexwriter](https://gist.github.com/Adrichu00/49433953af9d6fd7c1cd368d48c68778)
- RationalPsycho on the Glitch City Research Institute Discord for the glitched mail inputs
- merrp of the Glitch City Research Institute Discord for showing off various cool tricks with ARM assembly