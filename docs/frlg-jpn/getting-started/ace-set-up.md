## Overview

In this tutorial, you will be setting up arbitrary code execution in Japanese FireRed or LeafGreen through the PC shift/swap action in the Pokémon Storage System.
Through the mail glitch, you will transform a donor Pokémon into a glitch Pokémon that will then be used to generate glitch species 0xFFC9 which is the standard ACE species used in Japanese FireRed and LeafGreen.

## Requirements

*   Your save has access to the mail glitch

## Instructions

### Getting the donor Pokémon

You will need a donor Pokémon with a specific personality value (PID) that will be corrupted into a glitch Pokémon for this tutorial.

<form class="web-tool-form" id="word-search-form">
    <fieldset>
        <legend>Game version</legend>
        <div>
            <input id="firered-radio" name="game-version" value="firered" type="radio" required>
            <label for="firered-radio">FireRed</label>
        </div>
        <div>
            <input id="leafgreen-radio" name="game-version" value="leafgreen" type="radio" required>
            <label for="leafgreen-radio">LeafGreen</label>
        </div>
    </fieldset>
    <label for="pid">PID: </label>
    <input
        id="pid"
        class="md-input"
        name="pid"
        type="text"
        size="8"
        pattern="[0-9A-Fa-f]{0,8}"
        maxlength="8"
        required
    >
    <label for="tid">TID: </label>
    <input
        id="tid"
        name="tid"
        class="md-input"
        type="number"
        min="0"
        max="65535"
        required
    >
    <button type="submit" class="md-button wide-input" id="calculate-button">Calculate</button><br>
    <output class="wide-input">
        <span>
            PID substructure order:
            <span id="pid-substructure-order"></span><br>
            Encryption key:
            <span id="encryption-key"></span><br>
            Corruption type:
            <span id="corruption-type"></span><br>
        </span>
        <table>
            <thead>
                <tr>
                    <th>Species index</th>
                    <th>Entrypoint</th>
                    <th>Word index</th>
                    <th>Word group</th>
                    <th>Word</th>
                </tr>
            </thead>
            <tbody id="results-body"></tbody>
        </table>
    </output>
</form>
