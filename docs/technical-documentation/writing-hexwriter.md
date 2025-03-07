## Preamble

In December 2024, efforts has been started to simplify the writing of the hexadecimal writer (hexwriter) with the power of mail corruption being able to modify Pokémon data.
The version of the hexwriter guide present on this website was from one of these efforts.

## Code details

```
SBC r11, pc, #0x2F40
```
This subtracts `0x2F40` from the `pc` register, and due to the instruction being `SBC` and the carry flag is unset, it also subtracts an extra `0x1` from the result.
Since it is expected that the code will be executed using `0x351` where it executes in ARM mode with the `pc` register's bit 1 set to `1`, the result assigned to `r11` will be `0xA7` (167) bytes before the PID of Box 10, Slot 2.
I have chosen an offset of `0xA7` as that it and (most) later offsets are writable using the European character set which allows storing using `STR r12, [r11, {offset}]!` and for the most part remove the need to waste an opcode incrementing `r11`.
It also allowed `STRB` to be usable for writing part of the hexwriter as that is encoded similarly to `STR`.

```
STR r12, [r11, r14, LSR #25]! ; encoded as `E7ABCCAE`
```
merrp is to be credited for using this trick to be able to increment `r11` using `STR` with what would be unwritable offsets thanks to the limitations of the European character set.
Since `r14` is always initially a ROM address where the most significant byte of the address is usually `0x8`, if the value is shifted right by 25 bits, it will become `0x4`.
This allows writing to the address stored in `r11` + `0x4` which is highly useful for the purposes of writing the hexwriter, as we do not need to waste more opcodes on writing half of each instruction then using `STRH` which takes up more space.
However for FireRed and LeafGreen, since we have access to mail corruption, and it so happens that some of the halfwords are writable as mail words, we can still use `STRH` for those instructions where half of it is already written by mail corruption.

From this, the codes are generally structured as the following:
```
SBC r11, pc, #0x2F40
MOVS r12, #{opcode_1} ?
STR r12, [r11, #{offset}]!
MOVS r12, #{opcode_2} ?
STR r12, [r11, r14, LSR #25]!
MOVS r12, #{opcode_3} ?
STR r12, [r11, r14, LSR #25]!
```
with some codes using different instructions due to either having a halfword already written with the mail corruption enabling us to use `STRH` and using `MOVS` with only half of the instruction as the immediate or having an unwritable offset.

### Mail corruption

!!! note
    Only the English words are shown, mostly to keep the documentation simple

The mail corruption allows directly writing halfwords that would have made the main code writing process longer.
When choosing mail words to write, words that were available by default were chosen over unlockable words whenever possible.
If the only word options are unlockable words then words that are likely to be unlocked in a regular playthrough of FR/LG are given priority over other unlockable words.
Below is a table of words and their respective indexes written in the glitchy mail (an * means that byte was overwritten by a box name code):

| Word         | Index (hex) |
| ------------ | ----------- |
| OMANYTE      | 2A8A        |
| SNORLAX      | 2A8F        |
| LISTEN       | 0E00        |
| THICK FAT    | 0402        |
| MINUS        | 045C        |
| PICKUP       | 0466        |
| MARVEL SCALE | 044F        |
| LIKELY TO    | 1009        |

??? question "What about mail word 4?"

    While there are candidates for mail word 4, the problem is that they are only unlockable after the postgame which complicates writing this hexwriter for players who have went for New Game+.
    For those who are curious, here are the candidates for mail slot 4.

    | Word                   | Index (hex) |
    | ---------------------- | ----------- |
    | SCARY FACE / AZUMARILL | \*\*B8      |

    and here is box code 1 for those who have those words:
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

While some of these mail words do not exactly correspond to a halfword within the hexwriter, the least significant byte of the word index does.
Code 1 overwrites the wrong upper halves of the mail halfwords, correcting the wrong data written initially.

### Box name codes

Below are the inputs to E-Sh4rk's CodeGenerator for each box name code along with the exact bytes that each code writes, and their starting offsets
If you see * in the writes section, that means part of it was already written by mail corruption or variable according to the note attached

#### Code 1

Starting offset: 0x0 + 0xA7 = 0xA7

```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40 ; Box 10, Slot 4 - 0xC8
MOVS r12, #0xA80 ; STRB ignores the upper 24 bits
STRB r12, [r11, #0xA8]
MOVS r12, #0xE2
STRB r12, [r11, #0xAA]
MOVS r12, #0xE800 ;
ADC r12, r12, #0xB8 ; MOVS r12, #0xE8 if using mail word 4
STRH r12, [r11, #0xAD] ; STRB r12, [r11, #0xAE] if using mail word 4
MOVS r12, #0xE3
STRB r12, [r11, #0xB2]
MOVS r12, #0xC0
STRB r12, [r11, #0xB4]
MOVS r12, #0x32
STRB r12, [r11, #0xB6]!
MOVS r12, #0xE7D8 ?
STRH r12, [r11, #0x3]
```

Writes:
```
**80**E2
****B8E8
******E3
**C0**32
****D8E7
```

#### Code 2

Starting offset: 0x14 + 0xA7 = 0xBB

```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40
MOVS r12, #0xE25110B1 ?
STR r12, [r11, #0xBB]!
MOVS r12, #0x32911010 ?
0xE7ABCCAE
MOVS r12, #0x5081B20B ?
0xE7ABCCAE
```

Writes:
```
B11051E2
10109132
0BB28150
```

#### Code 3

Starting offset: 0x20 + 0xA7 = 0xC7

```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40
MOVS r12, #0x459CB000 ?
STR r12, [r11, #0xC7]!
MOVS r12, #0xE31A0001 ?
0xE7ABCCAE
MOVS r12, #0x14CCB001 ?
0xE7ABCCAE
```

Writes:
```
00B09C45
01001AE3
01B0CC14
```

#### Code 4

Starting offset: 0x2C + 0xA7 = 0xD3

```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40
MOVS r12, #0x13A0B000 ?
STR r12, [r11, #0xD3]!
MOVS r12, #0xE35A0007 ?
0xE7ABCCAE
MOVS r12, #0x328AA001 ?
0xE7ABCCAE
```

Writes:
```
00B0A013
07005AE3
01A08A32
```

#### Code 5

Starting offset: 0x38 + 0xA7 = 0xDF

```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40
MOVS r12, #0x23A0A000 ?
STR r12, [r11, #0xDF]!
MOVS r12, #0x22899001 ?
0xE7ABCCAE
MOVS r12, #0xE2899001 ?
0xE7ABCCAE
```

Writes:
```
00A0A023
01908922
019089E2
```

#### Code 6

Starting offset: 0x44 + 0xA7 = 0xEB

```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40
MOVS r12, #0xE359007E ?
STR r12, [r11, #0xEB]!
MOVS r12, #0x424FF040 ?
0xE7ABCCAE
; MOVS r12, #0xE12FFF10 ?
MVN r12, #0xE1
BIC r12, r12, #0xED00000
BIC r12, r12, #0x1000000E ; r12 = E12FFF10 BX r0
ADC r12, r12, #0x0 ; #0xE for BX lr exit
0xE7ABCCAE
```

Writes:
```
7E0059E3
40F04F42
1*FF2FE1 # 0 if using `BX r0` exit E if using `BX lr` exit
```

## References and Acknowledgements

- [E-Sh4rk's original article for the hexwriter, crafting egg, and CPSR status reset](https://e-sh4rk.github.io/ACE3/emerald/hex-writer/hex-writer/)
- [Adrichu00's method of writing the hexwriter](https://gist.github.com/Adrichu00/49433953af9d6fd7c1cd368d48c68778)
- RationalPsycho on the Glitch City Research Institute Discord for the glitched mail inputs
- merrp on the Glitch City Research Institute Discord for the `STR+4` opcode used in the codes.