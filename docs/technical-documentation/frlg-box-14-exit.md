The grab ACE exit code consists of two parts: 
- An instruction that clears at least part of `R0`
- A branch to a subroutine related to shifting box Pokémon, address is stored in both `LR` and in the stack

Clearing at least the least significant byte of `R0` tells the game that the shift box Pokémon task is finished.
This prevents the game from softlocking upon branching back into the subroutine.
The softlock seen from an improper exit code is just the game continually branching back into the glitched callback in the boxes due to the task not being signalled as finished.

The box 14 exit code is composed of these two instructions:
- `BIC R0, R0, #0xFF` (`␣Fo`) clears least significant byte of `R0`
- `BX LR` (`ì`) performs a branch to the return address stored in `LR`

Below are the instructions that make up the box name code used to setup this exit code:
```
E3E0B6EE    MVN R11, #0xEE00000
E2CBB0DF    SBC R11, R11, #0xDF
E2CBB6FF    SBC R11, R11, #0xFF00000 ; R11 = E12FFF1E
E2CFCFE2    SBC R12, PC, #0x388 ; R12 = Address of Box 14 name - 0x3ED
0000FF00    filler
E5ACB3ED    STR R11, [R12, #0x3ED]! ; Store BX LR in Box 14 name
00FF0000    filler
B0000000    filler
FF000000    filler
B0000000    filler
00000000    filler
000000FF    filler
B0000000    filler
0000FF00    filler
B0000000    filler
00FF0000    filler
B0000000    filler
FF000000    filler
B0000000    filler
00000000    filler
000000FF    filler
B0000000    filler
0000FF00    filler
B0000000    filler
00FF0000    filler
B0000000    filler
FF000000    filler
B0000000    filler
00000000    filler
E3C000FF    BIC R0, R0, #0xFF
00000000    ; becomes BX LR (E12FFF1E)
```