## Overview

In this tutorial, you will be setting up arbitrary code execution in Japanese FireRed or LeafGreen through the PC shift/swap action in the Pokémon Storage System.
Through the mail glitch, you will transform a donor Pokémon into a glitch Pokémon that will then be used to generate glitch species 0xFFC9 which is the standard ACE species used in Japanese FireRed and LeafGreen.

## Requirements

*   Your save has access to the mail glitch

## Instructions

### Getting the donor Pokémon

You will need a donor Pokémon with a specific personality value (PID) that will be corrupted into a glitch Pokémon for this tutorial.

### Species word finder

This tool will take care of the math needed to figure out a personality value’s compatibility with this method, as well as finding the needed species word if there are any.

<div>
    <!--
        © 2025 final. This webtool is licensed under the MIT license.
        See `LICENSE-CODE` for more information.
        Note that the rest of the article is still covered under the
        normal license (see `LICENSE`).
    -->
    <form class="web-tool-form" id="word-search-form">
        <fieldset class="radio-set">
            <legend>Game version</legend>
            <input id="firered-radio" name="game-version" value="firered" type="radio" required>
            <label for="firered-radio">FireRed</label><br />
            <input id="leafgreen-radio" name="game-version" value="leafgreen" type="radio" required>
            <label for="leafgreen-radio">LeafGreen</label>
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
        <button type="submit" class="md-button wide-input" id="calculate-button">Calculate</button>
    </form>
    <output class="wide-input">
        <dl>
            <dt>PID substructure order</dt>
            <dd id="pid-substructure-order"></dd>
            <dt>Encryption key</dt>
            <dd id="encryption-key"></dd>
            <dt>Corruption type</dt>
            <dd id="corruption-type"></dd>
        </dl>
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
    <script src="../../../assets/scripts/jp-wordsearch.js"></script>
</div>
