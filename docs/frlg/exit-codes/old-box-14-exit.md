---
title: Box 14 exit code (old)
---

!!! tip

    Use the [improved Box 14 exit code](box-14-exit.md) if you are on retail hardware or an accurate emulator with a genuine GBA BIOS.
    It is much faster to set up.
    

This exit code allows box name codes to be longer by moving the exit code to the name of Box 14, in contrast to the standard exit code spanning the names of Box 10 and 11.
Box name codes using this exit code do not require the use of an additional bootstrap Pokémon.

## Instructions

Write and execute the following box names:

```
Box  1: z ♀ l o k … Q n	[z♀lok…Qn]
Box  2: ♀ Q n n U U n _	[♀QnnUUn ]
Box  3: _ _ y ‘ ? q _ _	[  y‘?q  ]
Boxes 4-13: A A A A A A A A	[AAAAAAAA]
Box 14: _ F o _ _ _ _ _	[ Fo     ]
```

Box 14 should be named `␣Foì`, this is the Box 14 exit code.

If the game crashes or softlocks it may have been caused by the following:

- Incorrectly written box names
- There are Pokémon (visible or not) after the entrypoint of your glitch Pokémon (for 0x0351, it is Box 13, Slot 8)
    - Move any valuable non-bootstrap Pokémon to any box slot before the entrypoint
    - Use group selection to remove any potential leftover invisible Pokémon before the entrypoint

## Acknowledgements

- E-Sh4rk for creating the [CodeGenerator](https://e-sh4rk.github.io/CodeGenerator)
- Sleipnir17 for creating the [short exit code setup code](https://e-sh4rk.github.io/EmeraldACE_web/doc/FRLG_Short_Exit_Codes_Guide.pdf) which this code is derived from
- merrp for the [Map Warp code](https://www.youtube.com/watch?v=yVhK4pLC9ac) which inspired the creation of the Box 14 exit code.
