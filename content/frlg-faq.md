---
title: "FireRed and LeafGreen FAQ"
---

# FireRed and LeafGreen FAQ

## The 0x0351 mail did not work

<div class="admonition note" markdown="block">
<p class="admonition-title" markdown="span">Note</p>

This is for the [Post-Elite Four route](frlg-non-jpn-post-e4-route.md).

If you are doing the [Pre-Elite Four route](frlg-non-jpn-pre-e4-route.md),
this does not apply to you, go to
[My HOCK turned into a bad egg](#my-hock-turned-into-a-bad-egg).

</div>

Make sure that you have selected the “MAGIKARP” word from the
**POKéMON** group, not from A-Z mode or the POKéMON2 group. This is
because the internal word index used for MAGIKARP differs between the one
present in the POKéMON group and the one for the POKéMON2 group (which
also gets used in A-Z mode if you have beaten the Elite Four).

## My HOCK turned into a bad egg

This means one of two causes (in order of likelihood):

- You made a mistake in EV training
- You entered the wrong mail words

For both cases, provided that you have enough mail, you can just create
another HOCK. You just simply delete the erroneous bad egg (you can use
the steps described in
[*Using group selection to clear invisible bad eggs*](general-faq.md#using-group-selection-to-clear-invisible-bad-eggs))
and create HOCK again using the guide.

## Bad eggs are appearing in Box 13

This is a known side effect of glitch species 0x0351 (the main grab ACE
Pokémon used for non-Japanese FireRed and LeafGreen), that has to do with
its long name. Long story short, due to the long name, another internal
pointer (variable that stores the address of something) is corrupted with
an “address” that happens to point to somewhere within Box 13. It just
turns out that this internal pointer is dereferenced (accessing the stuff
the pointer “points” to) quite often when performing various actions in
the PC, and some of these actions also happen to write values to whatever
was supposed to be accessed via the pointer which causes the bad eggs you
see in Box 13.

Note that these bad eggs (or rather corruptions) will only ever affect
the 7th, 8th, or 9th slots of Box 13. Thus you should **never** store
valuable Pokémon or most special ACE Pokémon in these box slots, to avoid
possible corruptions.

Additionally, you can always immediately exit the PC upon viewing the
information of 0x0351 (after placing it in a different slot). This should
minimise the opportunities of running the game code that performs the
unwanted corruptions to Box 13. For this prevention technique to work,
you should store 0x0351 in a box other than Box 13 or Box 14.

## I am playing on the Switch rerelease and the codes do not work!

As of 1st March 2026, these Switch rereleases are very recent and have many odd quirks that makes some existing codes for the original FireRed and LeafGreen incompatible.

### Codes that will need a specific Switch rerelease version

These codes will need a different version written (or rewritten) for the Switch rerelease as the game has been heavily internally modified from the original ROM, and the emulator used for these rereleases has a bunch of emulation quirks.

*   Codes that use ROM addresses
    +   Codes that hook into scripts within ROM (<i>Run script via NPC</i>)
    +   Codes that call functions within ROM (Hall of Fame warp, <i>Change Pokémon PID or TID</i>, etc.)
*   Codes that read and write to static RAM addresses
    +   RNG seed change codes
    +   Non-NPC based custom script codes (<i>Teleport anywhere</i> and <i>Run script via GlobalScriptContext</i>)
    +   Party data manipulation codes
*   Codes that use GBA behaviors not emulated by the emulator used for the rerelease.
*   Codes currently unenterable due to tripping Nintendo’s bad word filter.

### Code adjustments needed for Switch rereleases

You can try making these adjustments to the code and see if it executes properly.
This accounts for some of the emulation quirks found with the emulator used for the rereleases.

Avoid inserting space characters into the last three characters of Box 4, Box 8, and Box 12. Instead leave them empty and confirm the box name early.

```
Original:
Box 4: E _ F R m _ _ _ [E FRm   ]

Adjusted:
Box 4: E _ F R m       [E FRm]
```

The emulator used for the rereleases has crashing behaviors on some ARM instructions that normally does not happen on a real GBA or most emulators.
Exit codes however use these crashing instructions, and thus they must be adjusted to prevent this behavior.

This exit code is found in a number of FireRed and LeafGreeen codes, including all codes in Sleipnir17’s Pastebin for FireRed and LeafGreen swap/grab ACE.
Box 11 should be adjusted as follows.

```
Original:
Box 11: … o _ _ _ _ _ _ […o      ]

Adjusted:
Box 11: . o             [.o]
```

This exit code might be found in some newer resources, and can also be placed in Box 5 and 6, as well as Box 2 and 3.
These boxes should be adjusted as follows.

```
Original:
Box 10: _ F o H I C o r [ FoHICor]
Box 11: B n             [Bn]

Adjusted:
Box 10: _ F o H I o o r [ FoHIoor]
Box 11: x n             [xn]
```

### The code still does not work

Check [The code isn’t working](general-faq.md#the-code-isnt-working) FAQ entry and see if you made a common mistake.

If you are sure that you have throughly checked for these mistakes and the code is still not working for you, then it is possible that the specific code you are using is not compatible with the Switch rereleases.
You will have to wait for a version for the Switch rerelease to be made.

## Acknowledgements

*   Adrichu00 for [researching](https://gist.github.com/Adrichu00/87f1f2064f5408b06c8f2886c4bf9ae4) the cause of 0x0351’s bad eggs in Box 13.
*   claydolwithexplosion (Mettrich) for researching tweaks for Switch FireRed and LeafGreen ACE and others for testing these tweaks.
