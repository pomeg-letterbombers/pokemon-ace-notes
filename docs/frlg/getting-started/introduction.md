Welcome to the world of Pokémon FireRed/LeafGreen (FR/LG) arbitrary code execution!

Arbitrary code execution (ACE) is a type of exploit which allows a program to execute user-defined codes.
Usually this is really bad for security, but in the context of video games on retro hardware it is seen as a positive.
Within this context, ACE is seen as a powerful tool equal to a GameShark or Action Replay, it can be used to ease roadblocks developers felt like placing or create new content not originally part of the game.

In FireRed/LeafGreen, arbitrary code execution usually accessed either through:

- An invalid attack animation (commonly referred to as move ACE or attack ACE)[^1].
- A buffer overflow from the (long) name of an invalid species (commonly referred to as a glitch species) that overwrites the pointer for the function that facilitates swaps two box Pokémon (commonly referred to as grab ACE or swap ACE).

In both cases, these happen to point to an area of memory that can be easily modified by player, which are the boxes in the Pokémon storage system (PC).
Where in the boxes usually varies in FR/LG due to both the entrypoint (address) that the program counter (called pc or r15 in ARM/Thumb terminology) jumps to, and the address space layout randomization (ASLR) that the game uses to deter cheating[^2].
The Game Boy Advance (GBA) uses an ARM7TDMI processor which uses the ARMv4T architecture.
As such ACE codes in FR/LG are just carefully written ARM/Thumb machine code[^3]

Since December 2023, grab/swap ACE has been the mainstream method of accessing ACE on FireRed/LeafGreen with move/attack ACE seen as the outdated method.
As such, most of the FR/LG tutorials on this website will be operating under the assumption that you have access to grab/swap ACE, rather than move/attack ACE.

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

[^1]:
    Sleipnir17’s original tutorial for FR/LG ACE can be used to gain access to move/attack ACE

    - [Video tutorial](https://www.youtube.com/watch?v=kwOIOzczs8w)
    - [Non-Japanese FR/LG written instructions](https://pastebin.com/UFspsi9N)
    - [Japanese FR/LG written instructions](https://pastebin.com/BpGZgxnm)
[^2]: The ASLR is really basic, it just moves around a large block of memory from 0 to 124 bytes from their base address.
[^3]:
    On non-Japanese versions of FR/LG, due to character set limitations, Thumb is very difficult to use.
    As such you will almost always see codes being written in ARM rather than Thumb in these versions of FR/LG.
