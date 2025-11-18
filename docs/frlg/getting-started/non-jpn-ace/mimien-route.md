---
title: "Non-Japanese ACE Setup: MIMIEN Route"
---
In this route, you will be setting up arbitrary code execution in non-Japanese FireRed or LeafGreen through the PC shift/swap action in the Pokémon Storage System. Through the mail glitch, you will transform MIMIEN the trade Mr. Mime into glitch species 0x0351 which is the standard ACE species used in non-Japanese FireRed and LeafGreen.

## Prequisites

*   Your save has the mail glitch active, and you know how to use it.
    +   If not, please read [this article](../mail-glitch.md) to learn how to activate it.
*   Your save either has the MIMIEN trade available or has the MIMIEN trade Pokémon, and you know its EVs.
    +   MIMIEN cannot be used for this method if its HP EVs is greater than 81, and its Attack EVs is greater than 3.
    +   Its Speed EVs should be within the range of:
        -   0–31
        -   64–95
        -   128–159
        -   192–223
    +   These requirements should generally be enough for this route to work but if you want to know the full list of conditions for MIMIEN, read the [MIMIEN corruption parity rules](#mimien-corruption-parity-rules) section.
    

## Procedure

EV train MIMIEN so it has:

*   **81 HP** EVs
    +   You can give MIMIEN HP Ups, which can be purchased or cloned. They provide **10** HP EVs each.
    +   This can be provided by Caterpie, which can be found in the Viridian Forest. They yield **1** HP EV each.
*   **3 Attack** EVs
    +   This can be provided by defeating Doduo, which can be found on Route 16. They yield **1** Attack EV each.
    +   This can also be provided by defeating Mankey, which can be found on Route 22. They yield **1** Attack EV each.

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

Before the glitched mail, we make sure that MIMIEN has 81 HP EVs and 3 Attack EVs before we place it in Box 3, Slot 1. This is because the glitched mail will then modify the PID so that the EVs substructure is read as the Growth substructure. With this, the 81 HP EVs and the 3 Attack EVs are combined (they are combined with this calculation: <var>hpEV</var> + <var>attackEV</var> × 256) to species index 0x0351, which corresponds to glitch species 0x0351.[^2] However unlike the other routes involving trade Pokémon (NINO/NINA) this glitch mail also modifies the encryption key[^1] of MIMIEN, specifically adding 0x20000000 to its encryption key. This is because the glitch mail only modifies the PID high of MIMIEN (setting it to 0x2000) but **not** the SID like most other methods. When modifying the encryption key like this, a bunch of [parity rules](#mimien-corruption-parity-rules) must be considered in order to ensure success in corrupting MIMIEN, such as the Speed EVs being within (or without) certain ranges.

Below shows what is happening to the PID, TID, SID, encryption key, as well as the substructure order (shown in the parentheses after the corresponding PID) during the process of turning MIMIEN into glitch species 0x0351.

Personality value (PID)

:   0x00009CAE (AGEM) → 0x20009CAE (EAGM)

Trainer ID (TID)

:   1985 (0x7C1) → 1985 (0x7C1)

Secret ID (SID)

:   0 → 0

Encryption key

:   0x00009B6F → 0x20009B6F

[^1]: The encryption key is formed by this calculation: <var>PID</var> &oplus; (<var>TID</var> + <var>SID</var> &times; 65536)
[^2]: You can read more at the provided link (courtesy of Bulbapedia) on how the data substructures are arranged and what is stored in each one. <https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_data_substructures_(Generation_III)>

#### MIMIEN corruption parity rules

This is a list of rules that determine whether the MIMIEN corruption (or any other corruption that adds 0x20000000 to the encryption key) will be successful. The note at the bottom will tell you how to apply these rules to determine if a corruption will be successful.

All ranges listed here include both the start number and the end number.

*   Index number of held item is within the range of:
    +   0x2000-0x3FFF
    +   0x6000-0x7FFF
    +   0xA000-0xBFFF
    +   0xE000-0xFFFF
*   Experience is within the range of:
    +   536870912–1073741823 (0x20000000–0x3FFFFFFF)
    +   1610612736–2147483647 (0x60000000–0x7FFFFFFF)
    +   2684354560–3221225471 (0xA0000000–0xBFFFFFFF)
    +   3758096384–4294967295 (0xE0000000–0xFFFFFFFF)
*   Unknown in Growth substructure value is within the range of:
    +   0x2000–0x3FFF
    +   0x6000–0x7FFF
    +   0xA000–0xBFFF
    +   0xE000–0xFFFF
*   Index of second attack is within the range of:
    +   0x2000–0x3FFF
    +   0x6000–0x7FFF
    +   0xA000–0xBFFF
    +   0xE000–0xFFFF
*   Index of fourth attack is within the range of:
    +   0x2000–0x3FFF
    +   0x6000–0x7FFF
    +   0xA000–0xBFFF
    +   0xE000–0xFFFF
*   PPs of fourth move is within the range of:
    +   32–63 (0x20–0x3F)
    +   96–127 (0x60–0x7F)
    +   160–191 (0xA0–0xBF)
    +   224–255 (0xE0–0xFF)
*   Speed EVs is within the range of:
    +   32–63 (0x20–0x3F)
    +   96–127 (0x60–0x7F)
    +   160–191 (0xA0–0xBF)
    +   224–255 (0xE0–0xFF)
*   Beauty is within the range of:
    +   32–63 (0x20–0x3F)
    +   96–127 (0x60–0x7F)
    +   160–191 (0xA0–0xBF)
    +   224–255 (0xE0–0xFF)
*   Feel is within the range of:
    +   32–63 (0x20–0x3F)
    +   96–127 (0x60–0x7F)
    +   160–191 (0xA0–0xBF)
    +   224–255 (0xE0–0xFF)
*   Caught in:
    +   Poké Ball (4)
    +   Safari Ball (5)
    +   Net Ball (6)
    +   Dive Ball (7)
    +   Premier Ball (12)
    +   Ball 13
    +   Ball 14
    +   Ball 15
*   Special Defense IVs is within the range of 16–31
*   Has impossible event ribbon (bit 27 in Ribbons and Obedience)

The corruption will succeed if **exactly** 2, 6, or 10 of these rules are true for the Pokémon you're going to corrupt.

## Credits

*   merrp for originally creating this route.
*   Shao for helping with making the list of parity rules useful.
