---
title: "Non-Japanese ACE Setup: MIMIEN Route"
---
In this route, you will be setting up arbitrary code execution in non-Japanese FireRed or LeafGreen through the PC shift/swap action in the Pokémon Storage System. Through the mail glitch, you will transform MIMIEN the trade Mr. Mime into glitch species 0x0351 which is the standard ACE species used in non-Japanese FireRed and LeafGreen.

## Prequisites

*   Your save has the mail glitch active, and you know how to use it.
    +   If not, please read [this article](../mail-glitch.md) to learn how to activate it.
*   Your save either has the MIMIEN trade available or has the MIMIEN trade Pokémon, and you know its EVs.
    +   MIMIEN cannot be used for this method if its HP EVs is greater than 81, and its Attack EVs is greater than 3.
    +   Its speed EVs divided by 32 (rounded down) mod 2 cannot be equal to 1.

## Procedure

EV train MIMIEN so it has:

*   **81 HP** EVs
    +   This can be provided by Caterpie, which can be found in the Viridian Forest.
*   **3 Attack** EVs
    +   This can be provided by defeating **1** Doduo, which can be found on Route 16.
    +   This can also be provided by defeating **1** Mankey, which can be found on Route 22.

After giving it these EVs, place it back into Box 3, Slot 1.

Activate the mail glitch, then set the second word of the glitched mail to the one of the following:

<table>
    <tbody>
        <tr>
            <th scope="row">English</th>
            <td>WANDERING</td>
        </tr>
        <tr>
            <th scope="row">French</th>
            <td>NOMADE</td>
        </tr>
        <tr>
            <th scope="row">Italian</th>
            <td>CRUDELE</td>
        </tr>
        <tr>
            <th scope="row">German</th>
            <td>LATSCH</td>
        </tr>
        <tr>
            <th scope="row">Spanish</th>
            <td>RIDÍCULO</td>
        </tr>
    </tbody>
</table>

**Confirm** the message.

After confirming the message, check the PC, a glitch species should appear in Box 3, Slot 1. This should be glitch species 0x0351. This is your ACE Pokémon. It should have the following characteristics:

*   Has a name similar to <samp>ËÁÈîÂ Î ËÁ</samp>.
*   Male
*   Level 100

If you see this, that means you have successfully set up ACE! Continue reading to learn how to trigger ACE with this Pokémon.

## Appendix

### How to trigger ACE

<div class="admonition note" markdown="block">
<p class="admonition-title">Note</p>

Before triggering any kind of ACE, make sure that:

*   Done all prerequisite steps for that particular code (e.g. created specific bootstraps, in correct location, etc.)
*   You have changed the box names to the ones for your code. Make sure that you have entered these codes correctly!
*   The entrypoint (Box 13, Slot 7) and all spaces after it are **empty**.
    +   If the Pokémon occupying these spaces are bootstrap Pokémon (Pokémon containing special data for various ACE setups to use), they should be fine occupying these spaces as long as they are for the form of ACE you are using (the covered form in this tutorial is **grab/swap** ACE).

</div>

To trigger ACE with this Pokémon, in the PC’s **Move Pokémon** mode, grab any Pokémon (except for the glitch Pokémon), and make sure the cursor is **orange** (press <kbd>SELECT</kbd> if it is not). Then swap this Pokémon with the glitch Pokémon by hovering it over the glitch Pokémon then pressing <kbd>A</kbd>. This should move the glitch Pokémon into the cursor, press <kbd>A</kbd> again and the other Pokémon should come back into the cursor. Place this Pokémon anywhere afterwards.

![Swapping two Pokémon in the PC](../../../assets/images/frlg/getting-started/non-jpn-ace/Using0351.png)

### Checking if everything worked

Make sure that Box 10, Slot 19 is **empty**, then set your box names to the ones shown below.

```
Box  1: 4 C U n n R … o	[4CUnnR…o]
Box  2: P R o / F w m  	[PRo/Fwm]    (change '/' to 'B' for inaccurate emulators)
Box  3: A A V H . o    	[AAVH.o]
Box  4: A … H R n      	[A…HRn]
Box  5: / F Q m D F Q m	[/FQmDFQm]
Box  6:	_ F o H I . o r	[ FoHI.or]
Box  7:	B n            	[Bn]
Box  8+: (anything)
```

Then trigger ACE. Then enter the PC, and view Box 10, Slot 19, a shiny, level 0, female Bulbasaur should have appeared. That means the ACE is working properly. You can safely delete this Bulbasuar after doing this code.

## Credits

*   merrp for originally creating this route.
