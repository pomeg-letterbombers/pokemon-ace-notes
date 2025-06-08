The purpose of this bootstrap is to allow more complex ACE payloads such as the hexwriter, and the hexecutor to be able to exit out of execution and hand back control to the game.
It sets `r0` to the address of the bootstrap’s OT, which contains the exit code written in Thumb.

## Prequisites

- Prior knowledge on activating grab ACE
- A box 14 exit code, the setup can be found [here](box-14-exit.md)

## How to create

Make sure Box 10, Slot 19 is empty, then write and execute the following box name codes

=== "ENG/ITA/SPA"

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

=== "FRA"

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
    Box 11: _ _ … » ! n _ _	[  …»!n  ]
    Box 12: _ C J 9 n _ _ _	[ CJ9n   ]
    Box 13: k R R o _ F ! q	[kRRo F!q]
    ```
    
=== "GER"

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
    Box 11: _ _ … “ ! n _ _	[  …“!n  ]
    Box 12: _ C J 9 n _ _ _	[ CJ9n   ]
    Box 13: k R R o _ F ! q	[kRRo F!q]
    ```
    
A shiny female Beedrill should appear in Box 10, Slot 19, its name should be `Â␣␣nÔ␣␣v␣␣` and its OT should be `␣î␣C␣␣␣`.
This is the exit code bootstrap, place it after the entrypoint of your grab ACE Pokémon (for 0x351 it is Box 13, Slot 10).

### Create via Hexwriter

This method is provided as a quick way to adapt a `BX lr` hexwriter setup to a `BX r0` setup.

Write the following box names, then execute the hexwriter (ignore the spaces, they are provided for readability)

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

A shiny female Beedrill should appear in either Box 14, Slot 28 or the first available slot of the crafting table, its name should be `Â␣␣nÔ␣␣v␣␣` and its OT should be `␣î␣C␣␣␣`.
This is the exit code bootstrap, place it in Box 13, Slot 9 or later.

## Testing the bootstrap

Write and execute the following box names:

=== "ENG/ITA/SPA"

    ```
    Box  1: m … l o y ♀ Q o	[m…loy♀Qo]
    Box  2: F U n m ” Q o _	[FUnm”Qo ]
    Box  3: _ _ _ “ ? q z	[   “?qz]
    Box  4: v	[v]
    ```

=== "FRA"

    ```
    Box  1: m … l o y ♀ Q o	[m…loy♀Qo]
    Box  2: F U n m » Q o _	[FUnm»Qo ]
    Box  3: _ _ _ « ? q z	[   «?qz]
    Box  4: v	[v]
    ```

=== "GER"

    ```
    Box  1: m … l o y ♀ Q o	[m…loy♀Qo]
    Box  2: F U n m “ Q o _	[FUnm“Qo ]
    Box  3: _ _ _ „ ? q z	[   „?qz]
    Box  4: v	[v]
    ```
    
The game should not crash, and the names of Box 2 and Box 3 should have changed.
The space at the end of Box 2’s name should have become `Œ`, and the first two spaces of Box 3 should have become `␣m`.
This means the code worked, you do not need to keep the names of Boxes 2 and 3, they just serve as a test.

## How to utilise the bootstrap

- Payloads that utilise the bootstrap must either never write to `r0`, or store the value of `r0` somewhere else (like another register) then write the value back to `r0` before exiting.
- Payloads should exit with `BX r0` which jumps to the code contained in the bootstrap which handles the exiting for you

## Acknowledgements

- E-Sh4rk for creating the CodeGenerator, the `Create Pokemon from nothing (with exit code bootstrap)` code, and the `Certificate Exit Bootstrap` code which the exit code bootstrap codes is based off
- Sleipnir17 for creating the short exit code setup code which this code is derived from
- RETIRE for providing better methods to construct the Thumb code
- RationalPsycho on the Glitch City Research Institute for suggesting the use of mail to simplify the writing process (though for this bootstrap, it ended up not being used)
