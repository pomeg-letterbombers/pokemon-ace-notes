---
title: "Hexwriter"
---
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
    - Instructions on how to set this up can be found [here](frlg-box-14-exit.md)
- The exit code bootstrap.
    - This is technically not necessary for the box name codes and can be created after the creation of the hexwriter
    - This will allow the hexwriter to exit properly via `r0`
    - Instructions on how to create this can be found [here](frlg-exit-code-bootstrap.md)
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
    Box  1: C C U H 7 T … o	[CCUH7T…o]
    Box  2: A A A 7 F Q q  	[AAA7FQq]
    Box  3: A A n F … o    	[AAnF…o]
    Box  4: A 9 F Q q      	[A9FQq]
    Box  5: t R … o , F ? n	[tR…o,F?n]
    Box  6: A A A C P Q m  	[AAACPQm]
    Box  7: A A o F … o    	[AAoF…o]
    Box  8: A ” F Q q      	[A”FQq]
    Box  9: F F … o ’ F Q q	[FF…o’FQq]
    Box 10: A A A N G … o  	[AAANG…o]
    Box 11: A A ♀ F w q    	[AA♀Fwq]
    Box 12: A s R … o      	[AsR…o]
    Box 13: d F ? n ‘ F Q m	[dF?n‘FQm]

    ### CODE 2 ###
    Box  1: C C U H W M … o	[CCUHWM…o]
    Box  2: A A A k J ? n  	[AAAkJ?n]
    Box  3: A A W P ? n    	[AAWP?n]
    Box  4: A “ F ? n      	[A“F?n]
    Box  5: A F ! q P K … o	[AF!qPK…o]
    Box  6: A A A t P ? n  	[AAAtP?n]
    Box  7: A A 0 Q ? n    	[AA0Q?n]
    Box  8: A G T ? n      	[AGT?n]
    Box  9: T R ! s H K … o	[TR!sHK…o]
    Box 10: A A A ” H ? n  	[AAA”H?n]
    Box 11: A A z R ? n    	[AAzR?n]
    Box 12: A J R ? n      	[AJR?n]
    Box 13: T R ! s        	[TR!s]

    ### CODE 3 ###
    Box  1: C C U H z K … o	[CCUHzK…o]
    Box  2: A A A 0 L ? n  	[AAA0L?n]
    Box  3: A A Q P ? n    	[AAQP?n]
    Box  4: A M F ! q      	[AMF!q]
    Box  5: 1 H l o I M ? n	[1HloIM?n]
    Box  6: A A A l P ? n  	[AAAlP?n]
    Box  7: A A F H ? n    	[AAFH?n]
    Box  8: A T R ! s      	[ATR!s]
    Box  9: L I … o R M R n	[LI…oRMRn]
    Box 10: A A A Z Q R n  	[AAAZQRn]
    Box 11: A A T R ! s    	[AATR!s]
    Box 12: A              	[A]
    Box 13: A              	[A]

    ### CODE 4 ###
    Box  1: C C U H G H … o	[CCUHGH…o]
    Box  2: A A A t M ? n  	[AAAtM?n]
    Box  3: A A . R ? n    	[AA.R?n]
    Box  4: A C U ? n      	[ACU?n]
    Box  5: Y F ! q N I l o	[YF!qNIlo]
    Box  6: A A A Y M ? n  	[AAAYM?n]
    Box  7: A A l P ? n    	[AAlP?n]
    Box  8: A … H ? n      	[A…H?n]
    Box  9: T R ! s P K … o	[TR!sPK…o]
    Box 10: A A A 6 P ? n  	[AAA6P?n]
    Box 11: A A C S ? n    	[AACS?n]
    Box 12: A G F ? n      	[AGF?n]
    Box 13: T R ! s        	[TR!s]

    ### CODE 5 ###
    Box  1: C C U H , I l o	[CCUH,Ilo]
    Box  2: A A A q M ? n  	[AAAqM?n]
    Box  3: A A P P ? n    	[AAPP?n]
    Box  4: A F I ? n      	[AFI?n]
    Box  5: k F ! q X H … o	[kF!qXH…o]
    Box  6: A A A 1 M ? n  	[AAA1M?n]
    Box  7: A A x R ? n    	[AAxR?n]
    Box  8: A 0 R ? n      	[A0R?n]
    Box  9: C U ? n T R ! s	[CU?nTR!s]
    Box 10: A A A 4 J l o  	[AAA4Jlo]
    Box 11: A A 0 I ? n    	[AA0I?n]
    Box 12: A k M ? n      	[AkM?n]
    Box 13: e P ? n T R ! s	[eP?nTR!s]

    ### CODE 6 ###
    Box  1: C C U H N I l o	[CCUHNIlo]
    Box  2: A A A b M ? n  	[AAAbM?n]
    Box  3: A A c R ? n    	[AAcR?n]
    Box  4: A 2 S ? n      	[A2S?n]
    Box  5: H F ? n w F ! q	[HF?nwF!q]
    Box  6: A A A l K … o  	[AAAlK…o]
    Box  7: A A 1 L ? n    	[AA1L?n]
    Box  8: A E O ? n      	[AEO?n]
    Box  9: G S ? n T R ! s	[GS?nTR!s]
    Box 10: A A A m F l o  	[AAAmFlo]
    Box 11: A A y L R o    	[AAyLRo]
    Box 12: A m H R o      	[AmHRo]
    Box 13: _ H ? n T R ! s	[ H?nTR!s]
    ```

=== "FRA"

    ```
    ### CODE 1 ###
    Box  1: C C U H 7 T … o	[CCUH7T…o]
    Box  2: A A A 7 F Q q  	[AAA7FQq]
    Box  3: A A n F … o    	[AAnF…o]
    Box  4: A 9 F Q q      	[A9FQq]
    Box  5: t R … o , F ? n	[tR…o,F?n]
    Box  6: A A A C P Q m  	[AAACPQm]
    Box  7: A A o F … o    	[AAoF…o]
    Box  8: A » F Q q      	[A»FQq]
    Box  9: F F … o ’ F Q q	[FF…o’FQq]
    Box 10: A A A N G … o  	[AAANG…o]
    Box 11: A A ♀ F w q    	[AA♀Fwq]
    Box 12: A s R … o      	[AsR…o]
    Box 13: d F ? n ‘ F Q m	[dF?n‘FQm]

    ### CODE 2 ###
    Box  1: C C U H W M … o	[CCUHWM…o]
    Box  2: A A A k J ? n  	[AAAkJ?n]
    Box  3: A A W P ? n    	[AAWP?n]
    Box  4: A « F ? n      	[A«F?n]
    Box  5: A F ! q P K … o	[AF!qPK…o]
    Box  6: A A A t P ? n  	[AAAtP?n]
    Box  7: A A 0 Q ? n    	[AA0Q?n]
    Box  8: A G T ? n      	[AGT?n]
    Box  9: T R ! s H K … o	[TR!sHK…o]
    Box 10: A A A » H ? n  	[AAA»H?n]
    Box 11: A A z R ? n    	[AAzR?n]
    Box 12: A J R ? n      	[AJR?n]
    Box 13: T R ! s        	[TR!s]

    ### CODE 3 ###
    Box  1: C C U H z K … o	[CCUHzK…o]
    Box  2: A A A 0 L ? n  	[AAA0L?n]
    Box  3: A A Q P ? n    	[AAQP?n]
    Box  4: A M F ! q      	[AMF!q]
    Box  5: 1 H l o I M ? n	[1HloIM?n]
    Box  6: A A A l P ? n  	[AAAlP?n]
    Box  7: A A F H ? n    	[AAFH?n]
    Box  8: A T R ! s      	[ATR!s]
    Box  9: L I … o R M R n	[LI…oRMRn]
    Box 10: A A A Z Q R n  	[AAAZQRn]
    Box 11: A A T R ! s    	[AATR!s]
    Box 12: A              	[A]
    Box 13: A              	[A]

    ### CODE 4 ###
    Box  1: C C U H G H … o	[CCUHGH…o]
    Box  2: A A A t M ? n  	[AAAtM?n]
    Box  3: A A . R ? n    	[AA.R?n]
    Box  4: A C U ? n      	[ACU?n]
    Box  5: Y F ! q N I l o	[YF!qNIlo]
    Box  6: A A A Y M ? n  	[AAAYM?n]
    Box  7: A A l P ? n    	[AAlP?n]
    Box  8: A … H ? n      	[A…H?n]
    Box  9: T R ! s P K … o	[TR!sPK…o]
    Box 10: A A A 6 P ? n  	[AAA6P?n]
    Box 11: A A C S ? n    	[AACS?n]
    Box 12: A G F ? n      	[AGF?n]
    Box 13: T R ! s        	[TR!s]

    ### CODE 5 ###
    Box  1: C C U H , I l o	[CCUH,Ilo]
    Box  2: A A A q M ? n  	[AAAqM?n]
    Box  3: A A P P ? n    	[AAPP?n]
    Box  4: A F I ? n      	[AFI?n]
    Box  5: k F ! q X H … o	[kF!qXH…o]
    Box  6: A A A 1 M ? n  	[AAA1M?n]
    Box  7: A A x R ? n    	[AAxR?n]
    Box  8: A 0 R ? n      	[A0R?n]
    Box  9: C U ? n T R ! s	[CU?nTR!s]
    Box 10: A A A 4 J l o  	[AAA4Jlo]
    Box 11: A A 0 I ? n    	[AA0I?n]
    Box 12: A k M ? n      	[AkM?n]
    Box 13: e P ? n T R ! s	[eP?nTR!s]

    ### CODE 6 ###
    Box  1: C C U H N I l o	[CCUHNIlo]
    Box  2: A A A b M ? n  	[AAAbM?n]
    Box  3: A A c R ? n    	[AAcR?n]
    Box  4: A 2 S ? n      	[A2S?n]
    Box  5: H F ? n w F ! q	[HF?nwF!q]
    Box  6: A A A l K … o  	[AAAlK…o]
    Box  7: A A 1 L ? n    	[AA1L?n]
    Box  8: A E O ? n      	[AEO?n]
    Box  9: G S ? n T R ! s	[GS?nTR!s]
    Box 10: A A A m F l o  	[AAAmFlo]
    Box 11: A A y L R o    	[AAyLRo]
    Box 12: A m H R o      	[AmHRo]
    Box 13: _ H ? n T R ! s	[ H?nTR!s]
    ```

=== "GER"

    ```
    ### CODE 1 ###
    Box  1: C C U H 7 T … o	[CCUH7T…o]
    Box  2: A A A 7 F Q q  	[AAA7FQq]
    Box  3: A A n F … o    	[AAnF…o]
    Box  4: A 9 F Q q      	[A9FQq]
    Box  5: t R … o , F ? n	[tR…o,F?n]
    Box  6: A A A C P Q m  	[AAACPQm]
    Box  7: A A o F … o    	[AAoF…o]
    Box  8: A “ F Q q      	[A“FQq]
    Box  9: F F … o ’ F Q q	[FF…o’FQq]
    Box 10: A A A N G … o  	[AAANG…o]
    Box 11: A A ♀ F w q    	[AA♀Fwq]
    Box 12: A s R … o      	[AsR…o]
    Box 13: d F ? n ‘ F Q m	[dF?n‘FQm]

    ### CODE 2 ###
    Box  1: C C U H W M … o	[CCUHWM…o]
    Box  2: A A A k J ? n  	[AAAkJ?n]
    Box  3: A A W P ? n    	[AAWP?n]
    Box  4: A „ F ? n      	[A„F?n]
    Box  5: A F ! q P K … o	[AF!qPK…o]
    Box  6: A A A t P ? n  	[AAAtP?n]
    Box  7: A A 0 Q ? n    	[AA0Q?n]
    Box  8: A G T ? n      	[AGT?n]
    Box  9: T R ! s H K … o	[TR!sHK…o]
    Box 10: A A A “ H ? n  	[AAA“H?n]
    Box 11: A A ü R ? n    	[AAüR?n]
    Box 12: A B R ? n      	[ABR?n]
    Box 13: T R ! s        	[TR!s]

    ### CODE 3 ###
    Box  1: C C U H z K … o	[CCUHzK…o]
    Box  2: A A A 0 L ? n  	[AAA0L?n]
    Box  3: A A Q P ? n    	[AAQP?n]
    Box  4: A M F ! q      	[AMF!q]
    Box  5: 1 H l o I M ? n	[1HloIM?n]
    Box  6: A A A l P ? n  	[AAAlP?n]
    Box  7: A A F H ? n    	[AAFH?n]
    Box  8: A T R ! s      	[ATR!s]
    Box  9: L I … o R M R n	[LI…oRMRn]
    Box 10: A A A Z Q R n  	[AAAZQRn]
    Box 11: A A T R ! s    	[AATR!s]
    Box 12: A              	[A]
    Box 13: A              	[A]

    ### CODE 4 ###
    Box  1: C C U H G H … o	[CCUHGH…o]
    Box  2: A A A t M ? n  	[AAAtM?n]
    Box  3: A A . R ? n    	[AA.R?n]
    Box  4: A C U ? n      	[ACU?n]
    Box  5: Y F ! q N I l o	[YF!qNIlo]
    Box  6: A A A Y M ? n  	[AAAYM?n]
    Box  7: A A l P ? n    	[AAlP?n]
    Box  8: A … H ? n      	[A…H?n]
    Box  9: T R ! s P K … o	[TR!sPK…o]
    Box 10: A A A 8 P ? n  	[AAA8P?n]
    Box 11: A A ü T ? n    	[AAüT?n]
    Box 12: A 0 F ? n      	[A0F?n]
    Box 13: T R ! s        	[TR!s]

    ### CODE 5 ###
    Box  1: C C U H , I l o	[CCUH,Ilo]
    Box  2: A A A q M ? n  	[AAAqM?n]
    Box  3: A A P P ? n    	[AAPP?n]
    Box  4: A F I ? n      	[AFI?n]
    Box  5: k F ! q Ö H … o	[kF!qÖH…o]
    Box  6: A A A 1 M ? n  	[AAA1M?n]
    Box  7: A A z R ? n    	[AAzR?n]
    Box  8: A 0 R ? n      	[A0R?n]
    Box  9: Ö F ? n T R ! s	[ÖF?nTR!s]
    Box 10: A A A 4 J l o  	[AAA4Jlo]
    Box 11: A A 0 I ? n    	[AA0I?n]
    Box 12: A k M ? n      	[AkM?n]
    Box 13: e P ? n T R ! s	[eP?nTR!s]

    ### CODE 6 ###
    Box  1: C C U H b M … o	[CCUHbM…o]
    Box  2: A A A z H ? n  	[AAAzH?n]
    Box  3: A A ü R ? n    	[AAüR?n]
    Box  4: A 6 T ? n      	[A6T?n]
    Box  5: w F ! q l K … o	[wF!qlK…o]
    Box  6: A A A 1 L ? n  	[AAA1L?n]
    Box  7: A A E O ? n    	[AAEO?n]
    Box  8: A G S ? n      	[AGS?n]
    Box  9: T R ! s m F l o	[TR!smFlo]
    Box 10: A A A y L R o  	[AAAyLRo]
    Box 11: A A m H R o    	[AAmHRo]
    Box 12: A _ F ? n      	[A F?n]
    Box 13: T R ! s        	[TR!s]

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
Box  5: FF FF FF FF
Box  6: 00 00 59 E3
Box  7: 08 C0 8C 10
Box  8: 20 F0 4F 12
Box  9: 38 00 58 E3
Box 10: FF FF FF FF
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

If that does not happen, that means you have made a mistake in the creation of the crafting table. Move the erroneous crafting table bad egg out of the ACE area (Box 13, Slot 7 and after is considered the ACE area), and redo creating the crafting table. You can delete the erroneous crafting table bad egg after this.

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
    If it has been renamed, please [restore the exit code](frlg-box-14-exit.md) before proceeding further in this section.

Refer to this section the hexwriter is not writing data or causes a crash upon execution.
Place the wrong hexwriter back in Box 10, Slot 19, then write the following box names.

=== "ENG/ITA/SPA"

    ```
    Box  1: x “ U n … F g m	[x“Un…Fgm]
    Box  2: A A A , G ? n  	[AAA,G?n]
    Box  3: A A 3 G R n    	[AA3GRn]
    Box  4: A … F Q m      	[A…FQm]
    Box  5: 4 C U n F “ Q n	[4CUnF“Qn]
    Box  6: A A A A _ B m  	[AAAA Bm]
    Box  7: A A ” … h m    	[AA”…hm]
    Box  8: A _ … ! l      	[A …!l]
    Box  9: X R U n / D R m	[XRUn/DRm]
    Box 10: A              	[A]
    Box 11: A              	[A]
    Box 12: A              	[A]
    Box 13: A              	[A]
    ```

=== "FRA"

    ```
    Box  1: x « U n … F g m	[x«Un…Fgm]
    Box  2: A A A , G ? n  	[AAA,G?n]
    Box  3: A A 3 G R n    	[AA3GRn]
    Box  4: A … F Q m      	[A…FQm]
    Box  5: 4 C U n F « Q n	[4CUnF«Qn]
    Box  6: A A A A _ B m  	[AAAA Bm]
    Box  7: A A » … h m    	[AA»…hm]
    Box  8: A _ … ! l      	[A …!l]
    Box  9: X R U n / D R m	[XRUn/DRm]
    Box 10: A              	[A]
    Box 11: A              	[A]
    Box 12: A              	[A]
    Box 13: A              	[A]
    ```

=== "GER"

    ```
    Box  1: x „ U n … F g m	[x„Un…Fgm]
    Box  2: A A A , G ? n  	[AAA,G?n]
    Box  3: A A 3 G R n    	[AA3GRn]
    Box  4: A … F Q m      	[A…FQm]
    Box  5: 4 C U n F „ Q n	[4CUnF„Qn]
    Box  6: A A A A _ B m  	[AAAA Bm]
    Box  7: A A “ … h m    	[AA“…hm]
    Box  8: A _ … ! l      	[A …!l]
    Box  9: X R U n / D R m	[XRUn/DRm]
    Box 10: A              	[A]
    Box 11: A              	[A]
    Box 12: A              	[A]
    Box 13: A              	[A]
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
    Box  2: ♀ Q n F F U n  	[♀QnFFUn]
    Box  3: A A g … ? q    	[AAg…?q]
    Box  4: A C S U n      	[ACSUn]
    Box  5: l ” Q o c … ? q	[l”Qoc…?q] (change 'l' to ' ' for BX lr)
    Box  6: _ F o          	[ Fo]
    ```

=== "FRA"

    ```
    Box  1: l … l o z ♀ Q o	[l…loz♀Qo]
    Box  2: ♀ Q n F F U n  	[♀QnFFUn]
    Box  3: A A g … ? q    	[AAg…?q]
    Box  4: A C S U n      	[ACSUn]
    Box  5: l » Q o c … ? q	[l»Qoc…?q] (change 'l' to ' ' for BX lr)
    Box  6: _ F o          	[ Fo]
    ```

=== "GER"

    ```
    Box  1: l … l o z ♀ Q o	[l…loz♀Qo]
    Box  2: ♀ Q n F F U n  	[♀QnFFUn]
    Box  3: A A g … ? q    	[AAg…?q]
    Box  4: A C S U n      	[ACSUn]
    Box  5: l “ Q o c … ? q	[l“Qoc…?q] (change 'l' to ' ' for BX lr)
    Box  6: _ F o _ _ _ _  	[ Fo]
    ```

## References and Acknowledgements

- [E-Sh4rk's original article for the hexwriter, crafting egg, and CPSR status reset](https://e-sh4rk.github.io/ACE3/emerald/hex-writer/hex-writer/)
- [Adrichu00's method of writing the hexwriter](https://gist.github.com/Adrichu00/49433953af9d6fd7c1cd368d48c68778)
- RationalPsycho on the Glitch City Research Institute Discord for the glitched mail inputs
- merrp of the Glitch City Research Institute Discord for the `STR+4` opcode used in the codes.
- Mettrich for suggesting another way to write these codes that works around Nintendo’s word filter.
