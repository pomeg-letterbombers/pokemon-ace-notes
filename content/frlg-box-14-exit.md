---
title: "Box 14 Exit Code"
---
!!! warning

    For best results, make sure you are using real hardware or an accurate emulator (such as mGBA 0.9.0+) with a genuine GBA BIOS.

    If you do not have, or want to use those, please use the [*BIOS-less* version](frlg-box-14-exit-biosless.md) of this exit code instead.

This exit code allows box name codes to be longer by moving the exit code to the name of Box 14, in contrast to the standard exit code spanning the names of Box 10 and 11.
Box name codes using this exit code do not require the use of an additional bootstrap Pokémon.

## Instructions

Change the name of box 14 to the following:

```
Box 14: U . o _ _ , o a	[U.o  ,oa]
```

Then set the box wallpapers to the following:

=== "ENG"

    - Box 1: ETCETERA → STARS
    - Box 2: SCENERY 1 → DESERT
    - Box 3 and later: anything

=== "FRA"

    - Box 1: AUTRES → ÉTOILES
    - Box 2: PAYSAGES 1 → DÉSERT
    - Box 3 and later: anything

=== "ITA"

    - Box 1: ALTRI → STELLE
    - Box 2: SFONDI 1 → DESERTO
    - Box 3 and later: anything

=== "GER"

    - Box 1: SONSTIGES → STERN
    - Box 2: LISTE1 → WÜSTE
    - Box 3 and later: anything

=== "SPA"

    - Box 1: OTROS → ESTRELLAS
    - Box 2: PAISAJE 1 → DESIERTO
    - Box 3 and later: anything

The exit code should now be set up. Codes with the “Bootstrapped” exit should work without crashing or softlocking.

<div class="admonition info" markdown="block">
<p class="admonition-title">Optional test code</p>

This code can be used as a quick test for testing the Box 14 exit. **Set** the names of the boxes as shown in the below code block:

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
- Mettrich on the Glitch City Research Institute Discord server for creating the improved box 14 exit.
