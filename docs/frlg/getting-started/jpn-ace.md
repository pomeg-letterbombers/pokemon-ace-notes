---
title: Japanese ACE Setup
---

In this tutorial, you will be setting up arbitrary code execution in Japanese FireRed or LeafGreen through the PC shift/swap action in the Pokémon Storage System. Through the mail glitch, you will transform a donor Pokémon into a glitch Pokémon that will then be used to generate glitch species 0xFFC9 which is the standard ACE species used in Japanese FireRed and LeafGreen.

## Prequisites

*   Your save has the mail glitch active, and you know how to use it.
    +   If not, please read [this article](mail-glitch.md) to learn how to activate it.

## Getting the donor Pokémon

For this method, you will need to acquire a Pokémon with a specific personality value (<abbr>PID</abbr>), which depends on the value of the donor Pokémon’s original trainer’s TID. More specific details (i.e. how it is calculated) about this PID is available [here](../../technical-documentation/jpn-grab-ace-set-up.md). In short, it allows for overwriting the species field with an the index of a specific mail word (let this mail word be called the **species word**) that will be interpreted as one of the many glitch species that can enable ACE in FireRed and LeafGreen[^1].

If you are playing on LeafGreen, there is a trade Pokémon that can work as a donor Pokémon and an alternate version of this guide using that Pokémon is available [here](jpn-lg-ace.md); unfortunately FireRed does not have such a trade Pokémon that works as one, so the donor Pokémon in FireRed saves must be acquired manually.

There are two (somewhat viable) methods that you could use to acquire the donor Pokémon: RNG manipulation, and brute forcing at the Celadon Game Corner. These are split off into their own pages for better organisation, follow the instructions there for acquiring a donor Pokémon then return to this tutorial and continue to the next section.

[^1]: The full list of ACE species for FireRed and LeafGreen is at [here](https://github.com/pomeg-letterbombers/ace-setup-tools/blob/main/res/FireRed_Species.csv) for FireRead, and [here](https://github.com/pomeg-letterbombers/ace-setup-tools/blob/main/res/LeafGreen_Species.csv) for LeafGreen.

*   [Without RNG manipulation](jpn-ace-donor-no-rng.md)
*   [With RNG manipulation](jpn-ace-donor-rng.md)

## Adjusting the donor Pokémon

<div class="admonition warning" markdown="block">
<p class="admonition-title">Warning</p>

Make sure you save **here**, and do not perform further saves until instructed so that you have a recovery point in case anything goes wrong.

</div>

Next you will be using a tool (we call it the **Checksum Adjustment Calculator**) to determine the stat adjustment to apply to the Pokémon, as well as another mail word which will be used to keep the checksum valid. The tool is provided at: <https://pomeg-letterbombers.github.io/ace-setup-tools/adjustment-calc/>. This tool takes the donor Pokémon’s **adjustment type**, **encryption key**, **base species index**, **new species index** (i.e. the species index of the glitch Pokémon), and if the adjustment type is **experience**, it will also the take Pokémon’s current experience.

If you have a specific mail word you wanted to use for correcting the checksum, then enter its index in **Checksum Word Index** (you can find the index of Japanese mail words [here](https://gist.github.com/it-is-final/1e55b12b97bba7db1524c81ed77c7bb9)). Otherwise, you should check the **Search easy chat words** checkbox. There you can also expand the range of mail words searched with the further checkboxes which has already been explained in the acquiring donor Pokémon pages.

Enter the parameters, then click <kbd>Find</kbd>.

Information about the checksum word as well as the adjustment needed should appear. Take note of the checksum word, and the adjustment. The adjustment shown is what the final value of the stat should be before performing mail corruption on the donor Pokémon. For the **EV** adjustment type, adjusting both the **HP** **and** **Attack** **or** the **Sp.Attack** **and** **Sp.Defense** should be enough. You should pick one of the pairs to adjust and note down which EV pair you chose to adjust for later.

Make sure to adjust the stats before following the instructions in the next section.

## Mail corrupting the donor Pokémon

Place the donor Pokémon in Box 3, Slot 1. Then trigger the mail glitch. What you will write will depend on the adjustment type, and how you adjusted your Pokémon specifically. A graphic has also been provided as a visual aid.

*   **Experience-adjusted Pokémon:** The **species word** must be the **third** word, and the **checksum word** must be the **fifth** word.
*   **EV-adjusted Pokémon (all):** The **species word** must be the **ninth** word
    +   **HP/Attack:** The **checksum word** must be the **third** word.
    +   **Sp.Attack/Sp.Defense:** The **checksum word** must be the **fifth** word.

<div class="grid" markdown>
<figure markdown="span">

![Pokémon mail screen with the 3rd and 5th word circled](../../assets/images/frlg/getting-started/jpn-ace/experience-adjustment-graphic.png){ width=300px }
<figcaption>Guide for experience adjustment type</figcaption>

</figure>
<figure markdown="span">

![Pokémon mail screen with the 3rd, 5th and 9th word circled](../../assets/images/frlg/getting-started/jpn-ace/ev-adjustment-graphic.png){ width=300 }
<figcaption>Guide for EV adjustment type</figcaption>

</figure>
</div>

Confirm the mail, then check Box 3 again. A **glitch Pokémon** (usually shown as a ? or stealing the sprite of party Pokémon with the wrong pallete) should have replaced your donor Pokémon. You can save if you see this.

### In case of failure

If a **bad egg** appeared instead it could be caused by the following:

*   The words are in the wrong slot of the glitch mail.
    +   If you have a recovery point, at the point when you are writing mail, make sure that you are writing the correct words in the right places.
*   The Pokémon is not adjusted correctly.
    +   If you have a recovery point before writing the mail, depending on the adjustment type, you should do the following:
        -   **Experience-adjusted Pokémon:** If the experience is over the what the adjusted experience should be, redo the [Adjusting the donor Pokémon](#adjusting-the-donor-pokémon) instructions with the new experience. Otherwise add more experience until it is equal to what the adjusted experience should be.
        -   **EV-adjusted Pokémon:** If you have not been tracking your EVs properly, you should redo the EVs while tracking them properly. If you somehow saved right before the mail corruption (despite explicit warnings against this), then you must start again and [reacquire a donor Pokémon](#getting-the-donor-pokémon).
*   The reported PID used as the Pokémon's PID in the tool is not the Pokémon's PID.
    +   This case only happens if the donor Pokémon is not obtained via RNG manipulation, and from the IVs to PID tool there were multiple possible PIDs for the given set of IVs, gender, nature, and ability. In this case, start back at [Getting the donor Pokémon](#getting-the-donor-pokémon) and if there is no other possible PIDs that allow the donor Pokémon to be useable, then you must catch a different Pokémon.

## Creating 0xFFC9

<div class="admonition tip" markdown="block">
<p class="admonition-title">Tip</p>

If you have converted your Pokémon to glitch species 0xFFC9 from the previous section, then you may skip this section.

</div>

The new glitch Pokémon in Box 3, Slot 1 can be used for triggering ACE. However there are a few reasons why we might not want to use this glitch Pokémon as our main entrypoint for ACE:

*   These glitch Pokémon have differing entrypoints in the PC boxes. The standard ACE environment, will usually expect ACE to start from a certain point in the boxes (in this case the standard entrypoint is 0x0203027F, which is around Box 12, Slot 29). If it starts later than expected then some ACE payloads may not work as expected.
*   Upon triggering ACE, the program counter might be interpreting these instructions using either the Thumb or ARM instruction sets. If the glitch Pokémon is an **ARM** species, this also makes it difficult to use most ACE codes, without needing a bootstrap since most Japanese FireRed and LeafGreen ACE codes are written in Thumb machine code.
*   Some of these glitch Pokémon might cause side-effects before or after triggering ACE in unknown ways not accounted for by standard ACE environments. This includes graphical glitches, as well as possible bad eggs generating in random places.

As such, with this Pokémon (we will call it the initial ACE species), we will only be using it to generate another glitch Pokémon (species 0xFFC9) which the standard ACE Pokémon in Japanese FireRed and LeafGreen (much like 0x0351 in non-Japanese versions). This Pokémon starts ACE from the standard entrypoint (0x027F027F, or 0x0203027F when masked), it interprets data as **Thumb** machine code when trigger ACE, and it has no known side-effects.

Make sure that the entrypoint of the initial ACE species, and all box slots following it are **empty**, and that you have two or less party members because this code will overwrite one of the party slots with glitch species 0xFFC9.

Set your box names to the ones shown below:

```
Box  1:	リ び … ｏ く ＿ ゼ ｎ	[リび…ｏく　ゼｎ]
Box  2:	＿ … ｔ ま ＿ １ ｔ ほ	[　…ｔま　１ｔほ]
Box  3:	ぁ ｍ ＿ ＿ あ い 　 　	[ぁｍ　　あい] (first ぁ is small, and second あ is regular)
Box  4:	ア Ｂ ぢ い い Ｎ 　 　	[アＢぢいいＮ]
Box  5:	Ｏ 　 　 　 　 　 　 　	[Ｏ]
Box  6+: (anything)
```

Then in the PC’s **Move Pokémon** mode, grab any Pokémon (except for the glitch Pokémon), and make sure the cursor is **orange** (press <kbd>SELECT</kbd> if it is not). Then swap this Pokémon with the glitch Pokémon by hovering it over the glitch Pokémon then pressing <kbd>A</kbd>. This should move the glitch Pokémon into the cursor, press <kbd>A</kbd> again and the other Pokémon should come back into the cursor. Place this Pokémon anywhere afterwards. An image below has been provided to illustrate how it should look.

<figure markdown="span">

![Swapping two Pokémon in the PC](../../assets/images/frlg/getting-started/jpn-lg-ace/SwappingAction.png)
<figcaption>Swapping two Pokémon in the PC</figcaption>

</figure>

After performing the swap, your game should not crash. If that is so, then you have just learned how to trigger ACE through swapping! Exit the Move Pokémon mode, then enter Deposit mode. In the third party slot, a glitch Pokémon should have appeared (as shown below), make sure to deposit it somewhere in the boxes.

![A glitch Pokémon in party slot 3](../../assets/images/frlg/getting-started/jpn-lg-ace/FinalResult.png)

If you see this (note that the name might vary, but as long as it looks similar, then its the correct Pokémon), that means the code worked, and you have ACE set up in Japanese FireRed or LeafGreen. You can trigger ACE at any time with this glitch Pokémon by setting the correct box names for your code beforehand then performing the aforementioned swapping with **this** glitch Pokémon.

### In case of failure

If a **bad egg** appeared in party slot 3, or the game **crashed** after performing the swap, or **nothing** happened after performing the swap, it could be caused by the following:

*   You made a mistake in writing the box names.
    +   Redo the box names, and make sure you have entered the correct characters.
    +   Check these box names again, its likely to be the cause of the crashes most of the time.
*   There is Pokémon or invisible Pokémon (can be caused by Pal Park migration) in the box slots after the glitch Pokémon’s entrypoint, or you forgot to clear out your party.
    +   You can move them out to an area of the PC before the entrypoint, or for the invisible Pokémon, you can use group selection to remove them.
    +   Make sure that before executing the code, there are 2 or less Pokémon in your party.
*   You somehow got the wrong glitch Pokémon.
    +   This only applies to cases where a crash, or nothing occurred rather than a bad egg appearing. If a bad egg appeared at all, that means the code was executed incorrectly, but the glitch Pokémon is still triggering ACE properly.
    +   First of all, check all of the other items on this list before you consider this to be the cause.
    +   If you are sure about this being the cause, then follow the failure notice in the [Mail corrupting the donor Pokémon](#in-case-of-failure) section.

### Removing the initial ACE Pokémon

You probably don’t want to keep the initial ACE Pokémon in the boxes, to remove it please do the following:

1. Place the glitch Pokémon in the party (using the orange hand).
2. Exit the PC, then go to the party menu.
3. Move the glitch Pokémon to the first party slot.
4. Go back to the PC and enter deposit mode.
5. Release the Pokémon by selecting the Pokémon then select release and confirm.
