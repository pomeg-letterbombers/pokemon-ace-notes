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

- An invalid attack animation (commonly referred to as move ACE or attack ACE) with a callback within `gPokemonStorage`.
- A buffer overflow from the name of an invalid species (commonly referred to as a glitch species) that overwrites the pointer to the `monPlaceChangeFunc` function in `gStorage`, which is usually executed by performing a swap between this species and another species.
    - When using this ACE vulnerability, the invalid species chosen overwrites this pointer to an address that is within `gPokemonStorage`

In both cases, these happen to point to an area of memory that can be easily modified by player, which are the boxes in the Pokémon storage system (PC).[^1]
Where in the boxes usually varies in FR/LG due to both the entrypoint (address) that the program counter (the pc register) jumps to, and the address space layout randomization (ASLR) that the game uses to deter cheating[^2].
When the program counter jumps into the boxes, all of the data written there ends up being interpreted as ARM[^3] machine code, which is the architecture used by the ARM7TMDI processor of the Game Boy Advance (GBA).
As such ACE codes in FireRed/LeafGreen are just carefully written ARM/Thumb machine code[^4].

Since December 2023 (January 2024 for Japanese versions), grab/swap ACE has been the mainstream method of accessing ACE on FireRed/LeafGreen with move/attack ACE seen as the outdated method.
This is because grab/swap ACE is much more accessible, only requiring the copy of FireRed/LeafGreen, whereas move/attack ACE requires the use of a second game (usually Pokémon Emerald, but can also be a second copy of FireRed/LeafGreen) to be able to access this form of ACE[^5].
As such, most of the FireRed/LeafGreen tutorials on this website will be operating under the assumption that you have access to grab/swap ACE, rather than move/attack ACE.

[^1]: As manipulating Pokémon data to contain payloads is usually difficult, often a nopslide into the box names (located after the boxes) is used, where they contains the actual payload that will be run by the GBA.
[^2]: The ASLR is really basic, it just moves around a large block of memory from 0 to 124 bytes from their base address.
[^3]: The specific version of the ARM architecture relevant here is ARMv4T.
[^4]:
    Japanese versions have an expansive character set, having writable characters for nearly all of the 8-bit values.
    As such you will almost always see codes being written in Thumb rather than ARM in these versions of FR/LG.
    This is because ARM instructions are wider (32-bit) compared to Thumb (16-bit) and within the limited space of the box names, more Thumb commmands can be fitted in compared to ARM.
    The way the GBA processor determines whether to branch into an address in ARM or Thumb mode is by checking whether bit 0 of the address is set.
    If it is not set, it will branch into there in ARM mode, and interpret data there as ARM machine code.
    If it is set, then it will branch into there in Thumb mode, and interpret data there as Thumb 
[^5]:
    If you want to use move/attack ACE, Sleipnir17’s tutorials are the main resources for learning how to access and use this method:
    
    - [Video tutorial](https://www.youtube.com/watch?v=kwOIOzczs8w)
    - [FireRed/LeafGreen written instructions](https://pastebin.com/BpGZgxnm)

## How to start using ACE?

To get started on setting up access to grab/swap ACE, click on the button below to get to the ACE set up tutorial:

[Start here](ace-set-up.md){ .md-button .md-button--primary }

Below are some other useful resources in regards to setting up FireRed/LeafGreen ACE.

- [merrp’s grap/swap ACE Pastebin](https://pastebin.com/pDXf5rGD)
    - While the Pastebin is useful for obtaining some information on Japanese ACE species, the instructions are inaccurate for Japanese FireRed/LeafGreen.
- [Detelony’s video tutorial (FireRed/LeafGreen)](https://www.youtube.com/watch?v=i9d4AyI2l1A)
- [Final’s written tutorial (FireRed/LeafGreen)](https://github.com/it-is-final/jpn-frlg-helper/blob/main/docs/ace-setup.md)
- [Final’s alternate written tutorial (LeafGreen)](https://github.com/it-is-final/PokeG3ACE/blob/main/ace_notes/JP-LeafGreen-AltMethod/JP-LeafGreen-AltMethod.md)
    - This tutorial uses a trade Pokémon to facilitate access to ACE rather than having to use one of your own Pokémon
