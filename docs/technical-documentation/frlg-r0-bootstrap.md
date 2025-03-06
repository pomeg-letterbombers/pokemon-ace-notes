
The bootstrap sets `r0` to the address of the Thumb code contained within its data that contains the exit code instructions, that being an instruction that clears `r0` and an instruction that branches the `PC` back to the return address stored in `LR`.

More details on how the grab ACE exit works can be found on the short exit guide’s [explanation](./box-14-exit.md#explanation).

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