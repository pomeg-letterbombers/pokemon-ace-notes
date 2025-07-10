---
title: Getting the donor Pokémon without RNG manipulation
---

In the game, make sure that you have large amounts of coins and Rare Candies (mail glitch’s item duplication should allow you to obtain large amounts of each easily). It is also recommended to have a party of only one Pokémon, this just makes mass checking easier. At the Celadon Game Corner, save in front of the clerk that gives out the prize Pokémon.

Then buy a prize Pokémon (we recommend Scyther<sup>FR</sup>/Pinsir<sup>LG</sup>), then find the Pokémon’s IVs using an IV calculator (any is fine, as long as it is for generations 3, 4, or 5).

<table markdown="block">
<thead>
<tr>
<th scope="col"></th>
<th scope="col">Pros</th>
<th scope="col">Cons</th>
</tr>
</thead>
<tbody markdown="block">
<tr markdown="block">
<th scope="row">Abra</th>
<td markdown="block">

*   Cheap
*   Has two abilities

</td>
<td markdown="block">

*   Comes at a low level
*   75% ♂ 25% ♀ gender ratio

</td>
</tr>
<tr markdown="block">
<th scope="row">Scyther<sup>FR</sup>/Pinsir<sup>LG</sup></th>
<td markdown="block">

*   Comes at a higher level
*   50% ♂ 50% ♀ gender ratio

</td>
<td markdown="block">

*   Costs many coins
*   Has one ability

</td>
</tr>
</tbody>
</table>

Once you have the IVs, you will be using a tool (we call this **IVs to PID**) to try find the Pokémon’s personality value from the IVs. A web tool for this task is available at this link: <https://it-is-final.github.io/ivs-to-pid/>.

With this tool, set the parameters as shown below:

<dl markdown="block">
<dt>HP, Attack, Defense, Sp.Attack, Sp.Defense, Speed</dt>
<dd markdown="block">

**Input** your Pokémon’s corresponding **IV**.

</dd>
<dt>Nature</dt>
<dd markdown="block">

**Select** your Pokémon’s **nature**.

</dd>
<dt>Ability</dt>
<dd markdown="block">

If the Pokémon has two distinct abilities, then **select** **0** for the first ability, or **1** for the second ability. You can quickly find out the ability number using a website like <https://pokemondb.net>. Otherwise leave this blank.

</dd>
<dt>Gender</dt>
<dd markdown="block">

**Select** your Pokémon’s **gender**.

</dd>
<dt>Gender ratio</dt>
<dd markdown="block">

**Select** your Pokémon’s **gender ratio**. Once again, you can use a website to find this information.

</dd>
<dt>TID</dt>
<dd markdown="block">

You can safely ignore this, it has no bearing on this process.

</dd>
</dl>

Once you have entered these parameters, click <kbd>Find</kbd>. Results should have populated the table in the tool, ignore all results not labelled **Method 1** (maybe include **Method 4** if you are playing on a **really** old emulator), these are the potential PIDs that this prize Pokémon could have.

## Species word finder

Next you will be using a tool (we call it the **Species Word Finder**) to both determine if the Pokémon is suitable for use as a donor Pokémon and find various important variables for this tutorial. The tool is provided at <https://pomeg-letterbombers.github.io/ace-setup-tools/species-word-finder/>. This tool takes the Pokémon’s personality value (PID), its original trainer’s ID number (TID), the game version as well as a few optional parameters that widens the range of mail words are searched.

Below is an explanation of the **Species word settings**:

<dl markdown="block">
<dt>Species word settings</dt>
<dd markdown="block">

By default (i.e. no checkboxes under this group are checked), the searcher will exclude any unlockable words from the search. These checkboxes allows the tool to also search through the certain unlockable words.

*   **Use unlockable words** will allow the **species word** to also be a word that is unlockable before entering the Hall of Fame.
*   **Use post-Elite Four words** will allow the **species word** to be also be a word that is unlockable after entering the Hall of Fame.

</dd>
</dl>

Below is an explanation for each item in the **results area**:

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

Enter the Pokémon’s PID (if the IVs to PID tool returned multiple, then select one) and its TID, select the game you are using, then click <kbd>Find</kbd>.

If you see results in the table, that means the Pokémon is suitable for use as a donor Pokémon. Take note of the **encryption key**, and **adjustment type**, as well as the **entrypoint**, **species index**, and **word** of one of the table entries (if there are multiple, you can use the [Checksum Adjustment Calculator](https://pomeg-letterbombers.github.io/ace-setup-tools/adjustment-calc/) to check each species, then select the one that requires the least amount of effort to adjust, make sure that **Search easy chat words** is checked).

If you see a **None** adjustment type, and/or no results in the table, that means the Pokémon is not suitable for use as a donor Pokémon. If the IVs to PID tool returned multiple PIDs, you may try the other options and check if they show indicators that the Pokémon **is** suitable as a donor Pokémon. Otherwise you must acquire a different Pokémon and continue checking, until you have a Pokémon that is seen as a suitable donor Pokémon by the tool.

[Back to main tutorial](jpn-ace.md#adjusting-the-donor-pokémon){ .md-button .primary }
