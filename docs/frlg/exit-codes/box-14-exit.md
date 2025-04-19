!!! warning

    For best results, make sure you are using real hardware or an accurate emulator (such as mGBA 0.9.0+) with a genuine GBA BIOS.

    If you do not have, or want to use those, please refer to the old [Box 14 exit code guide](old-box-14-exit.md) instead.

This exit code allows box name codes to be longer by moving the exit code to the name of Box 14, in contrast to the standard exit code spanning the names of Box 10 and 11.
Box name codes using this exit code do not require the use of an additional bootstrap Pokémon.

## Instructions

Change the name of box 14 to the following:

```
Box 14: U … o _ _ … o a	[U…o  …oa]
```

Then set the box wallpapers to the following:

=== "ENG"

    - Box 1: ETCETERA → STARS
    - Box 2: SCENERY 1 → DESERT
    - Box 3 and later: anything

=== "GER"

    - Box 1: SONSTIGES → STERN
    - Box 2: LISTE1 → WÜSTE
    - Box 3 and later: anything

The exit code should now be set up, any codes with the “Bootstrapped” exit should work without crashing or softlocking.

??? info "Optional test code"

    Write the following box names and then trigger ACE.

    ```
    Box  1: 4 C U n n R … o	[4CUnnR…o]
    Box  2: P R o / F w m _	[PRo/Fwm ]
    Box  3: _ _ V H 0 o _ _	[  VH0o  ]
    Box  4: _ … H R n _ _ _	[ …HRn   ]
    Box  5: / F Q m D F Q m	[/FQmDFQm]
    Box  6: _ _ _ _ _ _ … _	[      … ]
    Box  7: _ _ _ _ _ … _ _	[     …  ]
    Box  8: _ _ _ _ … _ _ _	[    …   ]
    Box  9: _ _ _ … _ _ _ _	[   …    ]
    Box 10: _ _ _ _ _ _ … _	[      … ]
    Box 11: _ _ _ _ _ … _ _	[     …  ]
    Box 12: _ _ _ _ … _ _ _	[    …   ]
    Box 13: _ _ _ … _ _ _ _	[   …    ]
    ```

    A shiny Bulbasaur should appear in Box 10, Slot 19, that means the exit code is working as expected.

If the game crashes or softlocks it may have been caused by the following:

- Incorrectly written box names
- There are Pokémon (visible or not) after the entrypoint of your glitch Pokémon (for 0x0351, it is Box 13, Slot 8)
    - Move any valuable non-bootstrap Pokémon to any box slot before the entrypoint
    - Use group selection to remove any potential leftover invisible Pokémon before the entrypoint

## Acknowledgements

- E-Sh4rk for creating the [CodeGenerator](https://e-sh4rk.github.io/CodeGenerator)
- Mettrich on the Glitch City Research Institute Discord server for creating the improved box 14 exit.
