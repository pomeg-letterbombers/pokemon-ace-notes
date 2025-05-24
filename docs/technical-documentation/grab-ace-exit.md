## How to exit ACE?

Under normal circumstances, when swapping two Pokémon in the PC the game does the following:

1. Sets the current `PokeStorageTask` to [`Task_ShiftMon`](https://github.com/pret/pokefirered/blob/bf6bfbd2ed5ead6319cb8efcb537ac14d2b128d7/src/pokemon_storage_system_tasks.c#L1117)
2. `Task_ShiftMon` calls [`DoMonPlaceChange`](https://github.com/pret/pokefirered/blob/bf6bfbd2ed5ead6319cb8efcb537ac14d2b128d7/src/pokemon_storage_system_data.c#L428), waiting for the function to return `false` to continue.
3. `DoMonPlaceChange` calls member `monPlaceChangeFunc` stored in `gStorage` which should normally be the pointer of[`MonPlaceChange_Shift`](https://github.com/pret/pokefirered/blob/bf6bfbd2ed5ead6319cb8efcb537ac14d2b128d7/src/pokemon_storage_system_data.c#L488) during a swap.
    - The return type of `DoMonPlaceChange` is specified as `u8` (unsigned 8-bit integer).
    - A boolean’s numerical form is typically `0` is `false`, everything else is `true`.
4. `MonPlaceChange_Shift` does the actual operation of swapping the two Pokémon, eventually returning `false`, allowing `Task_ShiftMon` to continue and change the `PokeStorageTask` to `Task_PokeStorageMain`.

However when perform this swap with a glitch Pokémon with a particularly long name, a few things happen:

- Parts of the long name overwrite the pointer stored in `monPlaceChangeFunc` each time the long name is loaded (which is after the first iteration of `DoMonPlaceChange` during an animation).
- As a result when its time for `DoMonPlaceChange` to call `monPlaceChangeFunc`, it ends up jumping to whatever “pointer” the very long name happen to overwrite `monPlaceChangeFunc` to.
- In most cases, this leads to a crash but for some (like species 0x351) this allows for arbitrary code execution!

While arbitrary code execution is neat, once we done what we wanted to do, how do we safely return control back to the game?
If we look at what the game does normally while swapping two Pokémon, `Task_ShfitMon` which called the “pointer” that the long name wrote in is expecting a `u8` that equals to `false` which is `0`.
Translating this to GBA ARM assembly, at its simplest form, we get this:

```
MOV r0, #0x0 ; setting return value to false, r0 is used as the return value
BX lr ; jump to return address
```

While this looks simple to implement, due to the circumstances of the ACE environment, the exit have been reimplemented in a number of different ways which will be covered in the next section.

## Implementation of this exit

### The standard exit(s)

While `MOV r0, #0x0` is not writable in its standard form, `MOVS r0, #0x0` is (it sets the `Z` flag, but that does not matter).
`BIC r0, #0xFF` is also an acceptable alternative since the return type of `DoMonPlaceChange` is `u8`, clearing the lower 8 bits of `r0` is enough to return `false`.

However `BX lr` is not writable with the standard character set, glitchers have to come up with a way to be able to write `BX lr`.
The opcode for `BX lr` can be computed into a register then be stored in a word-aligned address **after** the current value of the `pc` register.
This means that the `STR` instruction must be located on the first half of Box 13, or earlier, as read-ahead will mean that the `BX lr` instruction will not be executed.
Thus while this method works, will also add to the length of the box name payload, the only upside to this method is that it works wihtout needing a genuine GBA BIOS.

??? info "BX lr computation instructions"

    ```
    E3E0B6EE	MVN r11, #0xEE00000
    E2CBB0DF	SBC r11, #0xDF
    E2CBB6FF	SBC r11, #0xFF00000 ; r11 = E12FFF1E (BX lr)
    ```

    or this:

    ```
    E3E0B0E0	MVN r11, #0xE0
    E3CBB6EE	BIC r11, #0xEE00000
    E2CBB6FF	SBC r11, #0xFF00000 ; r11 = E12FFF1E (BX lr)
    ```

!!! note inline end

    There is also a BIOS jump for `BX r0`, the `MOVS` instruction looks like:

    ```
    E3B0FFC9	MOVS pc, #0x324
    ```

But merrp and luckytyphlosion found an even shorter method of executing `BX lr` with the limited character set available, calling `MOVS pc, <immediate>` with the immediate being the address of an ARM mode `BX lr`.
It just so happens that one such compatible address is located in the BIOS producing the following end result:

```
E3B0FFD5	MOVS pc, #0x354
```

Which when combined with `MOVS r0, #0x0` looks like:

```
E3B00000	MOVS r0, #0x0
E3B0FFD5	MOVS pc, #0x354
```

It also happens that `MOVS pc, <immediate>` is only writable using one of the EOF terminators, so with this exit code the code can be 3, 6 or 11 box names long.
In box name form, it looks like this:

```
Box 10: _ _ _ _ _ … o a	[     …oa]
Box 11: … o	[…o]
```

This form of the exit is also used, for codes that need to fit one more instruction then what the standard exit allows:

```
E3C000FF	BIC r0, #0xFF ; r0 & 0xFF = 0, set return value to false
; (insert extra unrelated instruction)
E3B0FFD5	MOVS pc, #0x354
```

In box name form, it looks like this:

```
Box 10: _ F o * * * * a	[ Fo****a]
Box 11: … o	[…o]
* = extra instruction
```

### Box 14 exit

This exit consists of the following instructions in the name of Box 14:

```
E3C000FF	BIC r0, #0xFF ; set return value to false
E12FFF1E	BX lr
```

and in box form, it looks like this:

```
Box 14: _ F o ì	[ Foì]
```

Below are the instructions of the code used to setup the Box 14 exit

```
E3E0B6EE	MVN r11, #0xEE00000
E2CBB0DF	SBC r11, #0xDF
E2CBB6FF	SBC r11, #0xFF00000 ; r11 = E12FFF1E
E2CFCFE2	SBC r12, pc, #0x388 ; r12 = Address of Box 14 name - 0x3ED
0000FF00	; (filler)
E5ACB3ED	STR r11, [r12, #0x3ED]! ; Store BX LR in Box 14 name
...
E3C000FF    BIC r0, #0xFF
00000000    ; becomes BX lr (E12FFF1E)
```

### Improved box 14 exit

Mettrich came up with this exit which does not require a set up code to write a BX instruction to the name of box 14.
Instead it just requires changing the name of Box 14 as well as changing the box wallpapers.
This code jumps to the `BX lr` instruction located in the GBA BIOS.

The exit consists of the following instructions:

```
E3B0CFFF    MOVS r12, #0x3FC
E3B00000    MOVS r0, #0x0 ; set return value to false
020CFFD5    ANDEQ pc, r12, #0x354 ; jump to 0x354 (BX lr)
```

The box name component of the exit looks like this:

```
Box 14: U … o _ _ … o a	[U…o  …oa]
```

And below are the box wallpaper settings needed for the exit:

- Box 1: STARS (0x0C)
- Box 2: DESERT (0x02)

### `r0` bootstrap

The current exit code bootstrap (called the `r0` bootstrap to distinguish it from an older bootstrap) consists of two parts.
It is a shiny female Beedrill with name `Â␣␣nÔ␣␣v␣␣` and OT `␣î␣C␣␣␣`.

The nickname consists of the following instructions:

```
E28F0003	ADD r0, pc, #0x3 ; sets r0 to address of OT
EA00000F	B pc+0x44
```

As bit 0 of `r0` is set; when a `BX r0` instruction is executed, the CPU will be executing instructions there in Thumb mode, rather than ARM.
Thumb mode allows the exit code written in the OT to be smaller byte-wise, and it also makes the setup code shorter as well.
The OT consists of the following Thumb instructions:

```
2000	MOV r0, #0x0
BD00	POP {pc}
```

In this context, `POP {pc}` jumps to the middle of `Task_ShiftMon` where it checks whether the return value of `DoMonPlaceChange` evaluates to `false`, this is just another way of jumping to a return address (though it is not the same return address as the one defined in `lr`, which is located in the middle of `DoMonPlaceChange`).

Below is the instructions of the box name code used to create the bootstrap (note that it exits using a box 14 exit set up earlier):

```
E2CFBDA5	SBC r11, pc, #0x2940 ; r11 = address of Box 10, Slot 19 + 9
E3B0CCE2	MOVS r12, #0xE200
E3CCCAFF	BIC r12, #0xFF000 ; r12 = 0200, hasSpecies set
E1CBC0BA	STRH r12, [r11, #0xA] ; Store hasSpecies flag
0000FF00	; (filler)
E3B0C5E7	MOVS r12, #0x39C00000
00FF0000	; (filler)
E2ACC3EA	ADC r12, #0xA8000003
FF000000	; (filler)
E2ACC8CF	ADC r12, #0xCF0000 ; r12 = E28F0003 (ADD r0, pc, #0x3)
E5ABC000	STR r12, [r11]! ; Store in nickname chars 0-3
E3B0C0FF	MOVS r12, #0xFF
E2ABB3C0	ADC r11, #0x3 ; r11 = Box 10, Slot 19 + 12
0000FF00	; (filler)
E2ACC4EA	ADC r12, #0xEA000000
00FF0000	; (filler)
E3CCCECF	BIC r12, #0xCF0 ; r12 = EA00000F (B pc+0x44)
FF000000	; (filler)
E1CBC1B0	STRH r12, [r11, #0x10] ; Store checksum
E1CBC1B4	STRH r12, [r11, #0x14] ; Store species
E3B0ACFF	MOVS r10, #0xFF00 ; Temporarily store in r10
E5ABC000	STR r12, [r11]! ; Store in nickname chars 4-7
0000FF00	; (filler)
E2ABB2B0	ADC r11, #0xB ; r11 = Box 10, Slot 19 + 23
00FF0000	; (filler)
E2AAC4BD	ADC r10, r12, #0xBD000000 ; move r10 into r12
FF000000	; (filler)
E3CCCCDF	BIC r12, #0xDF00 ; r12 = BD002000 (MOV r0, #0 ; POP {pc})
E5ABC000	STR r12, [r11]! ; Store in OT
```

### Legacy bootstrap

This bootstrap can be made in a variety of ways, but all it does is setting `r0` to `0` and uses a `BX lr` written somewhere else to complete an exit.
The current version of this bootstrap is made entirely by mail corruption and below is the mail message with the words replaced by their hexadecimal indexes:

```
0200 0200
0000 1200
003F 0A00
003F 1A00
0000
```

Which is interpreted as:

```
02000200	ANDEQ r0, #0x0 ; encoding ensures resulting bad egg is visible
12000000	ANDNE r0, #0x0
0A00003F	B pc+0x104 ; jumps to ~3 box slots ahead
1A00003F	B pc+0x104
```

## Acknowledgements

- [pret](https://github.com/pret/) for the `pokefirered` decompilation which allowed me to make sense of the exit
- Adrichu00 for clarifying to me how the game handles the task call when a glitch Pokémon with a long name is involved
- [merrp](https://youtube.com/@pokemerrp) for showing various tricks which allowed 
- RationalPsycho for suggesting the use of mail to shorten the process of writing payloads
- [Sleipnir17](https://youtube.com/@Sleipnir17) for the `BX r0` set up code which has been adapted for `BX lr`
- [E-Sh4rk](https://mlaurent.ovh/) for his [CodeGenerator](https://e-sh4rk.github.io/CodeGenerator/) which was used to create many of the box name codes
- [RETIRE](https://youtube.com/@RETIREglitch) for suggesting a better way to jump to a return address in Thumb (`POP {pc}`)
- [デテロニー](https://www.youtube.com/@detelony) for the [Japanese FR/LG ACE setup](https://www.youtube.com/watch?v=i9d4AyI2l1A) which also convinced me to use `POP {pc}`.
- Mettrich on the Glitch City Research Institute Discord server for creating the improved box 14 exit.