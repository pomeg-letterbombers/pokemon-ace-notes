**Welcome to the world of Pokémon FireRed/LeafGreen arbitrary code execution!**

## What is arbitrary code execution?

Arbitrary code execution (shortened to ACE) is the ability to run any commands or code on a target machine or process.
An arbitrary code execution vulnerability is a flaw in the software or hardware allowing for arbitrary code execution.

In the context of computer security, ACE is considered to be the ultimate method of attack that an attacker can get ahold of, and massively undermines the security of a computer system.
This is considered to be very dangerous, and thus is often patched out of modern computer systems and software whenever possible.

However in the context of retro video games, it is seen as a positive enhancement to the games, allowing the players to do everything they have ever wanted and more.
For the Pokémon games in particular, ACE allows players to get around restrictions placed by Game Freak such as the one time selection of starter Pokémon, or the restrictions placed on obtaining mythical Pokémon through resetting or activating the parts of the game responsible for those.
Those even more adventurous with ACE can use it to create [impressive demos of the hardware](https://www.youtube.com/watch?v=Vjm8P8utT5g).
Within this context, ACE is a very powerful replacement of the GameShark or the Action Replay tools that comes with the advantage of not requiring any external peripherals.

Pokémon FireRed/LeafGreen have two ACE vulnerabilities that are commonly used:

- An invalid attack animation (commonly referred to as move ACE or attack ACE)[^1] with a callback within `gPokemonStorage`.
- A buffer overflow from the name of an invalid species (commonly referred to as a glitch species) that overwrites the pointer to the `monPlaceChangeFunc` function in `gStorage`, which is usually executed by performing a swap between this species and another species.
    - When using this ACE vulnerability, the invalid species chosen overwrites this pointer to an address that is within `gPokemonStorage`

In both cases, these happen to point to an area of memory that can be easily modified by player, which are the boxes in the Pokémon storage system (PC).[^2]
Where in the boxes usually varies in FR/LG due to both the entrypoint (address) that the program counter (the pc register) jumps to, and the address space layout randomization (ASLR) that the game uses to deter cheating[^3].
When the program counter jumps into the boxes, all of the data written there ends up being interpreted as ARM[^4] machine code, which is the architecture used by the ARM7TMDI processor of the Game Boy Advance (GBA).
As such ACE codes in FireRed/LeafGreen are just carefully written ARM/Thumb machine code[^5].

Since December 2023, grab/swap ACE has been the mainstream method of accessing ACE on FireRed/LeafGreen with move/attack ACE seen as the outdated method.
This is because grab/swap ACE is much more accessible, only requiring the copy of FireRed/LeafGreen, whereas move/attack ACE requires the use of a second game (usually Pokémon Emerald, but can also be a second copy of FireRed/LeafGreen) to be able to access this form of ACE.
As such, most of the FireRed/LeafGreen tutorials on this website will be operating under the assumption that you have access to grab/swap ACE, rather than move/attack ACE.

[^1]:
    Sleipnir17’s original tutorial for FR/LG ACE can be used to gain access to move/attack ACE

    - [Video tutorial](https://www.youtube.com/watch?v=kwOIOzczs8w)
    - [Non-Japanese FR/LG written instructions](https://pastebin.com/UFspsi9N)
    - [Japanese FR/LG written instructions](https://pastebin.com/BpGZgxnm)
[^2]: As manipulating Pokémon data to contain payloads is usually difficult, often a nopslide into the box names (located after the boxes) is used, where they contains the actual payload that will be run by the GBA.
[^3]: The ASLR is really basic, it just moves around a large block of memory from 0 to 124 bytes from their base address.
[^4]: The specific version of the ARM architecture relevant here is ARMv4T.
[^5]:
    On non-Japanese versions of FR/LG, due to character set limitations, Thumb is very difficult to use.
    As such you will almost always see codes being written in ARM rather than Thumb in these versions of FR/LG.

## How to start using ACE?

To get started on setting up access to grab/swap ACE, below are some resources you can use to do this:

- [Papa Jefé’s video tutorial (non-Japanese FireRed)](https://www.youtube.com/watch?v=3jkcq8e9NO4&t)
    - You do not need to watch the whole video, but the rest of the video contains examples of how ACE can be used along with extensively using mail #255 corruption (mail glitch) in unique ways.
- [Papa Jefé’s video tutorial (non-Japanese LeafGreen)](https://www.youtube.com/watch?v=8d2kd2_iVps)
- [Papa Jefé’s written tutorial (non-Japanese FireRed/LeafGreen)](https://docs.google.com/spreadsheets/d/1b0cQkzVpqpMv40desNHaAH-NbHXXdANsS9edXnhdfCk/edit?gid=1742936281#gid=1742936281)
- [merrp’s video demonstration (non-Japanese FireRed/LeafGreen)](https://www.youtube.com/watch?v=yVhK4pLC9ac)
- [merrp’s grap/swap ACE Pastebin](https://pastebin.com/pDXf5rGD)
    - While the Pastebin is useful for obtaining some information on Japanese ACE species, the instructions are inaccurate for Japanese FireRed/LeafGreen.
- [Detelony’s video tutorial (Japanese FireRed/LeafGreen)](https://www.youtube.com/watch?v=i9d4AyI2l1A)
- [Final’s written tutorial (Japanese FireRed/LeafGreen)](https://github.com/it-is-final/jpn-frlg-helper/blob/main/docs/ace-setup.md)
- [Final’s alternate written tutorial (Japanese LeafGreen)](https://github.com/it-is-final/PokeG3ACE/blob/main/ace_notes/JP-LeafGreen-AltMethod/JP-LeafGreen-AltMethod.md)
    - This tutorial uses a trade Pokémon to facilitate access to ACE rather than having to use one of your own Pokémon

After this you can check out the resources located on this website’s [home page](../../index.md) for ways to utilize ACE with premade codes or go further with the [hexadecimal writer](../complex-payloads/hex-writer.md) or [Theocatic’s scripting environment](https://gist.github.com/Theocatic/39ed337ecd590b47fad14f791cf16bb5).
