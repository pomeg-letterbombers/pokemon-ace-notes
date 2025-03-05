# FR/LG Hexwriter
!!! info

    This guide is only for US/European versions of Pokémon FireRed/Leafgreen.
    A Japanese version will be made, but it will take some time.

## Preamble
Recently there has been efforts to simplify the writing of the hexadecimal writer (hexwriter) with the 'advent' of mail corruption.
This is one of those efforts.

## Prequisites
- Game Boy Advance console or a highly-accurate emulator (like mGBA 0.9.0+)
   - These codes do not work if the `PC` register is aligned, e.g. executing ACE through an inaccurate emulator
   - If you are not using 0x351, check that the glitch Pokémon that you are using has bit 1 of its entrypoint set.
     If it is not set, that means it executes with an aligned `PC` register and you must use a different Pokémon
- Knowledge on how to perform mail corruption and grab ACE
- The box 14 exit code, the name of box 14 should be ` Foì`
    - This specific set-up does not require any bootstrap if you are writing box name codes only
    - Instructions on how to write this can be found [here](../exit-codes/box-14-exit.md)
- The exit code bootstrap.
    - This is technically not necessary for the box name codes and can be created after the creation of the hexwriter
    - This will allow the hexwriter to exit properly via `r0`
    - Instructions on how to create this can be found [here](../exit-codes/exit-code-bootstrap.md)
- Snorlax and Omanyte has been seen on the save file


## Instructions
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
    - Code 6 can be executed with part of the name of Box 12(GER)/13(ENG/FRA/ITA/SPA) changed from `␣ F ? n` to `l F ? n`.
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
!!! warning
    These codes require a genuine GBA BIOS, if you do not have one, you will have to rewrite the Box 14 exit then reexecute code 6 with the desired exit.

These are some short codes that change the exit opcode of the hexwriter.
Place the hexwriter back in Box 10, Slot 2 and execute one of these codes depending on the desired exit.

**BX r0**
```
Box  1: B C U n 0 T … o	[BCUn0T…o]
Box  2: _ F o ‘ F Q q a	[ Fo‘FQqa]
Box  3: … o	[…o]
```

**BX lr**
```
Box  1: B C U n m F l o	[BCUnmFlo]
Box  2: _ F o ‘ F Q q a	[ Fo‘FQqa]
Box  3: … o	[…o]
```

## How these codes work
```
SBC r11, pc, #0x2F40
```
This subtracts `0x2F40` from the `pc` register, and due to the instruction being `SBC` and the carry flag is unset, it also subtracts an extra `0x1` from the result.
Since it is expected that the code will be executed using `0x351` where it executes in ARM mode with the `pc` register's bit 1 set to `1`, the result assigned to `r11` will be `0xA7` (167) bytes before the PID of Box 10, Slot 2.
I have chosen an offset of `0xA7` as that it and (most) later offsets are writable using the European character set which allows storing using `STR r12, [r11, {offset}]!` and for the most part remove the need to waste an opcode incrementing `r11`.
It also allowed `STRB` to be usable for writing part of the hexwriter as that is encoded similarly to `STR`.

```
STR r12, [r11, r14, LSR #25]! ; encoded as `E7ABCCAE`
```
merrp is to be credited for using this trick to be able to increment `r11` using `STR` with what would be unwritable offsets thanks to the limitations of the European character set.
Since `r14` is always initially a ROM address where the most significant byte of the address is usually `0x8`, if the value is shifted right by 25 bits, it will become `0x4`.
This allows writing to the address stored in `r11` + `0x4` which is highly useful for the purposes of writing the hexwriter, as we do not need to waste more opcodes on writing half of each instruction then using `STRH` which takes up more space.
However for FireRed and LeafGreen, since we have access to mail corruption, and it so happens that some of the halfwords are writable as mail words, we can still use `STRH` for those instructions where half of it is already written by mail corruption.

From this, the codes are generally structured as the following:
```
SBC r11, pc, #0x2F40
MOVS r12, #{opcode_1} ?
STR r12, [r11, #{offset}]!
MOVS r12, #{opcode_2} ?
STR r12, [r11, r14, LSR #25]!
MOVS r12, #{opcode_3} ?
STR r12, [r11, r14, LSR #25]!
```
with some codes using different instructions due to either having a halfword already written with the mail corruption enabling us to use `STRH` and using `MOVS` with only half of the instruction as the immediate or having an unwritable offset.

### Mail corruption

!!! note
    Only the English words are shown, mostly to keep the documentation simple

The mail corruption allows directly writing halfwords that would have made the main code writing process longer.
When choosing mail words to write, words that were available by default were chosen over unlockable words whenever possible.
If the only word options are unlockable words then words that are likely to be unlocked in a regular playthrough of FR/LG are given priority over other unlockable words.
Below is a table of words and their respective indexes written in the glitchy mail (an * means that byte was overwritten by a box name code):

| Word         | Index (hex) |
| ------------ | ----------- |
| OMANYTE      | 2A8A        |
| SNORLAX      | 2A8F        |
| LISTEN       | 0E00        |
| THICK FAT    | 0402        |
| MINUS        | 045C        |
| PICKUP       | 0466        |
| MARVEL SCALE | 044F        |
| LIKELY TO    | 1009        |

??? question "What about mail word 4?"

    While there are candidates for mail word 4, the problem is that they are only unlockable after the postgame which complicates writing this hexwriter for players who have went for New Game+.
    For those who are curious, here are the candidates for mail slot 4.

    | Word                   | Index (hex) |
    | ---------------------- | ----------- |
    | SCARY FACE / AZUMARILL | \*\*B8      |

    and here is box code 1 for those who have those words:
    ```
    Box  1: C C U n 7 T … o	[CCUn7T…o]
    Box  2: _ _ _ 7 F Q q _	[   7FQq ]
    Box  3: _ _ n F … o _ _	[  nF…o  ]
    Box  4: _ 9 F Q q _ _ _	[ 9FQq   ]
    Box  5: t F … o – F Q q	[tF…o–FQq]
    Box  6: _ _ _ o F … o _	[   oF…o ]
    Box  7: _ _ ” F Q q _ _	[  ”FQq  ]
    Box  8: _ F F … o _ _ _	[ FF…o   ]
    Box  9: ’ F Q q N G … o	[’FQqNG…o]
    Box 10: _ _ _ ♀ F w q _	[   ♀Fwq ]
    Box 11: _ _ s R … o _ _	[  sR…o  ]
    Box 12: _ d F ? n _ _ _	[ dF?n   ]
    Box 13: ‘ F Q m _ _ _ _	[‘FQm    ]
    ```

While some of these mail words do not exactly correspond to a halfword within the hexwriter, the least significant byte of the word index does.
Code 1 overwrites the wrong upper halves of the mail halfwords, correcting the wrong data written initially.

### Box name codes
Below are the inputs to E-Sh4rk's CodeGenerator for each box name code along with the exact bytes that each code writes, and their starting offsets
If you see * in the writes section, that means part of it was already written by mail corruption or variable according to the note attached

#### Code 1
Starting offset: 0x0 + 0xA7 = 0xA7
```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40 ; Box 10, Slot 4 - 0xC8
MOVS r12, #0xA80 ; STRB ignores the upper 24 bits
STRB r12, [r11, #0xA8]
MOVS r12, #0xE2
STRB r12, [r11, #0xAA]
MOVS r12, #0xE800 ;
ADC r12, r12, #0xB8 ; MOVS r12, #0xE8 if using mail word 4
STRH r12, [r11, #0xAD] ; STRB r12, [r11, #0xAE] if using mail word 4
MOVS r12, #0xE3
STRB r12, [r11, #0xB2]
MOVS r12, #0xC0
STRB r12, [r11, #0xB4]
MOVS r12, #0x32
STRB r12, [r11, #0xB6]!
MOVS r12, #0xE7D8 ?
STRH r12, [r11, #0x3]
```

Writes:
```
**80**E2
****B8E8
******E3
**C0**32
****D8E7
```

#### Code 2
Starting offset: 0x14 + 0xA7 = 0xBB
```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40
MOVS r12, #0xE25110B1 ?
STR r12, [r11, #0xBB]!
MOVS r12, #0x32911010 ?
0xE7ABCCAE
MOVS r12, #0x5081B20B ?
0xE7ABCCAE
```

Writes:
```
B11051E2
10109132
0BB28150
```

#### Code 3
Starting offset: 0x20 + 0xA7 = 0xC7
```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40
MOVS r12, #0x459CB000 ?
STR r12, [r11, #0xC7]!
MOVS r12, #0xE31A0001 ?
0xE7ABCCAE
MOVS r12, #0x14CCB001 ?
0xE7ABCCAE
```

Writes:
```
00B09C45
01001AE3
01B0CC14
```

#### Code 4
Starting offset: 0x2C + 0xA7 = 0xD3
```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40
MOVS r12, #0x13A0B000 ?
STR r12, [r11, #0xD3]!
MOVS r12, #0xE35A0007 ?
0xE7ABCCAE
MOVS r12, #0x328AA001 ?
0xE7ABCCAE
```

Writes:
```
00B0A013
07005AE3
01A08A32
```

#### Code 5
Starting offset: 0x38 + 0xA7 = 0xDF
```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40
MOVS r12, #0x23A0A000 ?
STR r12, [r11, #0xDF]!
MOVS r12, #0x22899001 ?
0xE7ABCCAE
MOVS r12, #0xE2899001 ?
0xE7ABCCAE
```

Writes:
```
00A0A023
01908922
019089E2
```

#### Code 6
Starting offset: 0x44 + 0xA7 = 0xEB
```
@@ exit = "Bootstrapped"
@@
SBC r11, pc, #0x2F40
MOVS r12, #0xE359007E ?
STR r12, [r11, #0xEB]!
MOVS r12, #0x424FF040 ?
0xE7ABCCAE
; MOVS r12, #0xE12FFF10 ?
MVN r12, #0xE1
BIC r12, r12, #0xED00000
BIC r12, r12, #0x1000000E ; r12 = E12FFF10 BX r0
ADC r12, r12, #0x0 ; #0xE for BX lr exit
0xE7ABCCAE
```

Writes:
```
7E0059E3
40F04F42
1*FF2FE1 # 0 if using `BX r0` exit E if using `BX lr` exit
```

## References and Acknowledgements
- [E-Sh4rk's original article for the hexwriter, crafting egg, and CPSR status reset](https://e-sh4rk.github.io/ACE3/emerald/hex-writer/hex-writer/)
- [Adrichu00's method of writing the hexwriter](https://gist.github.com/Adrichu00/49433953af9d6fd7c1cd368d48c68778)
- RationalPsycho on the Glitch City Research Institute Discord for the glitched mail inputs
- merrp on the Glitch City Research Institute Discord for the `STR+4` opcode used in the codes.