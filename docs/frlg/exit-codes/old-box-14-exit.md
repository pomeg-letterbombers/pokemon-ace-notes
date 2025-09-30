---
title: Box 14 Exit Code (BIOS-less)
---
!!! tip

    Use the [improved Box 14 exit code](box-14-exit.md) if you are on retail hardware or an accurate emulator with a genuine GBA BIOS.
    It is much faster to set up.
    

This exit code allows box name codes to be longer by moving the exit code to the name of Box 14, in contrast to the standard exit code spanning the names of Box 10 and 11.
Box name codes using this exit code do not require the use of an additional bootstrap Pokémon.

## Instructions

**Set** the names of the boxes as shown in the below code block:

```
Box  1:	z L o o k F R n	[zLookFRn]
Box  2:	5 R n n U U n  	[5RnnUUn]
Box  3:	A A y 2 ? q    	[AAy2?q]
Box  4:	A              	[A]
Box  5:	A              	[A]
Box  6:	_ F o H I C o r	[ FoHICor]
Box  7:	B n            	[Bn]
Boxes 8 to 13: (leave as is)
Box 14:	_ F o          	[ Fo]
```

Then trigger ACE.

The code should rename Box 14 to `␣Foì`, the Box 14 exit code has now been set up. Codes with the “Bootstrapped” exit should work without crashing or softlocking.

<div class="admonition info" markdown="block">
<p class="admonition-title">Optional test code</p>

This code can be used as a quick test for testing the Box 14 exit. Simply set the names of the boxes as shown in the below code block:

```
Box  1: C C U n n R . o [CCUnnR.o]
Box  2: P R o / G w m   [PRo/Gwm]
Box  3: A A R G . m     [AARG.m]
Box  4: A / F Q m       [A/FQm]
Box  5: D F Q m         [DFQm]
Box  6: A               [A]
Box  7: A               [A]
Box  8: A               [A]
Box  9: A               [A]
Box 10: A               [A]
Box 11: A               [A]
Box 12: A               [A]
Box 13: A               [A]
Box 14: (leave as is)
```

Then trigger ACE.

The game should not softlock or crash, and a level 0, shiny, female Kadabra should appear in the last slot of Box 9. This means the Box 14 exit has been correctly set up.

</div>

If the game crashes or softlocks it may have been caused by the following:

- Incorrectly written box names
- There are Pokémon (visible or not) after the entrypoint of your glitch Pokémon (for 0x0351, it is Box 13, Slot 8)
    - Move any valuable non-bootstrap Pokémon to any box slot before the entrypoint
    - Use group selection to remove any potential leftover invisible Pokémon before the entrypoint

## Acknowledgements

- E-Sh4rk for creating the [CodeGenerator](https://e-sh4rk.github.io/CodeGenerator)
- Sleipnir17 for creating the [short exit code setup code](https://e-sh4rk.github.io/EmeraldACE_web/doc/FRLG_Short_Exit_Codes_Guide.pdf) which this code is derived from
- merrp for the [Map Warp code](https://www.youtube.com/watch?v=yVhK4pLC9ac) which inspired the creation of the Box 14 exit code.