!!! info

    This guide is only for US/European versions of Pokémon FireRed/Leafgreen.

The hexadecimal writer (hexwriter) is a bad egg that interprets the box names as hexadecimal strings and writes the hexadecimal to user-defined location (typically somewhere within the PC boxes).
This bypasses the game’s regular (and limited) character encoding, easing the process of writing arbitrary data to a given location.

For each hexadecimal string encoded in a box name:

- Each character (‘0’-‘9’, ‘A’-‘F’) represents a nibble
    - Two nibbles make a byte
    - Each box name is eight characters long, therefore are eight nibbles long, and four bytes long
- 4 bytes ✕ 14 names = a total of 56 bytes can be written to a location all at once 

## Prequisites

- Game Boy Advance console or a highly-accurate emulator (like mGBA 0.9.0+)
   - These codes do not work if the `PC` register is aligned, e.g. executing ACE through an inaccurate emulator
   - If you are not using 0x351, check that the glitch Pokémon that you are using has bit 1 of its entrypoint set.
     If it is not set, that means it executes with an aligned `PC` register and you must use a different Pokémon
- Knowledge on how to perform mail corruption and grab ACE
- The box 14 exit code
    - Instructions on how to set this up can be found [here](../exit-codes/box-14-exit.md)
- The exit code bootstrap.
    - This is technically not necessary for the box name codes and can be created after the creation of the hexwriter
    - This will allow the hexwriter to exit properly via `r0`
    - Instructions on how to create this can be found [here](../exit-codes/exit-code-bootstrap.md)
- Snorlax and Omanyte has been seen on the save file


## Creating the hexwriter

Make sure that Box 3, Slot 1 is empty then give the last party member mail and write the following message to the mail:

=== "ENG"

    ```
    OMANYTE      SNORLAX
    LISTEN       ???
    THICK FAT    MINUS
    PICKUP       MARVEL SCALE
    LIKELY TO
    ```

=== "FRA"

    ```
    AMONITA      RONFLEX
    QUELQU'UN    ???
    ISOGRAISSE   MINUS
    RAMASSAGE    ECAILLE SPE.
    TU VAS
    ```


=== "ITA"

    ```
    OMANYTE      SNORLAX
    DI           ???
    GRASSOSPESSO MENO
    RACCOLTA     PELLEDURA
    AVETE
    ```

=== "GER"

    ```
    AMONITAS     RELAXO
    ZUHÖREN      ???
    SPECKSCHICHT MINUS
    MITNAHME     NOTSCHUTZ
    VERMUTLICH
    ```

=== "SPA"

    ```
    OMANYTE      SNORLAX
    A            ???
    SEBO         MENOS
    RECOGIDA     ESCAMA ESP.
    VER
    ```

A bad egg should appear in Box 3, Slot 1, move this to Box 10, Slot 2.

Then write and then execute the following box names:

=== "ENG/ITA/SPA"

    ```
    ### CODE 1 ###
    Box  1: C C U n 7 T … o	[CCUn7T…o]
    Box  2: _ _ _ 7 F Q q _	[   7FQq ]
    Box  3: _ _ n F … o _ _	[  nF…o  ]
    Box  4: _ 9 F Q q _ _ _	[ 9FQq   ]
    Box  5: t R … o , F ? n	[tR…o,F?n]
    Box  6: _ _ _ C P Q m _	[   CPQm ]
    Box  7: _ _ o F … o _ _	[  oF…o  ]
    Box  8: _ ” F Q q _ _ _	[ ”FQq   ]
    Box  9: F F … o ’ F Q q	[FF…o’FQq]
    Box 10: _ _ _ N G … o _	[   NG…o ]
    Box 11: _ _ ♀ F w q _ _	[  ♀Fwq  ]
    Box 12: _ s R … o _ _ _	[ sR…o   ]
    Box 13: d F ? n ‘ F Q m	[dF?n‘FQm]

    ### CODE 2 ###
    Box  1: C C U n W M … o	[CCUnWM…o]
    Box  2: _ _ _ k J ? n _	[   kJ?n ]
    Box  3: _ _ W P ? n _ _	[  WP?n  ]
    Box  4: _ “ F ? n _ _ _	[ “F?n   ]
    Box  5: A F ! q P K … o	[AF!qPK…o]
    Box  6: _ _ _ t P ? n _	[   tP?n ]
    Box  7: _ _ 0 Q ? n _ _	[  0Q?n  ]
    Box  8: _ G T ? n _ _ _	[ GT?n   ]
    Box  9: – R ! s H K … o	[–R!sHK…o]
    Box 10: _ _ _ ” H ? n _	[   ”H?n ]
    Box 11: _ _ z R ? n _ _	[  zR?n  ]
    Box 12: _ J R ? n _ _ _	[ JR?n   ]
    Box 13: – R ! s _ _ _ _	[–R!s    ]

    ### CODE 3 ###
    Box  1: C C U n z K … o	[CCUnzK…o]
    Box  2: _ _ _ 0 L ? n _	[   0L?n ]
    Box  3: _ _ Q P ? n _ _	[  QP?n  ]
    Box  4: _ M F ! q _ _ _	[ MF!q   ]
    Box  5: 1 H l o I M ? n	[1HloIM?n]
    Box  6: _ _ _ l P ? n _	[   lP?n ]
    Box  7: _ _ F H ? n _ _	[  FH?n  ]
    Box  8: _ – R ! s _ _ _	[ –R!s   ]
    Box  9: L I … o R M R n	[LI…oRMRn]
    Box 10: _ _ _ Z Q R n _	[   ZQRn ]
    Box 11: _ _ – R ! s _ _	[  –R!s  ]
    Box 12: _ _ _ _ … _ _ _	[    …   ]
    Box 13: _ _ _ … _ _ _ _	[   …    ]

    ### CODE 4 ###
    Box  1: C C U n G H … o	[CCUnGH…o]
    Box  2: _ _ _ t M ? n _	[   tM?n ]
    Box  3: _ _ . R ? n _ _	[  .R?n  ]
    Box  4: _ C U ? n _ _ _	[ CU?n   ]
    Box  5: Y F ! q N I l o	[YF!qNIlo]
    Box  6: _ _ _ Y M ? n _	[   YM?n ]
    Box  7: _ _ l P ? n _ _	[  lP?n  ]
    Box  8: _ … H ? n _ _ _	[ …H?n   ]
    Box  9: – R ! s P K … o	[–R!sPK…o]
    Box 10: _ _ _ 6 P ? n _	[   6P?n ]
    Box 11: _ _ C S ? n _ _	[  CS?n  ]
    Box 12: _ G F ? n _ _ _	[ GF?n   ]
    Box 13: – R ! s _ _ _ _	[–R!s    ]

    ### CODE 5 ###
    Box  1: C C U n , I l o	[CCUn,Ilo]
    Box  2: _ _ _ q M ? n _	[   qM?n ]
    Box  3: _ _ P P ? n _ _	[  PP?n  ]
    Box  4: _ F I ? n _ _ _	[ FI?n   ]
    Box  5: k F ! q X H … o	[kF!qXH…o]
    Box  6: _ _ _ 1 M ? n _	[   1M?n ]
    Box  7: _ _ x R ? n _ _	[  xR?n  ]
    Box  8: _ 0 R ? n _ _ _	[ 0R?n   ]
    Box  9: C U ? n – R ! s	[CU?n–R!s]
    Box 10: _ _ _ 4 J l o _	[   4Jlo ]
    Box 11: _ _ 0 I ? n _ _	[  0I?n  ]
    Box 12: _ k M ? n _ _ _	[ kM?n   ]
    Box 13: e P ? n – R ! s	[eP?n–R!s]

    ### CODE 6 ###
    Box  1: C C U n N I l o	[CCUnNIlo]
    Box  2: _ _ _ b M ? n _	[   bM?n ]
    Box  3: _ _ c R ? n _ _	[  cR?n  ]
    Box  4: _ 2 S ? n _ _ _	[ 2S?n   ]
    Box  5: H F ? n w F ! q	[HF?nwF!q]
    Box  6: _ _ _ l K … o _	[   lK…o ]
    Box  7: _ _ 1 L ? n _ _	[  1L?n  ]
    Box  8: _ E O ? n _ _ _	[ EO?n   ]
    Box  9: G S ? n – R ! s	[GS?n–R!s]
    Box 10: _ _ _ m F l o _	[   mFlo ]
    Box 11: _ _ y L R o _ _	[  yLRo  ]
    Box 12: _ m H R o _ _ _	[ mHRo   ]
    Box 13: _ H ? n – R ! s	[ H?n–R!s]
    ```

=== "FRA"

    ```
    ### CODE 1 ###
    Box  1: C C U n 7 T … o	[CCUn7T…o]
    Box  2: _ _ _ 7 F Q q _	[   7FQq ]
    Box  3: _ _ n F … o _ _	[  nF…o  ]
    Box  4: _ 9 F Q q _ _ _	[ 9FQq   ]
    Box  5: t R … o , F ? n	[tR…o,F?n]
    Box  6: _ _ _ C P Q m _	[   CPQm ]
    Box  7: _ _ o F … o _ _	[  oF…o  ]
    Box  8: _ » F Q q _ _ _	[ »FQq   ]
    Box  9: F F … o ’ F Q q	[FF…o’FQq]
    Box 10: _ _ _ N G … o _	[   NG…o ]
    Box 11: _ _ ♀ F w q _ _	[  ♀Fwq  ]
    Box 12: _ s R … o _ _ _	[ sR…o   ]
    Box 13: d F ? n ‘ F Q m	[dF?n‘FQm]

    ### CODE 2 ###
    Box  1: C C U n W M … o	[CCUnWM…o]
    Box  2: _ _ _ k J ? n _	[   kJ?n ]
    Box  3: _ _ W P ? n _ _	[  WP?n  ]
    Box  4: _ « F ? n _ _ _	[ «F?n   ]
    Box  5: A F ! q P K … o	[AF!qPK…o]
    Box  6: _ _ _ t P ? n _	[   tP?n ]
    Box  7: _ _ 0 Q ? n _ _	[  0Q?n  ]
    Box  8: _ G T ? n _ _ _	[ GT?n   ]
    Box  9: – R ! s H K … o	[–R!sHK…o]
    Box 10: _ _ _ » H ? n _	[   »H?n ]
    Box 11: _ _ z R ? n _ _	[  zR?n  ]
    Box 12: _ J R ? n _ _ _	[ JR?n   ]
    Box 13: – R ! s _ _ _ _	[–R!s    ]

    ### CODE 3 ###
    Box  1: C C U n z K … o	[CCUnzK…o]
    Box  2: _ _ _ 0 L ? n _	[   0L?n ]
    Box  3: _ _ Q P ? n _ _	[  QP?n  ]
    Box  4: _ M F ! q _ _ _	[ MF!q   ]
    Box  5: 1 H l o I M ? n	[1HloIM?n]
    Box  6: _ _ _ l P ? n _	[   lP?n ]
    Box  7: _ _ F H ? n _ _	[  FH?n  ]
    Box  8: _ – R ! s _ _ _	[ –R!s   ]
    Box  9: L I … o R M R n	[LI…oRMRn]
    Box 10: _ _ _ Z Q R n _	[   ZQRn ]
    Box 11: _ _ – R ! s _ _	[  –R!s  ]
    Box 12: _ _ _ _ … _ _ _	[    …   ]
    Box 13: _ _ _ … _ _ _ _	[   …    ]

    ### CODE 4 ###
    Box  1: C C U n G H … o	[CCUnGH…o]
    Box  2: _ _ _ t M ? n _	[   tM?n ]
    Box  3: _ _ . R ? n _ _	[  .R?n  ]
    Box  4: _ C U ? n _ _ _	[ CU?n   ]
    Box  5: Y F ! q N I l o	[YF!qNIlo]
    Box  6: _ _ _ Y M ? n _	[   YM?n ]
    Box  7: _ _ l P ? n _ _	[  lP?n  ]
    Box  8: _ … H ? n _ _ _	[ …H?n   ]
    Box  9: – R ! s P K … o	[–R!sPK…o]
    Box 10: _ _ _ 6 P ? n _	[   6P?n ]
    Box 11: _ _ C S ? n _ _	[  CS?n  ]
    Box 12: _ G F ? n _ _ _	[ GF?n   ]
    Box 13: – R ! s _ _ _ _	[–R!s    ]

    ### CODE 5 ###
    Box  1: C C U n , I l o	[CCUn,Ilo]
    Box  2: _ _ _ q M ? n _	[   qM?n ]
    Box  3: _ _ P P ? n _ _	[  PP?n  ]
    Box  4: _ F I ? n _ _ _	[ FI?n   ]
    Box  5: k F ! q X H … o	[kF!qXH…o]
    Box  6: _ _ _ 1 M ? n _	[   1M?n ]
    Box  7: _ _ x R ? n _ _	[  xR?n  ]
    Box  8: _ 0 R ? n _ _ _	[ 0R?n   ]
    Box  9: C U ? n – R ! s	[CU?n–R!s]
    Box 10: _ _ _ 4 J l o _	[   4Jlo ]
    Box 11: _ _ 0 I ? n _ _	[  0I?n  ]
    Box 12: _ k M ? n _ _ _	[ kM?n   ]
    Box 13: e P ? n – R ! s	[eP?n–R!s]

    ### CODE 6 ###
    Box  1: C C U n N I l o	[CCUnNIlo]
    Box  2: _ _ _ b M ? n _	[   bM?n ]
    Box  3: _ _ c R ? n _ _	[  cR?n  ]
    Box  4: _ 2 S ? n _ _ _	[ 2S?n   ]
    Box  5: H F ? n w F ! q	[HF?nwF!q]
    Box  6: _ _ _ l K … o _	[   lK…o ]
    Box  7: _ _ 1 L ? n _ _	[  1L?n  ]
    Box  8: _ E O ? n _ _ _	[ EO?n   ]
    Box  9: G S ? n – R ! s	[GS?n–R!s]
    Box 10: _ _ _ m F l o _	[   mFlo ]
    Box 11: _ _ y L R o _ _	[  yLRo  ]
    Box 12: _ m H R o _ _ _	[ mHRo   ]
    Box 13: _ H ? n – R ! s	[ H?n–R!s]
    ```

=== "GER"

    ```
    ### CODE 1 ###
    Box  1: C C U n 7 T … o	[CCUn7T…o]
    Box  2: _ _ _ 7 F Q q _	[   7FQq ]
    Box  3: _ _ n F … o _ _	[  nF…o  ]
    Box  4: _ 9 F Q q _ _ _	[ 9FQq   ]
    Box  5: t R … o , F ? n	[tR…o,F?n]
    Box  6: _ _ _ C P Q m _	[   CPQm ]
    Box  7: _ _ o F … o _ _	[  oF…o  ]
    Box  8: _ “ F Q q _ _ _	[ “FQq   ]
    Box  9: F F … o ’ F Q q	[FF…o’FQq]
    Box 10: _ _ _ N G … o _	[   NG…o ]
    Box 11: _ _ ♀ F w q _ _	[  ♀Fwq  ]
    Box 12: _ s R … o _ _ _	[ sR…o   ]
    Box 13: d F ? n ‘ F Q m	[dF?n‘FQm]

    ### CODE 2 ###
    Box  1: C C U n W M … o	[CCUnWM…o]
    Box  2: _ _ _ k J ? n _	[   kJ?n ]
    Box  3: _ _ W P ? n _ _	[  WP?n  ]
    Box  4: _ „ F ? n _ _ _	[ „F?n   ]
    Box  5: A F ! q P K … o	[AF!qPK…o]
    Box  6: _ _ _ t P ? n _	[   tP?n ]
    Box  7: _ _ 0 Q ? n _ _	[  0Q?n  ]
    Box  8: _ G T ? n _ _ _	[ GT?n   ]
    Box  9: – R ! s H K … o	[–R!sHK…o]
    Box 10: _ _ _ “ H ? n _	[   “H?n ]
    Box 11: _ _ ü R ? n _ _	[  üR?n  ]
    Box 12: _ B R ? n _ _ _	[ BR?n   ]
    Box 13: – R ! s _ _ _ _	[–R!s    ]

    ### CODE 3 ###
    Box  1: C C U n z K … o	[CCUnzK…o]
    Box  2: _ _ _ 0 L ? n _	[   0L?n ]
    Box  3: _ _ Q P ? n _ _	[  QP?n  ]
    Box  4: _ M F ! q _ _ _	[ MF!q   ]
    Box  5: 1 H l o I M ? n	[1HloIM?n]
    Box  6: _ _ _ l P ? n _	[   lP?n ]
    Box  7: _ _ F H ? n _ _	[  FH?n  ]
    Box  8: _ – R ! s _ _ _	[ –R!s   ]
    Box  9: L I … o R M R n	[LI…oRMRn]
    Box 10: _ _ _ Z Q R n _	[   ZQRn ]
    Box 11: _ _ – R ! s _ _	[  –R!s  ]
    Box 12: _ _ _ _ … _ _ _	[    …   ]
    Box 13: _ _ _ … _ _ _ _	[   …    ]

    ### CODE 4 ###
    Box  1: C C U n G H … o	[CCUnGH…o]
    Box  2: _ _ _ t M ? n _	[   tM?n ]
    Box  3: _ _ . R ? n _ _	[  .R?n  ]
    Box  4: _ C U ? n _ _ _	[ CU?n   ]
    Box  5: Y F ! q N I l o	[YF!qNIlo]
    Box  6: _ _ _ Y M ? n _	[   YM?n ]
    Box  7: _ _ l P ? n _ _	[  lP?n  ]
    Box  8: _ … H ? n _ _ _	[ …H?n   ]
    Box  9: – R ! s P K … o	[–R!sPK…o]
    Box 10: _ _ _ 8 P ? n _	[   8P?n ]
    Box 11: _ _ ü T ? n _ _	[  üT?n  ]
    Box 12: _ 0 F ? n _ _ _	[ 0F?n   ]
    Box 13: – R ! s _ _ _ _	[–R!s    ]

    ### CODE 5 ###
    Box  1: C C U n , I l o	[CCUn,Ilo]
    Box  2: _ _ _ q M ? n _	[   qM?n ]
    Box  3: _ _ P P ? n _ _	[  PP?n  ]
    Box  4: _ F I ? n _ _ _	[ FI?n   ]
    Box  5: k F ! q Ö H … o	[kF!qÖH…o]
    Box  6: _ _ _ 1 M ? n _	[   1M?n ]
    Box  7: _ _ z R ? n _ _	[  zR?n  ]
    Box  8: _ 0 R ? n _ _ _	[ 0R?n   ]
    Box  9: Ö F ? n – R ! s	[ÖF?n–R!s]
    Box 10: _ _ _ 4 J l o _	[   4Jlo ]
    Box 11: _ _ 0 I ? n _ _	[  0I?n  ]
    Box 12: _ k M ? n _ _ _	[ kM?n   ]
    Box 13: e P ? n – R ! s	[eP?n–R!s]

    ### CODE 6 ###
    Box  1: C C U n b M … o	[CCUnbM…o]
    Box  2: _ _ _ z H ? n _	[   zH?n ]
    Box  3: _ _ ü R ? n _ _	[  üR?n  ]
    Box  4: _ 6 T ? n _ _ _	[ 6T?n   ]
    Box  5: w F ! q l K … o	[wF!qlK…o]
    Box  6: _ _ _ 1 L ? n _	[   1L?n ]
    Box  7: _ _ E O ? n _ _	[  EO?n  ]
    Box  8: _ G S ? n _ _ _	[ GS?n   ]
    Box  9: – R ! s m F l o	[–R!smFlo]
    Box 10: _ _ _ y L R o _	[   yLRo ]
    Box 11: _ _ m H R o _ _	[  mHRo  ]
    Box 12: _ _ F ? n _ _ _	[  F?n   ]
    Box 13: – R ! s _ _ _ _	[–R!s    ]

    ```

The bad egg is now ready to be used as the hexwriter.
Its hex data should be identical to the original version of the hexwriter (if you chose to enter the last code as is).
Move this bad egg to Box 14, Slot 29 and execute ACE.
Most likely whatever is written in the box names would be interpreted as a bad egg, however if you want certainty that the hexwriter is working properly, write the following names and execute ACE.

```
Box  1: F0 00 00 00
Box  2: F0 00 00 00
Box  3: BF AE CD DC
Box  4: A5 E6 DF FF
Box  5: 00 00 03 02
Box  6: BF AE CD DC
Box  7: A5 E6 DF 00
Box  8: 53 00 00 00
Box  9: 53 00 00 00
Boxes 10-14: 00 00 00 00
```

A shiny male Farfetch’d named “E-Sh4rk” should appear in Box 14, Slot 28, and its OT should be “E-Sh4rk”.

??? info "Advanced details"

    - The writing destination of the hexwriter can be changed by modifying the value of r12.
      As long as the value of r12 is greater than or equal to 0x02000000, it will write to the value specified in r12.
    - Replacing a byte with `␣␣` in a box name will skip writing a byte to the corresponding location.
      The blank characters must be spaces!
    - Skipping a whole box name of bytes can be done with any character followed by seven spaces
    - Code 6 can be executed with part of the name of Box 12(GER)/13(ENG/FRA/ITA/SPA) changed from `␣ H ? n` to `l H ? n`.
      This changes the exit opcode from `BX r0` to `BX lr`, this is largely kept for older FR/LG advanced ACE setups.
    
    Below is the hexadecimal data of the hexwriter bad egg:
    ```
    8A 80 8F E2 00 0E B8 E8
    02 04 5C E3 66 C0 4F 32
    09 10 D8 E7 B1 10 51 E2
    10 10 91 32 0B B2 81 50
    00 B0 9C 45 01 00 1A E3
    01 B0 CC 14 00 B0 A0 13
    07 00 5A E3 01 A0 8A 32
    00 A0 A0 23 01 90 89 22
    01 90 89 E2 7E 00 59 E3
    40 F0 4F 42 10 FF 2F E1
    ```

Please note that by default, the hexwriter can only write on the first 56 bytes of Box 14, Slot 28, as such it cannot write large payloads by itself.
However this will be solved by the payload you should write described in the next section.

## Crafting table bad egg

This bad egg does the following:

- It changes the destination address of the hexwriter to the first location containing 56 consecutive `00` bytes, starting from the box slot ahead of itself.
- After setting a destination address of the hexwriter, will cause a jump to a location 30 box slots after itself.
    This defines a working area of 30 box slots to store work-in-progress payloads that will not be executed by ACE.

To create this bad egg, write the following box names and execute the hexwriter.

```
Box  1: 46 C0 8F E2
Box  2: 00 80 A0 E3
Box  3: 08 90 9C E7
Box  4: 04 80 88 E2
Box  5: 00 00 00 FF
Box  6: 00 00 59 E3
Box  7: 08 C0 8C 10
Box  8: 20 F0 4F 12
Box  9: 38 00 58 E3
Box 10: 00 00 00 FF
Box 11: 28 F0 4F 32
Box 12: 02 90 1F E5
Box 13: 09 F0 8F E0
Box 14: 74 09 00 00
```

A bad egg should have appeared in Box 14, Slot 28.
This bad egg can be placed anywhere, starting from the ACE entrypoint of your grab ACE Pokémon (in the case of 0x351, starting from Box 13, Slot 10).
Please make sure you placed the crafting table bad egg at least 31 box slots before the exit code bootstrap.
Otherwise the ACE will jump over the bootstrap and the hexwriter will not safely exit.

At this point, you have an easier way of writing arbitary data via the combination of both the hexwriter and the crafting table bad egg.
However the crafting table modifies the CPSR status flags upon being executed.
The standard box name codes rely on these status flags being unset (0), due to using instructions such as `ADC`/`SBC` as well as having certain filler instructions that may cause the game to behave unexpectedly if certain status flags are set.
As such you will be creating a small payload that will unset all of the CPSR status flags, allowing regular box name codes to be executed without moving the crafting table, and hexwriter to a location before the ACE entrypoint.
This also serves as a test to check if the crafting table is working correctly.

Write the following box names, and execute the hexwriter:

```
Box  1: 00 B0 A0 E3
Box  2: 01 B0 9B E2
Box  3: 40 F0 8F E2
Box  4: 00 00 00 00
Box  5: 00 00 00 02
Box  6: 00 00 00 00
Box  7: 00 00 00 00
Box  8: D0 0E 00 00
Boxes 9-14: 00 00 00 00
```

A Bulbasaur holding a TM should appear in the box slot after the crafting table bad egg, place it at least 31 slots after the crafting table.

If that does not happen, that means you have made a mistake in the creation of the crafting table.
To correct this, move the crafting table back to Box 14, Slot 28, rewrite the crafting table creation code and try creating the Bulbasaur again.

At this point in time, the recommended box setup is as follows:

```
BOX 13:

-  -  -  -  -  -
-  -  -  -  C  +
+  +  +  +  +  +
+  +  +  +  +  +
+  +  +  +  +  +

BOX 14:

+  +  +  +  +  +
+  +  +  +  +  E
-  -  -  -  -  B
-  -  -  -  -  -
-  -  -  -  W  -

-: Empty slot
+: Crafting table area (will be skipped)
C: Crafting table bad egg
B: CPSR status reset (Bulbasaur)
E: Exit code bootstrap
W: Hexwriter
```

This particular box setup will prepare you for step 6 and later in [Theocatic’s scripting environment](https://gist.github.com/Theocatic/39ed337ecd590b47fad14f791cf16bb5) where payloads for that ASE setup expect this particular box layout.

If you want to execute standard box name codes with grab ACE again, move the hexwriter bad egg to somewhere within the crafting table area then execute the box name code as normal.

## Troubleshooting

!!! note
    The troubleshooting code uses the Box 14 exit code.
    If it has been renamed, please [restore the exit code](../exit-codes/box-14-exit.md) before proceeding further in this section.

Refer to this section the hexwriter is not writing data or causes a crash upon execution.
Place the wrong hexwriter back in Box 10, Slot 19, then write the following box names.

=== "ENG/ITA/SPA"

    ```
    Box  1: x “ U n … F g m	[x“Un…Fgm]
    Box  2: _ _ _ , G ? n _	[   ,G?n ]
    Box  3: _ _ 3 G R n _ _	[  3GRn  ]
    Box  4: _ … F Q m _ _ _	[ …FQm   ]
    Box  5: 4 C U n F “ Q n	[4CUnF“Qn]
    Box  6: _ _ _ A _ B m _	[   A Bm ]
    Box  7: _ _ ” … h m _ _	[  ”…hm  ]
    Box  8: _ _ … ! l _ _ _	[  …!l   ]
    Box  9: X R U n / D R m	[XRUn/DRm]
    Box 10: _ _ _ _ _ _ … _	[      … ]
    Box 11: _ _ _ _ _ … _ _	[     …  ]
    Box 12: _ _ _ _ … _ _ _	[    …   ]
    Box 13: _ _ _ … _ _ _ _	[   …    ]
    ```

=== "FRA"

    ```
    Box  1: x « U n … F g m	[x«Un…Fgm]
    Box  2: _ _ _ , G ? n _	[   ,G?n ]
    Box  3: _ _ 3 G R n _ _	[  3GRn  ]
    Box  4: _ … F Q m _ _ _	[ …FQm   ]
    Box  5: 4 C U n F « Q n	[4CUnF«Qn]
    Box  6: _ _ _ A _ B m _	[   A Bm ]
    Box  7: _ _ » … h m _ _	[  »…hm  ]
    Box  8: _ _ … ! l _ _ _	[  …!l   ]
    Box  9: X R U n / D R m	[XRUn/DRm]
    Box 10: _ _ _ _ _ _ … _	[      … ]
    Box 11: _ _ _ _ _ … _ _	[     …  ]
    Box 12: _ _ _ _ … _ _ _	[    …   ]
    Box 13: _ _ _ … _ _ _ _	[   …    ]
    ```

=== "GER"

    ```
    Box  1: x „ U n … F g m	[x„Un…Fgm]
    Box  2: _ _ _ , G ? n _	[   ,G?n ]
    Box  3: _ _ 3 G R n _ _	[  3GRn  ]
    Box  4: _ … F Q m _ _ _	[ …FQm   ]
    Box  5: 4 C U n F „ Q n	[4CUnF„Qn]
    Box  6: _ _ _ A _ B m _	[   A Bm ]
    Box  7: _ _ “ … h m _ _	[  “…hm  ]
    Box  8: _ _ … ! l _ _ _	[  …!l   ]
    Box  9: X R U n / D R m	[XRUn/DRm]
    Box 10: _ _ _ _ _ _ … _	[      … ]
    Box 11: _ _ _ _ _ … _ _	[     …  ]
    Box 12: _ _ _ _ … _ _ _	[    …   ]
    Box 13: _ _ _ … _ _ _ _	[   …    ]
    ```

Before executing this code please make sure that:

- Box 14, Slot 30 is empty
- You have saved the game beforehand, you will need a restoration point as this code will modify the TID

Once you have that sorted, do the following steps:

1. Execute the code
2. View the trainer card afterwards
3. The TID should change, check its value against the below table and note down whether they match
4. Repeat this process 19 more times

| No. | TID   |
| --: | :---- |
|   1 | 25369 |
|   2 | 63160 |
|   3 | 59230 |
|   4 | 62133 |
|   5 | 63457 |
|   6 | 62210 |
|   7 | 17057 |
|   8 | 00652 |
|   9 | 62876 |
|  10 | 58139 |
|  11 | 50381 |
|  12 | 50080 |
|  13 | 58209 |
|  14 | 53899 |
|  15 | 50080 |
|  16 | 45706 |
|  17 | 29322 |
|  18 | 58327 |
|  19 | 12943 |
|  20 | 57407 |

For `BX lr` exit, TID 20 should be 57241.

Once you are done with checking the TIDs, restart the game back to the previous save, you do not need the modified TID anymore.
For any TID number that does not match the above table, refer to the below table for the code to reexecute.
Keep in mind the following:

- If multiple erroneous TID numbers are covered by the same code number, that code number only needs to be reexecuted once.
- Please note that the hexwriter bad egg **must** be in Box 10, Slot 2 when reexecuting these codes.

| Code No. | TID No.       |
| -------: | :------------ |
|        1 | 1, 2, 3, 4, 5 |
|        2 | 6, 7, 8       |
|        3 | 9, 10, 11     |
|        4 | 12, 13, 14    |
|        5 | 15, 16, 17    |
|        6 | 18, 19, 20    |

## Changing the exit of the hexwriter

These are some short codes that change the exit instruction of the hexwriter.
Place the hexwriter back in Box 10, Slot 2 and execute one of these codes to change the exit.
By default they change the exit to `BX r0` but follow the annotation on Box 5 to change the exit to `BX lr`.

=== "ENG/ITA/SPA"

    ```
    Box  1: l … l o z ♀ Q o	[l…loz♀Qo]
    Box  2: ♀ Q n F F U n _	[♀QnFFUn ]
    Box  3: _ _ g … ? q _ _	[  g…?q  ]
    Box  4: _ C S U n _ _ _	[ CSUn   ]
    Box  5: l ” Q o c … ? q	[l”Qoc…?q] (change 'l' to ' ' for BX lr)
    Box  6: _ F o _ _ _ _ _	[ Fo     ]
    ```

=== "FRA"

    ```
    Box  1: l … l o z ♀ Q o	[l…loz♀Qo]
    Box  2: ♀ Q n F F U n _	[♀QnFFUn ]
    Box  3: _ _ g … ? q _ _	[  g…?q  ]
    Box  4: _ C S U n _ _ _	[ CSUn   ]
    Box  5: l » Q o c … ? q	[l»Qoc…?q] (change 'l' to ' ' for BX lr)
    Box  6: _ F o _ _ _ _ _	[ Fo     ]
    ```

=== "GER"

    ```
    Box  1: l … l o z ♀ Q o	[l…loz♀Qo]
    Box  2: ♀ Q n F F U n _	[♀QnFFUn ]
    Box  3: _ _ g … ? q _ _	[  g…?q  ]
    Box  4: _ C S U n _ _ _	[ CSUn   ]
    Box  5: l “ Q o c … ? q	[l“Qoc…?q] (change 'l' to ' ' for BX lr)
    Box  6: _ F o _ _ _ _ _	[ Fo     ]
    ```

## References and Acknowledgements

- [E-Sh4rk's original article for the hexwriter, crafting egg, and CPSR status reset](https://e-sh4rk.github.io/ACE3/emerald/hex-writer/hex-writer/)
- [Adrichu00's method of writing the hexwriter](https://gist.github.com/Adrichu00/49433953af9d6fd7c1cd368d48c68778)
- RationalPsycho on the Glitch City Research Institute Discord for the glitched mail inputs
- merrp of the Glitch City Research Institute Discord for the `STR+4` opcode used in the codes.
