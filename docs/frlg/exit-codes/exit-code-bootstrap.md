# Exit Code Bootstrap for FRLG grab ACE
The purpose of this bootstrap is to allow more complex ACE payloads such as the hexwriter, and the hexecutor to be able to exit out of execution and hand back control to the game.

## Prequisites
- Prior knowledge on activating grab ACE
- A box 14 exit code, the setup can be found [here](FRLG_GrabACE_ShortExit.md)

## How to create
1. Make sure Box 10, Slot 19 is empty, then write the following box names:
    ```
    Box  1: 4 C U n n R … o	[4CUnnR…o]
    Box  2: P R o / F Q m _	[PRo/FQm ]
    Box  3: _ _ s K … o _ _	[  sK…o  ]
    Box  4: _ v I ? n _ _ _	[ vI?n   ]
    Box  5: U N ? n _ F ! q	[UN?n F!q]
    Box  6: F … o F ‘ ! n _	[F…oF‘!n ]
    Box  7: _ _ v J ? n _ _	[  vJ?n  ]
    Box  8: _ U T R o _ _ _	[ UTRo   ]
    Box  9: … G Q m ’ G Q m	[…GQm’GQm]
    Box 10: ? … o _ F ! q _	[?…o F!q ]
    Box 11: _ _ … ” ! n _ _	[  …”!n  ]
    Box 12: _ C J 9 n _ _ _	[ CJ9n   ]
    Box 13: k R R o _ F ! q	[kRRo F!q]
    ```
2. Execute the code

A shiny female Beedrill should appear in Box 10, Slot 19, its name should be `Â␣␣nÔ␣␣v␣␣` and its OT should be `␣î␣C␣␣␣`.
This is the exit code bootstrap, place it in Box 13, Slot 9 or later.

## Alternative methods
### Hexwriter
This method is provided as a quick way to adapt a `BX lr` hexwriter setup to a `BX r0` setup.

1. Write the following box names (ignore the spaces, they are provided for readability).
    ```
    Box  1: 00 00 00 00
    Box  2: 00 00 00 00
    Box  3: 03 00 8F E2
    Box  4: 0F 00 00 EA
    Box  5: 00 00 00 02
    Box  6: 00 20 00 BD
    Box  7: 00 00 00 00
    Box  8: 0F 00 00 00
    Box  9: 0F 00 00 00
    Box 10: 00 00 00 00
    Box 11: 00 00 00 00
    Box 12: 00 00 00 00
    Box 13: 00 00 00 00
    Box 14: 00 00 00 00
    ```
2. Execute the hexwriter

A shiny female Beedrill should appear in either Box 14, Slot 28 or the first available slot of the crafting table, its name should be `Â␣␣nÔ␣␣v␣␣` and its OT should be `␣î␣C␣␣␣`.
This is the exit code bootstrap, place it in Box 13, Slot 9 or later.

### Mail corruption
!!! note
    You do not need a box 14 exit code for this method.

This method is mainly provided for archival purposes.
It does not create the exact same bootstrap as the other two methods.
Only use this if you want to use mail glitch and/or really do not want to write two box name codes.

1. Make sure Box 3, Slot 1 is empty, then write the following message to the glitched mail:
    - Mail word 1 → !! or I
    - Mail word 2 → MARVEL SCALE
    - Mail word 3 → AUNT or COME ON or EARLIER
    - Mail word 5 → WANDERING 
    - All other words should be left untouched
2. A bad EGG should appear in Box 3, Slot 1, move it to Box 10, Slot 2 without using group selection.
3. Write the following box names:
    ```
    Box  1: C . U n n F … o	[C.UnnF…o]
    Box  2: … l o 7 … P q _	[…lo7…Pq ]
    Box  3: _ _ 9 F P q _ _	[  9FPq  ]
    Box  4: _ ? … P q _ _ _	[ ?…Pq   ]
    Box  5: v R … o C P P m	[vR…oCPPm]
    Box  6: F … o / F P q _	[F…o/FPq ]
    Box  7: _ _ C R … o _ _	[  CR…o  ]
    Box  8: _ “ Q P m _ _ _	[ “QPm   ]
    Box  9: z ♀ l o k … Q n	[z♀lok…Qn]
    Box 10: ♀ Q n F F U n _	[♀QnFFUn ]
    Box 11: _ _ g … ? q _ _	[  g…?q  ]
    Box 12: _ _ _ _ … _ _ _	[    …   ]
    Box 13: _ _ _ … _ _ _ _	[   …    ]
    Box 14: _ F o _ _ _ _ _	[ Fo     ]
    ```
4. Execute the code.

Box 14 should now be named `␣Foì` and the bad egg in Box 10, Slot 2 is now the exit code bootstrap, place it in Box 13, Slot 9 or later.
If you want to confirm it is indeed the bootstrap, place the bad EGG in Box 3, Slot 1, and activate mail corruption, the contents of the corrupted mail should be:
```
??? ???
??? ???
WANDERING ???
??? ???
???
```

## Testing the bootstrap
1. Move the bootstrap to Box 13, Slot 9 or later
2. Write the following box names:
    ```
    Box  1: _ _ _ … _ _ _ _	[   …    ]
    Box  2: _ ? ” _ _ _ _ O	[ ?”    O]
    Box  3: … o	[…o]
    ```
    - `MOVS pc, #0x324` executes a `BX r0` instruction located somewhere in the BIOS
3. Execute the code
4. If it does not crash, that means the bootstrap is working

## How to utilise the bootstrap
- Payloads that utilise the bootstrap must either never write to `r0`, or store the value of `r0` somewhere else (like another register) then write the value back to `r0` before exiting.
- Payloads should exit with `BX r0` which jumps to the code contained in the bootstrap which handles the exiting for you

## How it works
The bootstrap sets `r0` to the address of the Thumb code contained within its data that contains the exit code instructions, that being an instruction that clears `r0` and an instruction that branches the `PC` back to the return address stored in `LR`.

More details on how the grab ACE exit works can be found on the short exit guide’s [explanation](FRLG_GrabACE_ShortExit.md#explanation).

The standard variant created by either the box names or the hexwriter is a shiny female Beedrill with name `Â␣␣nÔ␣␣v␣␣` and OT `␣î␣C␣␣␣`.

The nickname is composed of the following ARM instructions:
```
E28F0003    ADD r0, pc, #3
EA00000F    B #0x44
```

The OT is composed of the following Thumb instructions:
```
2000    MOV r0, #0 ; clears r0
BD00    POP {pc} ; branches to related function to shifting Pokémon
```

### Mail corruption variant
Through both mail corruption and that box name code we wrote, we have corrupted the PID/OTID of the empty slot to become the following opcodes:
```
E24F0001 SUB r0, pc, #0x1
EA000011 B #0x4C
```

This stores the address of the bootstrap's nickname in `r0` then jumps to the next box slot.
Since bit 0 of `r0` is set to 1, that means that when the `BX r0` instruction is executed, the code in the nickname is run in Thumb mode.
From mail corruption, and the box name code, the nickname becomes the following Thumb opcodes:
```
2000 MOV r0, #0x0 ; zeroes out r0, tells game to the end the task of swapping
BD00 POP pc ; returns control to the game's code
```

## Technical details
### Box name codes
Below is the CodeGenerator input:
```
@@exit="Bootstrapped"
@@
SBC r11, pc, #0x2940
MOVS r12, #0xE200
BIC r12, #0xFF000 ; E200 & ~FF000 = 200
STRH r12, [r11, #10] ; Store misc flags
MOVS r12, #0xE28F0003 ? ; E28F0003 ADD r0, pc, #0x3
STR r12, [r11]! ; Store in chars 0-3 of nickname
MOVS r12, #0xFF
ADC r11, #3 ; r11 = Box 10, Slot 19 + 12
ADC r12, #0xEA000000 ; r12 = EA0000FF
BIC r12, #0xCF0 ; r12 & ~BF0 = EA00000F B pc + #0x3C
STRH r12, [r11, #16] ; Store species
STRH r12, [r11, #20] ; Store checksum
MOVS r10, #0xFF00 ; Temporarily store in r10
STR r12, [r11]! ; Store in chars 4-7 of nickname
ADC r11, #11 ; r11 = Box 10, Slot 19 + 23
ADC r12, r10, #0xBD000000 ; move value of r10 to r12
BIC r12, #0xDF00 ; r12 & ~DF00 = BD002000
; 2000 MOV r0, #0
; BD00 POP {pc}
STR r12, [r11]! ; Store chars 0-3 of OT
```

### Mail corruption method
The mail words have the following indexes:
|Word|Index (hex)|
|-|-|
|!! / I|**01|
|MARVEL SCALE|044F|
|AUNT / COME ON / EARLIER|**11|
|WANDERING|2000|

'WANDERING' forms the other half of our Thumb payload that `BX r0` will jump into, where its index perfectly matches with `MOV r0, #0x0`.
The rest of the words will partially form each ARM opcode that constitutes the PID/OTID with their most significant bytes being overwritten by the box name code.

Below is the CodeGenerator input:
```
; MAIL WORDS
; 1 -> !! / I
; 2 -> MARVEL SCALE
; 3 -> AUNT / COME ON / EARLIER
; 5 -> WANDERING
@@
SBC r10, pc, #0x2F40
MOVS r12, #0xE2
MVN r11, #0xFF
STRB r11, [r10, #0xA8]
STRB r12, [r10, #0xAA]
STRB r11, [r10, #0xAC]
MOVS r12, #0xEA00
STRH r12, [r10, #0xAD]
MOVS r12, #0xFF
STRB r12, [r10, #0xBA]
MOVS r12, #0xBD00
STRH r12, [r10, #0xB1]
MVN r11, #0xEE00000
SBC r11, #0xDF
SBC r11, #0xFF00000
SBC r12, pc, #0xC0
STR r11, [r12, #0xDB]!
BIC r0, r0, #0xFF
```

## Acknowledgements
- E-Sh4rk for creating the CodeGenerator, the `Create Pokemon from nothing (with exit code bootstrap)` code, and the `Certificate Exit Bootstrap` code which the exit code bootstrap codes is based off
- Sleipnir17 for creating the short exit code setup code which this code is derived from
- RETIRE for providing better methods to construct the Thumb code
- RationalPsycho on the Glitch City Research Institute for suggesting the use of mail to simplify the writing process