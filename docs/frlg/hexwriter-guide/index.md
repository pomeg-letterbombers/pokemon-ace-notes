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
    - Instructions on how to write this can be found [here](ExitCodes/FRLG_GrabACE_ShortExit.md)
- The exit code bootstrap.
    - This is technically not necessary for the box name codes and can be created after the creation of the hexwriter
    - This will allow the hexwriter to exit properly via `r0`
    - Instructions on how to create this can be found [here](ExitCodes/GrabACEBootstrap.md)
- Snorlax and Omanyte has been seen on the save file


## Instructions
!!! note
    
    These mail words will be different if your game's language is not English, consult Bulbapedia for a translation.

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

!!! info
    If you chose to set the exit of the hexwriter to `BX lr` you need to know of the following:
    - More advanced setups such as the HeXecutor do not work as is
    - You need a different exit code bootstrap that directly clears at least the least significant byte of `r0` in its data placed before the hexwriter, otherwise the hexwriter will not exit properly.

The bad egg is now ready to be used as the hexwriter.
Its hex data should be identical to the original version of the hexwriter (if you chose to enter the last code as is).
Move this bad egg to Box 14, Slot 29 and execute ACE.
Most likely whatever is written in the box names would be interpreted as a bad egg, however if you want certainty that the hexwriter is working properly, write the following names and execute ACE.
```
Box  1: 00000000
Box  2: 00000000
Box  3: C6E9D7DF
Box  4: EDFFFFFF
Box  5: FFFF0002
Box  6: 00000000
Box  7: 00000000
Box  8: 71000000
Box  9: 71000000
Boxes 10-14: 00000000
```
A shiny Chansey named 'Lucky' should appear in Box 14, Slot 28.

If you want to know what the hex data for the hexwriter is supposed to be, it is the following:
```
8A808FE2
000EB8E8
02045CE3
66C04F32
0910D8E7
B11051E2
10109132
0BB28150
00B09C45
01001AE3
01B0CC14
00B0A013
07005AE3
01A08A32
00A0A023
01908922
019089E2
7E0059E3
40F04F42
10FF2FE1
```

## Changing the exit of the hexwriter
!!! warning
    These codes require a genuine GBA BIOS, if you do not have one, you will have to rewrite the Box 14 exit then reexecute code 6 with the desired exit.
These are some short codes that change the exit opcode of the hexwriter.
Place the hexwriter back in Box 10, Slot 19 and execute one of these codes depending on the desired exit.

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

## Troubleshooting
If the hexwriter is not working as expected, please refer to [this troubleshooting guide](https://e-sh4rk.github.io/ACE3/emerald/hex-writer/hex-writer/#appendix-in-case-of-failure) for the hexwriter.

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
The mail corruption allows directly writing halfwords that would have made the main code writing process longer.
With the mail written at the start of the process, here is the index of each word we wrote (an * means that byte was overwritten by a box name code):
|Word|Index (hex)|
|-|-|
|DREAM EATER / OMANYTE / GARDEVOIR|**8A|
|SNORLAX / SKY ATTACK / METANG|**8F|
|LISTEN|0E00|
|THICK FAT|0402|
|MINUS|**5C|
|PICKUP|**66|
|MARVEL SCALE|**4F|
|LIKELY TO|1009|

While there are candidates for mail word 4, the problem is that they are only unlockable after the postgame which complicates writing this hexwriter for players who have went for New Game+.
For those who are curious, here are the candidates for mail slot 4.
|SCARY FACE / AZUMARILL|**B8|
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
- [E-Sh4rk's original article for the hexwriter](https://e-sh4rk.github.io/ACE3/emerald/hex-writer/hex-writer/)
- [Adrichu00's method of writing the hexwriter](https://gist.github.com/Adrichu00/49433953af9d6fd7c1cd368d48c68778)
- RationalPsycho on the Glitch City Research Institute Discord for the glitched mail inputs
- merrp on the Glitch City Research Institute Discord for the `STR+4` opcode used in the codes.