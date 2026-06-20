---
title: "WELDR"
---

<div class="admonition note" markdown="block">
<p class="admonition-title">Note</p>

This guide is an adaptation of Mettrich/claydolwithexplosion’s WELDR guide.

</div>

WELDR is a payload that parses the box names as (impure) base64 data,
and writes the data to a box slot within the PC.
This bypasses the limited character encoding of non-Japanese third generation Pokémon games,
allowing the writing of more arbitrary data

## Setting up WELDR

Make sure to write these box names **exactly** as shown.
Trigger ACE after writing out each box name code.
Do not add or remove trailing spaces from these box names.

=== "Console"

    === "Code 1"

        ```
        Box   1: B C U n p 0 E H [BCUnp0EH]
        Box   2: G D H W F f … … [GDHWFf……]
        Box   3: R V z _ h n     [RVz hn]
        Box   4: P T S f ♀       [PTSf♀]
        Box   5: _ H B … E L Q ♂ [ HB…ELQ♂]
        Box   6: _ S I H I . I q [ SIHI.Iq]
        Box   7: ? H T S g ♀ _ _ [?HTSg♀  ]
        Box   8: Y _ I k r       [Y Ikr]
        Box   9: I R H U K U G G [IRHUKUGG]
        Box  10: D G A I I F K G [DGAIIFKG]
        Box  11: I T P N I G L I [ITPNIGLI]
        Box  12: F T K T I T F R [FTKTITFR]
        Box  13: C Q L T I G F K [CQLTIGFK]
        Box  14: P L K F M T L L [PLKFMTLL]
        ```

        *   `0` character in Box 1 is zero, not capital O
        *   After triggering ACE,
            a bad egg should have appeared in Box 10, Slot 22.
            Leave this bad egg alone for now.

    === "Code 2"

        ```
        Box 1-4: (same as Code 1)
        Box   5: _ H B … c L Q ♂ [ HB…cLQ♂]
        Box 5-8: (same as Code 1)
        Box   9: I H F J D U I G [IHFJDUIG]
        Box  10: C U J O I L L G [CUJOILLG]
        Box  11: H N K O I J F Q [HNKOIJFQ]
        Box  12: H N L O L T I F [HNLOLTIF]
        Box  13: D T M F J L P F [DTMFJLPF]
        Box  14: H G L H G Q G M [HGLHGQGM]
        ```

        *   The `O` characters in Boxes 10-12 are captial Os, not zero.

    === "Code 3"

        ```
        Box 1-4: (same as Code 1)
        Box   5: _ H B … 6 L Q ♂ [ HB…6LQ♂]
        Box 5-8: (same as Code 1)
        Box   9: H K G F I F H U [HKGFIFHU]
        Box  10: H R E G B U G H [HREGBUGH]
        Box  11: E G D U E L D T [EGDUELDT]
        Box  12: D R H U I F I F [DRHUIFIF]
        Box  13: E F D K K I C H [EFDKKICH]
        Box  14: K L C I I H G F [KLCIIHGF]
        ```

=== "Emulator"

    === "Code 1"

        ```
        Box   1: B C U n x 0 E H [BCUnx0EH]
        Box   2: G D H W F f … … [GDHWFf……]
        Box   3: R V z _ h n     [RVz hn]
        Box   4: P T S f ♀       [PTSf♀]
        Box   5: _ H B … G L Q ♂ [ HB…GLQ♂]
        Box   6: _ S I H I . I q [ SIHI.Iq]
        Box   7: ? H T S g ♀ _ _ [?HTSg♀  ]
        Box   8: Y _ I k r       [Y Ikr]
        Box   9: I R H U K U G G [IRHUKUGG]
        Box  10: D G A I I F K G [DGAIIFKG]
        Box  11: I T P N I G L I [ITPNIGLI]
        Box  12: F T K T I T F R [FTKTITFR]
        Box  13: C Q L T I G F K [CQLTIGFK]
        Box  14: P L K F M T L L [PLKFMTLL]
        ```

        *   `0` character in Box 1 is zero, not capital O
        *   After triggering ACE,
            a bad egg should have appeared in Box 10, Slot 22.
            Leave this bad egg alone for now.

    === "Code 2"

        ```
        Box 1-4: (same as Code 1)
        Box   5: _ H B … e L Q ♂ [ HB…eLQ♂]
        Box 5-8: (same as Code 1)
        Box   9: I H F J D U I G [IHFJDUIG]
        Box  10: C U J O I L L G [CUJOILLG]
        Box  11: H N K O I J F Q [HNKOIJFQ]
        Box  12: H N L O L T I F [HNLOLTIF]
        Box  13: D T M F J L P F [DTMFJLPF]
        Box  14: H G L H G Q G M [HGLHGQGM]
        ```

        *   The `O` characters in Boxes 10-12 are captial Os, not zero.

    === "Code 3"

        ```
        Box 1-4: (same as Code 1)
        Box   5: _ H B … 8 L Q ♂ [ HB…8LQ♂]
        Box 5-8: (same as Code 1)
        Box   9: H K G F I F H U [HKGFIFHU]
        Box  10: H R E G B U G H [HREGBUGH]
        Box  11: E G D U E L D T [EGDUELDT]
        Box  12: D R H U I F I F [DRHUIFIF]
        Box  13: E F D K K I C H [EFDKKICH]
        Box  14: K L C I I H G F [KLCIIHGF]
        ```

After executing all of these box name codes,
the bad egg in Box 10, Slot 22
should have became a Metang named `WELDR`.
If you do not see the Metang, check the [troubleshooting](#troubleshooting)
section for further advice
and come back here later.

Now that you have WELDR,
you only need to get one more Pokémon
before you can start using it.
Go to the nearest route and
catch any wild Pokémon and name it `J7VC`.

You now have all that is needed to use `WELDR`.
In order to use WELDR,
place it in Box 14, Slot 28,
and place the nicknamed Pokémon in Box 14, Slot 29.
Box 14 should look like the below diagram after setting everything up.

```
BOX 14:
- - - - - -
- - - - - -
- - - - - -
- - - - - -
- - - W N -
```

* `W`: WELDR
* `N`: Pokémon nicknamed `J7VC`

If you wish to use normal box name codes or the [Hexwriter](frlg-hex-writer.md),
then move these two Pokémon to slots outside the ACE area.
For 0x0351, the ACE area starts from Box 13, Slot 7
and extends to the rest of Box 13 and all of Box 14.

## Troubleshooting

If the bad egg in Box 10, Slot 22 did not become a Metang,
check for any mistakes in the third code
and re-trigger ACE after correcting these mistakes.

If there is no change to the bad egg after re-triggering ACE
or the third code has no mistakes,
that means you will need to start from the beginning again.

## Using WELDR

The Base64 alphabet WELDR uses is almost identical
to the one used for standard Base64 with a few minor changes,
due to technical constraints regarding the character encoding of
the third generation Pokémon games.

These changes are:

* 62: `/` → `?`
* 63: `+` → `!`
* (pad): `=` → `A`

Any hexadecimal to Base64 conversion tool
can be used to convert Pokémon data reperesented in hexadecimal
to WELDR’s Base64
provided that the above changes to the Base64 alphabet
are accounted for.

There are also online tools that members of the glitching community
have made specifically for WELDR, some of which are listed below. 

*   [MankeyMite’s Hex → Base64 tool](https://mankeymite.github.io/HexToBase64/)
*   [MankeyMite’s Gen 3 ACE Pokémon Builder](https://mankeymite.github.io/Gen3ACEPokemonBuilder/)
*   [Adrichu00’s Gen3 ACE Code Mon Interpreter](https://adrichu00.github.io/ACE3CodeMonInterpreter/)

## Acknowledgements

*   [Mettrich/claydolwithexplosion][claydolwithexplosion-github] from the Glitch City Research Institute for creating WELDR.

[claydolwithexplosion-github]: https://github.com/claydolwithexplosion
