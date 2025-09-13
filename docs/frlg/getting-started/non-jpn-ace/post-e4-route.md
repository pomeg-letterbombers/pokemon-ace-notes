---
title: "Non-Japanese ACE Setup: Post-Elite Four Route"
---
In this route, you will be setting up arbitrary code execution in non-Japanese FireRed or LeafGreen through the PC shift/swap action in the Pokémon Storage System. Through the mail glitch, you will transform an empty slot in the PC into glitch species 0x0351 which is the standard ACE species used in non-Japanese FireRed and LeafGreen.

## Prequisites

*   Your save has the mail glitch active, and you know how to use it.
    +   If not, please read [this article](../mail-glitch.md) to learn how to activate it.
*   You have seen Magikarp before on this save.

## Procedure

Make sure that Box 3, Slot 1 is **empty** before you do this.

Then activate the mail glitch, you should see the following screen

<figure markdown="span">

![Image](../../../assets/images/frlg/getting-started/mail-glitch/mail-glitch-example.png)
<figcaption markdown="span">

The glitched mail on English FireRed and LeafGreen.

</figcaption>

</figure>

**Set** the message of the glitched mail to be exactly the following.

<div class="admonition note" markdown="block">
<p class="admonition-title">Note</p>

If you are doing this route after unlocking the National Mode of the Pokédex, make sure that you enter the Pokémon words from the **POKéMON group**, not POKéMON2 group, or A-Z mode.

</div>

<table>
    <tbody>
        <tr>
            <th scope="row">English</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>BULK UP</td>
                            <td>CAPABLE</td>
                        </tr>
                        <tr>
                            <td>KARATE CHOP</td>
                            <td>MAGIKARP</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <th scope="row">French</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>GONFLETTE</td>
                            <td>CAPABLE</td>
                        </tr>
                        <tr>
                            <td>POING-KARATE</td>
                            <td>MAGIKARPE</td>
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
                            <td>GRANFISICO</td>
                            <td>USATE</td>
                        </tr>
                        <tr>
                            <td>COLPOKARATE</td>
                            <td>MAGIKARP</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <th scope="row">German</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>PROTZER</td>
                            <td>FÄHIG</td>
                        </tr>
                        <tr>
                            <td>KARATESCHLAG</td>
                            <td>KARPADOR</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <th scope="row">Spanish</th>
            <td>
                <table>
                    <tbody>
                        <tr>
                            <td>CORPULENCIA</td>
                            <td>SIENTES</td>
                        </tr>
                        <tr>
                            <td>GOLPE KARATE</td>
                            <td>MAGIKARP</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

**Confirm** the message.

After confirming the message, check the PC, a glitch species should appear in Box 3, Slot 1. This should be glitch species 0x0351. This is your ACE Pokémon. It should have the following characteristics:

*   Has a name similar to <samp>ËÁÈîÂ Î ËÁ</samp>.
*   Male
*   Level 100

If you see this, that means you have successfully set up ACE! Continue reading to learn how to trigger ACE with this Pokémon.

![The Pokémon PC interface with the cursor hovering over a question mark. The black and white circled question mark has an unintelligible name, is male, and level 100.](../../../assets/images/frlg/getting-started/non-jpn-ace/0351-in-box.png)

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

Make sure you are in the PC’s **Move Pokémon** mode.

Then switch the selection mode to **Relocate Mode** by pressing <kbd>SELECT</kbd>, the cursor should have changed to an orange colour indicating that the current mode is **Relocate Mode**.

In Relocate mode, move the cursor over to any Pokémon then grab by pressing <kbd>A</kbd>.

Move the cursor over to the glitch Pokémon if any other Pokémon was initially grabbed, or any other Pokémon if the glitch Pokémon was initially grabbed.

Then swap these two Pokémon by pressing <kbd>A</kbd>. Then swap again.

You can place the Pokémon anywhere else afterwards.

An image below has been provided to illustrate how it should look.

![Swapping two Pokémon in the PC](../../../assets/images/frlg/getting-started/non-jpn-ace/Using0351.png)

### Checking if everything worked

Make sure that Box 9, Slot 30 is **empty**, then set your box names to the ones shown below.

```
Box  1:	C C U n n R E o	[CCUnnREo]
Box  2:	P R o / G w m  	[PRo/Gwm]   (change '/' to 'B' for inaccurate emulators)
Box  3:	A A T S , m    	[AATS,m]
Box  4:	A / F Q m      	[A/FQm]
Box  5:	D F Q m        	[DFQm]
Box  6:	_ V o H I C o r	[ VoHICor]
Box  7:	B n            	[Bn]
Box 8+:	(anything)
```

Then trigger ACE. Then enter the PC, and look at Box 9, a shiny, level 0, female Bulbasaur should have appeared in slot 30. That means the ACE is working properly. You can safely delete this Bulbasaur after doing this code.

### Technical details

First, with the glitched mail, the encryption key[^1] for the “Pokémon” in the empty slot is changed from 0 to 0x3CAF0351, which will cause the empty slot’s data to be interpreted as a glitch Pokémon instead. The reason why this particular corruption is not interpreted as a bad egg is because the data in the empty slot (which is now 0x0351 × 12 + 0x3CAF × 12), adds up to a 16-bit value of 0 (this game’s code uses wrapping unsigned 16-bit arithmetic for the checksum), which is the same as the initial checksum of 0, thus its seen as valid Pokémon data.

After entering the glitched mail, we are left with glitch species 0x0351 with no nickname.

Below shows what is happening to the PID, TID, SID, encryption key, as well as the substructure order (shown in the parentheses after the corresponding PID) during the process of turning an empty slot into glitch species 0x0351.

Personality value

:   0x00000000 (GAEM) → 0x162E2753 (EGMA)

Trainer ID (TID)

:   0 (0x0000) → 512 (0x2402)

Secret ID (SID)

:   0 → 10881 (0x2A81)

Encryption key

:   0x00000000 → 0x3CAF0351

[^1]: The encryption key is formed by this calculation: <var>PID</var> &oplus; (<var>TID</var> + <var>SID</var> &times; 65536)

## Credits

*   Papa Jefé for originally discovering this route
*   gifvex for discovering the ability to corrupt empty slots into glitch Pokémon with the mail glitch.
