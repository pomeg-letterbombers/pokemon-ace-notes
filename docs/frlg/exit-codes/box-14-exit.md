# Box 14 Exit Code
This exit code allows box name codes to be longer by moving the exit code to the name of Box 14, in contrast to the standard exit code spanning the names of Box 10 and 11.
Box name codes using this exit code do not require the use of an additional bootstrap Pokémon.

## Instructions
1. Write the following box names:
    ```
    Box  1: z ♀ l o k … Q n	[z♀lok…Qn]
    Box  2: ♀ Q n n U U n _	[♀QnnUUn ]
    Box  3: _ _ y ‘ ? q _ _	[  y‘?q  ]
    Box  4: _ _ _ _ … _ _ _	[    …   ]
    Box  5: _ _ _ … _ _ _ _	[   …    ]
    Box  6: _ _ _ _ _ _ … _	[      … ]
    Box  7: _ _ _ _ _ … _ _	[     …  ]
    Box  8: _ _ _ _ … _ _ _	[    …   ]
    Box  9: _ _ _ … _ _ _ _	[   …    ]
    Box 10: _ _ _ _ _ _ … _	[      … ]
    Box 11: _ _ _ _ _ … _ _	[     …  ]
    Box 12: _ _ _ _ … _ _ _	[    …   ]
    Box 13: _ _ _ … _ _ _ _	[   …    ]
    Box 14: _ F o _ _ _ _ _	[ Fo     ]
    ```
2. Execute the code

Box 14 should be named `␣Foì`, this is the Box 14 exit code.

If the game crashes or softlocks it may have been caused by the following:
- Incorrectly written box names
- There are Pokémon (visible or not) after the entrypoint of your glitch Pokémon (for 0x0351, it is Box 13, Slot 8)
    - Move any valuable non-bootstrap Pokémon to any box slot before the entrypoint
    - Use group selection to remove any potential leftover invisible Pokémon before the entrypoint

## Explanation
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

## Acknowledgements
- E-Sh4rk for creating the [CodeGenerator](https://e-sh4rk.github.io/CodeGenerator)
- Sleipnir17 for creating the [short exit code setup code](https://e-sh4rk.github.io/EmeraldACE_web/doc/FRLG_Short_Exit_Codes_Guide.pdf) which this code is derived from
- merrp for the [Map Warp code](https://www.youtube.com/watch?v=yVhK4pLC9ac) which inspired the creation of the Box 14 exit code.