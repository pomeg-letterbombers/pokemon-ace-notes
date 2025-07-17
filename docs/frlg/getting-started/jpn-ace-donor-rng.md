---
title: "Japanese ACE Setup: Getting the donor Pokémon via RNG manipulation"
---

For this method, you should be familiar with RNG manipulation in Pokémon FireRed and LeafGreen. If not, you should either follow the other method ([Brute forcing at the Celadon Game Corner](#brute-forcing-at-the-celadon-game-corner)), or follow these guides for either [retail](https://retailrng.com/frlg/) or [emulator](https://www.pokemonrng.com/fire-red-and-leaf-green/).

While you can target any encounter for the RNG manipulation, it is recommended (especially for retail) that you use either the Eevee at Celadon Mansion, or Scyther<sup>FR</sup>/Pinsir<sup>LG</sup> at the Celadon Game Corner (ideally the ones with high stats) as the target encounter for this RNG manipulation. As such further instructions will assume that you are targeting either of these encounters for the RNG manipulation (make deviations as needed if you are **not** targeting these encounters).

<div class="admonition note" markdown="block">
<p class="admonition-title">For emulator users</p>

We are assuming that you are using a Lua script (like the one [here](https://github.com/Real96/PokeLua/blob/main/Gen%203/mGBA/FRLG_RNG_mGBA.lua)) to perform the RNG manipulation. If you wish to not use Lua scripts, follow the instructions for console users. Keep in mind though that there are currently issues with emulators not being able to hit initial seeds in the same manner as console, so you are on your own if you choose to do the console method on emulator.

</div>

First open the [**Donor Search**](https://pomeg-letterbombers.github.io/ace-setup-tools/donor-search/) tool, this tool allows you to find the target advance(s) for a suitable donor Pokémon. We recommend setting the parameters as shown below.

<dl markdown="block">
<dt>Game version</dt>
<dd markdown="block">

Set this to the game version you are playing on.

</dd>
<dt>Encounter type</dt>
<dd markdown="block">

Set this to **Static**.

</dd>
<dt>Seed</dt>
<dd markdown="block">

**For console:** Set this to an early seed (i.e. a low frame number) in one of these spreadsheets. Choose the spreadsheet appropriate for your game version.

*   [FireRed 1.0](https://docs.google.com/spreadsheets/d/1GMRFM1obLDcYbR6GR6KrE8UZotA7djUTw8PxqVFnCVY/edit?pli=1&gid=1608943801#gid=1608943801)
*   [FireRed 1.1](https://docs.google.com/spreadsheets/d/1aQeWaZSi1ycSytrNEOwxJNoEg-K4eItYagU_dh9VIeU/edit?gid=791743105#gid=791743105)
*   [LeafGreen](https://docs.google.com/spreadsheets/d/1LSRVD0_zK6vyd6ettUDfaCFJbm00g451d8s96dqAbA4/edit?gid=1862478029#gid=1862478029)

**For emulator:** After starting the game, press <kbd>A</kbd> or <kbd>START</kbd> on the title screen and pause the game (using <kbd>Ctrl</kbd> + <kbd>P</kbd> or whatever other keybind your emulator uses). Then note down whatever initial seed shows up in the script’s interface. Or you can just write any 16-bit value (0–65535), then use your script’s initial seed bot to hit that seed.

</dd>
<dt>Species word settings</dt>
<dd markdown="block">

By default (i.e. no checkboxes under this group are checked), the searcher will exclude any unlockable words from the search. These checkboxes allows the tool to also search through the certain unlockable words.

*   **Use unlockable words** will allow the **species word** to also be a word that is unlockable before entering the Hall of Fame.
*   **Use post-Elite Four words** will allow the **species word** to be also be a word that is unlockable after entering the Hall of Fame.

</dd>
<dt>Initial advances</dt>
<dd markdown="block">

Set this to **350** for the Celadon Mansion Eevee, or **550** for the Game Corner prize Pokémon.

</dd>
<dt>Advances</dt>
<dd markdown="block">

Set this to **100**.

</dd>
<dt>Delay</dt>
<dd markdown="block">

*   **For console:** Set this to **0**.
*   **For emulator:** Set this to **4** for the Celadon Mansion Eevee, or **3** for the Game Corner prize Pokémon.

</dd>
</dl>

Once you have entered these parameters, click on <kbd>Find</kbd>.

The <i>Results</i> table should be populated with entries. Each entry consists of an <i>Advance</i> number, and the PID of the corresponding generated Pokémon. Select one of these targets to target for the RNG manipulation.  If you are unsure on which advance to target, use the below guide.

*   **For Celadon Mansion Eevee:** Target the advance closest to advance **400**.
*   **For Game Corner Scyther<sup>FR</sup>/Pinsir<sup>LG</sup>:** Target the advance closest to advance **600**.

Once you have the target Pokémon, then continue to the next section.

## Species word finder

Next you will be using a tool (we call it the **Species Word Finder**) to both determine if the Pokémon is suitable for use as a donor Pokémon and find various important variables for this tutorial. The tool is provided at <https://pomeg-letterbombers.github.io/ace-setup-tools/species-word-finder/>. This tool takes the Pokémon’s personality value (PID), its original trainer’s ID number (TID), the game version as well as a few optional parameters that widens the range of mail words are searched. Below is an explanation for each item in the results area:

<dl markdown="block">
<dt>PID substructure order</dt>
<dd markdown="block">

This is the order in which the encrypted substructures of the Pokémon’s data is laid out, with **G** for **Growth**, **A** for **Attacks**, **E** for **EVs/Conditions**, and **M** for **Miscellaneous**. This is just technical details for people who want to know more.

</dd>
<dt>Encryption key</dt>
<dd markdown="block">

This is one half of a value that is used to encrypt the Pokémon data. This half happens to be relevant for the operations we are doing. This half is formed by: (<var>PID</var> mod 65536) &oplus; <var>TID</var>.

</dd>
<dt>Adjustment type</dt>
<dd markdown="block">

Can be “EV”, “Experience”, or “None”. This determines which stats you will have to adjust in order for the mail corruption to keep the Pokémon’s checksum valid. If this value is **None**, that means the Pokémon is not suitable for use as a donor Pokémon.

</dd>
<dt>Species index</dt>
<dd markdown="block">

This is the internal index that is used to identify this “species” in the game’s code.

</dd>
<dt>Entrypoint</dt>
<dd markdown="block">

When ACE is triggered, this is the **earliest point** in the PC boxes where the program counter can start reading machine code from. This and all slots after it **will** be interpreted as machine code. Make sure that this and all following box slots are **empty** (or contain Pokémon with special data expressly for ACE applications) when triggering ACE. Note that due to ASLR, where the program counter actually enters in the boxes can vary from execution to execution.

</dd>
<dt>Word index</dt>
<dd markdown="block">

This is the internal index that is used to identify this word in the game’s code.

</dd>
<dt>Word group</dt>
<dd markdown="block">

This is the word group of the **species word**, which may be useful if you prefer to use the default group view to find the word you want to enter.

</dd>
<dt>Word</dt>
<dd markdown="block">

This is the **species word**, which is the word that overwrites your species in a way that it turns your Pokémon into one of the many glitch Pokémon that can trigger ACE.

</dd>
</dl>

Enter the Pokémon’s PID and its TID, select the game you are using, then click <kbd>Find</kbd>.

If you see results in the table, that means the Pokémon is suitable for use as a donor Pokémon. Take note of the **encryption key**, and **adjustment type**, as well as the **entrypoint**, **species index**, and **word** of one of the table entries (if there are multiple, you can use the [Checksum Adjustment Calculator](https://pomeg-letterbombers.github.io/ace-setup-tools/adjustment-calc/) to check each species, then select the one that requires the least amount of effort to adjust, make sure that **Search easy chat words** is checked).

If you see a **None** adjustment type, and/or no results in the table, that means the Pokémon is not suitable for use as a donor Pokémon. You should not be seeing this, if you do, make sure that the **Species word settings** are the same ones you used for Donor Search then try again.

[Back to main tutorial](jpn-ace.md#adjusting-the-donor-pokémon){ .md-button .primary }
