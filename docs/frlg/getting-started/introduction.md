Welcome to the world of Pokémon FireRed/LeafGreen arbitrary code execution!

## What is arbitrary code execution?

<dfn>Arbitrary code execution</dfn> (shortened to ACE) is the ability to make the console to run custom code. This is done by abusing oversights that allow for moving the program counter into areas of memory that we can easily control. This allows us to make the console to do anything, from using it to do stuff that a GameShark or Action Replay would have done, all the way to creating [demos](https://www.youtube.com/watch?v=Vjm8P8utT5g) of the hardware.

Pokémon FireRed/LeafGreen have two glitches that are commonly used to enable ACE:

*   An invalid attack animation (commonly referred to as move ACE or attack ACE) with a callback within `gPokemonStorage`.
*   A buffer overflow from the name of an invalid species (commonly referred to as a glitch species) that overwrites the pointer to the `monPlaceChangeFunc` function in `gStorage`, which is usually executed by performing a swap between this species and another species.
    +   When using this ACE vulnerability, the invalid species chosen overwrites this pointer to an address that is within `gPokemonStorage`

In both cases, these happen to point to an area of memory that can be easily modified by player, which are the boxes in the Pokémon storage system (PC).[^1]
Where in the boxes usually varies in FR/LG due to both the entrypoint (address) that the program counter (the pc register) jumps to, and the address space layout randomization (ASLR) that the game uses to deter cheating[^2].
When the program counter jumps into the boxes, all of the data written there ends up being interpreted as ARM[^3] machine code, which is the architecture used by the ARM7TMDI processor of the Game Boy Advance (GBA).
As such ACE codes in FireRed/LeafGreen are just carefully written ARM/Thumb machine code[^4].

Since December 2023, grab/swap ACE has been the mainstream method of accessing ACE on FireRed/LeafGreen with move/attack ACE seen as the outdated method.
This is because grab/swap ACE is much more accessible, only requiring the copy of FireRed/LeafGreen, whereas move/attack ACE requires the use of a second game (usually Pokémon Emerald, but can also be a second copy of FireRed/LeafGreen) to be able to access this form of ACE[^5].
As such, most of the FireRed/LeafGreen tutorials on this website will be operating under the assumption that you have access to grab/swap ACE, rather than move/attack ACE.

[^1]: As manipulating Pokémon data to contain payloads is usually difficult, often a nopslide into the box names (located after the boxes) is used, where they contains the actual payload that will be run by the GBA.
[^2]: The ASLR is really basic, it just moves around a large block of memory from 0 to 124 bytes from their base address.
[^3]: The specific version of the ARM architecture relevant here is ARMv4T.
[^4]:
    On non-Japanese versions of FR/LG, due to character set limitations, Thumb is very difficult to use.
    As such you will almost always see codes being written in ARM rather than Thumb in these versions of FR/LG.
[^5]:
    If you want to use move/attack ACE, Sleipnir17’s tutorials are the main resources for learning how to access and use this method:
    
    - [Video tutorial](https://www.youtube.com/watch?v=kwOIOzczs8w)
    - [Non-Japanese FireRed/LeafGreen written instructions](https://pastebin.com/UFspsi9N)
    - [Japanese FireRed/LeafGreen written instructions](https://pastebin.com/BpGZgxnm)

## How to start using ACE?

At the moment, all grab/swap ACE setups will require prior knowledge of, and the setting up of the [mail glitch](mail-glitch.md). After that, click on one of the links below depending on whether you are doing this on a non-Japanese FireRed and LeafGreen or a Japanese FireRed and LeafGreen, and follow further instructions from there.

*   [Non-Japanese ACE setups](non-jpn-ace/index.md)
*   [Japanese ACE setups](jpn-ace/index.md)
