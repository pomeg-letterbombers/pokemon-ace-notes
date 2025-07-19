---
title: "Non-Japanese ACE Setup: Other Empty Slot Corruption Routes"
---
<div class="admonition warning" markdown="block">
<p class="admonition-title">Warning</p>

**These routes are only doable on English, Italian, and German language FireRed and LeafGreen.**

If you want something that works for French, and Italian before the Elite Four, then do the main [pre-Elite Four route](pre-e4-route.md). If you want something that is doable after beating the Elite Four, then do the [Post-Elite Four route](post-e4-route.md).

</div>

In these routes, you will be setting up arbitrary code execution in non-Japanese FireRed or LeafGreen through the PC shift/swap action in the Pokémon Storage System. Through the mail glitch, you will transform an empty slot in the PC into a glitch species which can trigger ACE via swapping in the PC.

## Prequisites

*   Your save has the mail glitch active, and you know how to use it.
    +   If not, please read [this article](../mail-glitch.md) to learn how to activate it.

## Instructions

**Make sure that Box 3, Slot 1 is empty before performing these instructions**

### English and Italian FireRed and LeafGreen

In this section, we will be creating glitch species 0x1453 on English versions or 0x1457 on Italian versions which can be used as a standalone ACE species.

Make sure to leave the PC on Box 3. Then activate the mail glitch. **Set** the message of the glitched mail to be the following:

<table>
    <tbody>
        <tr>
            <th scope="row">English FireRed</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>_____</td>
                            <td>???</td>
                        </tr>
                        <tr>
                            <td>GREEN</td>
                            <td>BAG</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <th scope="row">English LeafGreen</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>_____</td>
                            <td>???</td>
                        </tr>
                        <tr>
                            <td>EAT</td>
                            <td>LACKING</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <th scope="row">Italian</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>???</td>
                            <td>_____</td>
                        </tr>
                        <tr>
                            <td>PRESO</td>
                            <td>FATTI AVANTI</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

**Confirm** the message.

After confirming the message, reenter the PC in Move Pokémon mode, a glitch Pokémon should be present in Box 3, Slot 1. With the orange cursor (press <kbd>SELECT</kbd> to activate this), grab this glitch Pokémon then place it down again. Then exit the PC.

Activate the mail glitch again, then **set** the message of the glitched mail to the following:

<div class="admonition note" markdown="block">
<p class="admonition-title">Note</p>

If you are doing this route after unlocking the National Mode of the Pokédex, make sure that you select any Pokémon words from the **POKéMON group**, not the POKéMON2 group, or A-Z mode.

</div>

<table>
    <tbody>
        <tr>
            <th scope="row">English FireRed</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>TAKE</td>
                            <td>JIGGLYPUFF</td>
                        </tr>
                        <tr>
                            <td>GREEN</td>
                            <td>UH-HUH</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <th scope="row">English LeafGreen</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>UNDERSTAND</td>
                            <td>???</td>
                        </tr>
                        <tr>
                            <td>TAKE THAT</td>
                            <td>LACKING</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <th scope="row">Italian FireRed</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>DOVERE</td>
                            <td>DONNA</td>
                        </tr>
                        <tr>
                            <td>POKéDEX</td>
                            <td>FATTI AVANTI</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <th scope="row">Italian LeafGreen</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>DOVERE</td>
                            <td>FIGLIA</td>
                        </tr>
                        <tr>
                            <td>POKéDEX</td>
                            <td>FATTI AVANTI</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

**Confirm** the message.

After confirming the message, check the PC, a glitch species should appear in Box 3, Slot 1. This should be glitch species 0x1453 on English versions, or 0x1457 on Italian versions. This is your ACE Pokémon.

If you see this, that means you have successfully set up ACE! Continue reading to learn how to trigger ACE with this Pokémon.

<div class="admonition note" markdown="block">
<p class="admonition-title">Note</p>

When executing codes designed for 0x0351 with 0x1453<sup>ENG</sup> or 0x1457<sup>ITA</sup>, follow the instructions for inaccurate emulators, even on console. This is because the GBA enters the PC boxes with the program counter (`pc`/`r15`) word-aligned, when triggering ACE with these glitch Pokémon.

</div>

### German FireRed

In this section we will be creating glitch species 0xE1DE which can be used as a standalone ACE species.

Exit the PC from any box. Then activate the mail glitch. **Set** the message of the glitched mail to be the following:

<table>
    <tbody>
        <tr>
            <td>_____</td>
            <td>???</td>
        </tr>
        <tr>
            <td>GLEICH</td>
            <td>WAS</td>
        </tr>
    </tbody>
</table>

**Confirm** the message.

After confirming the message, check the PC, a glitch species should appear in Box 3, Slot 1. This should be glitch species 0xE1DE. This is your ACE Pokémon.

If you see this, that means you have successfully set up ACE! Continue reading to learn how to trigger ACE with this Pokémon.

### German LeafGreen

In this section we will be creating glitch species 0xF3CF which can not be used as a standalone ACE species. This is due to its instability regarding its really long name (which will be seen during this tutorial). As such you should set the box names to the ones for your code **now**. For casual ACE, we recommend setting the box names to the code for creating 0x0351 as shown in [Code for creating 0x0351 in Box 10, Slot 19](#code-for-creating-0x0351-in-box-10-slot-19). Also after triggering ACE with this Pokémon, it will become a bad egg afterwards. As such this section focuses more on how to trigger ACE “safely” with this glitch species.

**Make sure that Box 12, Slot 18 and all following box slots are empty.**

Exit the PC from any box but Box 3. Then activate the mail glitch. **Set** the message of the glitched mail to be the following:

<table>
    <tbody>
        <tr>
            <td>_____</td>
            <td>???</td>
        </tr>
        <tr>
            <td>HEH</td>
            <td>HOHOHO</td>
        </tr>
    </tbody>
</table>

**Confirm** the message.

Enter the PC again in Move Pokémon mode, making sure not to move the cursor over Box 3, Slot 1. Grab another Pokémon. With the orange cursor (press <kbd>SELECT</kbd> to activate this), hover over Box 3, Slot 1 then press <kbd>A</kbd> **twice** to perform a swap. Intense graphical glitches will occur, this is normal.

Replace the Pokémon in any other box slot (scrolling to another box may cause a game crash), then exit the PC by mashing <kbd>B</kbd>.

When reentering the PC, the glitch Pokémon will turn into a bad egg, this can be safely removed via group selection. To do this, change the cursor to the orange cursor (press <kbd>SELECT</kbd> to do this), then hover over the bad egg, hold <kbd>A</kbd> and move the cursor to a different slot in the box, then let go of <kbd>A</kbd>. Then replace that group by pressing <kbd>A</kbd> again. The bad egg should have disappeared in the group.

## Appendix

### How to trigger ACE

<div class="admonition note" markdown="block">
<p class="admonition-title">Note</p>

Before triggering any kind of ACE, make sure that:

*   Done all prerequisite steps for that particular code (e.g. created specific bootstraps, in correct location, etc.)
*   You have changed the box names to the ones for your code. Make sure that you have entered these codes correctly!
*   The entrypoint and all spaces after it are **empty**.
    +   If the Pokémon occupying these spaces are bootstrap Pokémon (Pokémon containing special data for various ACE setups to use), they should be fine occupying these spaces as long as they are for the form of ACE you are using (the covered form in this tutorial is **grab/swap** ACE).

</div>

To trigger ACE with these glitch Pokémon, in the PC’s **Move Pokémon** mode, grab any Pokémon (except for the glitch Pokémon), and make sure the cursor is **orange** (press <kbd>SELECT</kbd> if it is not). Then swap this Pokémon with the glitch Pokémon by hovering it over the glitch Pokémon then pressing <kbd>A</kbd>. This should move the glitch Pokémon into the cursor, press <kbd>A</kbd> again and the other Pokémon should come back into the cursor. Place this Pokémon anywhere afterwards.

![Swapping two Pokémon in the PC](../../../assets/images/frlg/getting-started/non-jpn-ace/Using0351.png)

### ACE Entrypoints

This table uses calculations that assume the maximum ASLR shift, which means that the entrypoints listed here are the earliest possible point in the boxes where the GBA can execute code from via ACE with these species. Keep the entrypoint and all box slots past it clear when executing ACE with these glitch species.

<table>
    <thead>
        <tr>
            <th scope="col">Species index</th>
            <th scope="col">Entrypoint</th>
            <th scope="col">Entrypoint address</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">0x1453</th>
            <td>Box 1, Slot 18</td>
            <td>0x02A29900</td>
        </tr>
        <tr>
            <th scope="row">0x1457</th>
            <td>Box 4, Slot 21</td>
            <td>0x0202B600</td>
        </tr>
        <tr>
            <th scope="row">0xE1DE</th>
            <td>Box 13, Slot 9</td>
            <td>0x02EF06D6</td>
        </tr>
        <tr>
            <th scope="row">0xF3CF</th>
            <td>Box 12, Slot 18</td>
            <td>0x02330032</td>
        </tr>
    </tbody>
</table>

Some of these ACE species (particularly 0x1453, and 0x1457) trigger ACE very early in the boxes so if you have many Pokémon in the boxes and you can not empty all box slots past the entrypoint, then you must create a bootstrap, as outlined below.

Make sure that Box 3, Slot 1 is empty, then activate the mail glitch. **Set** the glitched mail message to the following:

<table>
    <tbody>
        <tr>
            <th scope="row">English</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>RIGHT</td>
                            <td>OPPONENT</td>
                        </tr>
                        <tr>
                            <td>LEFT</td>
                            <td>IDOL</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <th scope="row">Italian</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>SISTEMA</td>
                            <td>UN TESORO</td>
                        </tr>
                        <tr>
                            <td>LAVORO</td>
                            <td>IDOLO</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

This should create a bad egg in Box 3, Slot 1. Move this bad egg to Box 1, Slot 20 for English or Box 4, Slot 23 for Italian. This bootstrap contains special data that will jump the program counter to somewhere in Box 14, which frees up most box spaces after the entry point as they will not be read as code by the console.

With this bootstrap, make sure to keep the two box slots before the bootstrap empty, however slots following the bootstrap should be safe for storing regular Pokémon. On English versions, make sure to keep Box 14, Slot 16 and all following spaces empty, and on Italian versions, you do not need to leave any slot in Box 14 empty.

If you decide you do not want this bootstrap anymore, then you can get rid of it via group selection. To do this, change the cursor to the orange cursor (press <kbd>SELECT</kbd> to do this), then hover over the bad egg, hold <kbd>A</kbd> and move the cursor to a different slot in the box, then let go of <kbd>A</kbd>. Then replace that group by pressing <kbd>A</kbd> again. The bad egg should have disappeared in the group.

### Code for creating 0x0351 in Box 10, Slot 19

This box name code will create glitch species 0x0351 in Box 10, Slot 19 which is the standard ACE Pokémon in non-Japanese FireRed and LeafGreen.

Make sure that Box 10, Slot 19 is **empty**, then set your box names to the ones shown below.

```
Box  1:	4 C U n n R … o	[4CUnnR…o]
Box  2:	P R o / F w m  	[PRo/Fwm]   (change '/' to 'B' for inaccurate emulators)
Box  3:	A A W U . o    	[AAWU.o]
Box  4:	A V H ? n      	[AVH?n]
Box  5:	/ F Q m D F Q m	[/FQmDFQm]
Box  6:	_ F o H I . o r	[ FoHI.or]
Box  7:	B n            	[Bn]
Box  8+: (anything)
```

Then trigger ACE. Then enter the PC, and view Box 10, Slot 19, a glitch species should have appeared in Box 10, Slot 19. This should be glitch species 0x0351. It should have the following characteristics:

*   Has a name similar to <samp>ËÁÈîÂ Î ËÁ</samp>.
*   Male
*   Level 0

If that is the case, then you have successfully obtained glitch species 0x0351.

You can dispose of the other ACE species if you wish by doing the following:

1. Place the glitch Pokémon in the party (using the orange hand).
2. Exit the PC, then go to the party menu.
3. Move the glitch Pokémon to the first party slot.
4. Go back to the PC and enter deposit mode.
5. Release the Pokémon by selecting the Pokémon then select release and confirm.

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

### Background information

The original English version of this route was devised by speedrunners to get an ACE species faster, and is largely used by speedrunners to get to the Hall of Fame faster. Instructions for other game languages on this page might not be as optimised as the English version is.

## Credits

*   gifvex and the Pokémon speedrunning community for creating the original version of this route, and discovering the ability to corrupt empty slots into glitch Pokémon with the mail glitch.
*   merrp for creating the original version of the jump bootstrap for 0x1453.
