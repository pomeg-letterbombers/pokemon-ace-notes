---
title: "Emerald FAQ"
---

# Emerald FAQ

## I do not have a clean DOTS to EV train

The in-game trade SEASOR works the same as DOTS
for the purpose of obtaining glitch species 0x0611.
You can obtain it from Pacifidlog Town.

If you already used the SEASOR trade
and you have no clean copies,
you can also acquire a Pokémon
that has a corruption type 6, 7, or 8.
[This YouTube video by Sleipnir17](https://www.youtube.com/watch?v=9ZeP9Np6zeU)
explains this method more clearly.
Keep in mind that if you choose to do this route,
you will need to make sure that
the Pokémon you are using is compatible with
an “unmarked Caterpie” initiator (like PLUSES).

Otherwise you can just trade a clean DOTS from a different save file.

## I do not have a clean PLUSES

If you have a clean DOTS,
then you can follow these instructions to produce a special Pokémon
that functions the same as PLUSES
for the Glitzer Popping set up.

1.  Clone it if it is your last copy.
2.  **Use** **one** Carbos on the DOTS.
3.  **Evolve** DOTS to a Shiftry.

This DOTS can now be used as a substitute for PLUSES.

As a last resort,
you can also try to do the corruption without any PLUSES,
you just need one copy of DOTS (or SEASOR)
in the 24th slot of Box 2
and nothing in all of the other slots.
The success rate of this method is a lot lower
than the usual Glitzer Popping set up
used in most ACE guides
but it will eventually get you the 0x0611 egg.

## My trainer card stats look corrupted

This is a known side effect of hatching glitch species 0x0611
(the initial glitch Pokémon that is hatched from an egg for ACE)
that is caused by the game attempting
to mark glitch species as “caught” in the Pokédex.
For this particular species,
the data the game modifies
to determine
if this species is “owned”
also happens to be used for encrypting the save,
thus causing the corruption.

This corruption has a 50% chance of occurring,
however it also has a 50% chance of fixing itself
with each subsequent egg hatch.
Thus you can simply hatch another 0x0611 to undo the corruption.
You can save before hatching 0x0611
and then reset if the corruption remains.

A more reliable way
of avoiding the corruption
is to simply not use species 0x0611
for executing ACE codes.
Instead you can use the many number of Emerald ACE guides such as
[this one](https://gist.github.com/claydolwithexplosion/017f1784deebcd118b61d3ad917edb3c)
or [this one](https://e-sh4rk.github.io/ACE3/)
that will set you up with a stable species
that does not rely on the egg hatch mechanic
(avoiding the issue
of “registering” 0x0611 in the Pokédex).
Though if you already have the corruption
prior to setting up stable ACE
and none of the 0x0611 executions have fixed up the corruption,
then try the following code with your new stable ACE species.

For console or new emulators:

```
Box 1: W ? U n m B . o [W?UnmB.o]
Box 2: A A A Y … Q n   [AAAY…Qn]
Box 3: A A , … U m     [AA,…Um]
Box 4: A C P f m       [ACPfm]
Box 5: T Q B F C P P m [TQBFCPPm]
Box 6: R j o D Y J m ? [RjoDYJm?]
Box 7: B n             [Bn]
```

For old emulators:

```
Box 1: W ? U n m B . o [W?UnmB.o]
Box 2: A A A Y … Q n   [AAAY…Qn]
Box 3: A A / … U m     [AA/…Um]
Box 4: A … Q f m       [A…Qfm]
Box 5: T Q B F … Q P m [TQBF…QPm]
Box 6: R j o D Y J m ? [RjoDYJm?]
Box 7: B n             [Bn]
```

<details class="admonition note" markdown="block">

<summary class="admonition-title">How exactly does the corruption occur?</summary>

The savefile has two arrays of flags
that are used for keeping track of Pokémon species for the Pokédex.
One tracks whether a Pokémon species has been owned by the player before,
while the other tracks whether a Pokémon has been seen by the player before.

The arrays are indexed using a Pokémon’s national Pokédex number
and the number of flags allocated to each array
is the number of valid Pokémon species[^2] in the game.
This system works well for valid Pokémon species,
but works less great for invalid Pokémon species.

On the surface,
you might think that glitch species 0x0611
has the Pokédex number of 3021
or some other number nearby.
However the game actually pulls its Pokédex number
from some other place in the game data
which is indexed using the Pokémon’s internal index number.
From there it gets the Pokédex number of 33845
which is a large value that would place the corresponding flags
for the species in a place
far outside the bounds
from the either of the Pokédex arrays.

In this case the owned flags
for species 33845 would be located on bit 20
of the save’s encryption key
which is used to encrypt the bag, money, miscellaneous data on the trainer card etc.
The encryption key also changes regularly,
and on some encryption keys,
the game sees that species 0x0351 has been owned by the player before
and leaves the flag as is,
causing no corruption to occur (or leave the corruption as is).
On saves with the corruption already,
the changing encryption key can also unset the owned flag
and on the next egg hatch,
the game thinks that
the player has never owned species 33845
and sets the owned flags for it again,
effectively undoing the corruption.

This issue affects all glitch species with
a Pokédex number greater than 412,
and occurs on in these cases (not a complete list of cases):

*   Seeing them in a battle
*   Catching them in a wild battle
*   Hatching an egg containing the glitch species
*   Evolving a Pokémon into one of these glitch species

[^2]:
    Technically,
    it is slightly more than needed
    due to the constant that is used
    for calculating the array size accounting
    for what were the Unown forms
    in their old positions within the internal species list.
    [Source](https://github.com/pret/pokeemerald/blob/c5bbaeab5d2469a12dd323021328f08c0d45f98b/include/global.h#L145)

</details>

## Acknowledgements

*   Adrichu00 and final for finding out
    the cause of the trainer card corruption.
*   claydolwithexplosion (Mettrich) created the remedy code
    for the 0x0611 trainer card corruption.
