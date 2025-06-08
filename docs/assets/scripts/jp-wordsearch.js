//! SPDX-License-Identifier: MIT
/*
 * © 2025 final.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
"use strict";
(() => {
let csvURL = "../../../assets/data/JPN_EasyChatSystem.csv";
const easyChatData = new Map([[0, {Group: "", Word: ""}]]);
fetch(csvURL)
  .then(response => response.text())
  .then(text => {
    const dArray = text.split('\n').map((x) => x.split(','));
    easyChatData.delete(0);
    for (const entry of dArray.slice(1, dArray.length - 1)) {
      easyChatData.set(parseInt(entry[0], 16), {Group: entry[1], Word: entry[2]});
    }
  });

const fireRedData = new Map([
  [0x3f8, 0x21f0046],
  [0x60c, 0x21f0046],
  [0x15bc, 0x20f1404],
  [0x1626, 0x20f0000],
  [0x4312, 0x202fc01],
  [0x4317, 0x202fc01],
  [0x4d12, 0x2030000],
  [0x7912, 0x2031013],
  [0x89fa, 0x277050b],
  [0xa253, 0x21b1333],
  [0xb2a9, 0x21705ec],
  [0xc7fe, 0x21b06db],
  [0xc950, 0x24706d0],
  [0xcaa2, 0x22b0066],
  [0xcd48, 0x2eebb7f],
  [0xcf8b, 0x2030007],
  [0xd624, 0x2230199],
  [0xdd37, 0x2070023],
  [0xe07c, 0x2ff0155],
  [0xe472, 0x21b02a0],
  [0xe69d, 0x2e2ed20],
  [0xff3b, 0x26f026e],
  [0xff41, 0x25f025e],
  [0xff61, 0x27f027e],
  [0xff6b, 0x27f027f],
  [0xff78, 0x27f0000],
  [0xff79, 0x27f027f],
  [0xff7b, 0x27f027f],
  [0xff7e, 0x27f027f],
  [0xff81, 0x27f027f],
  [0xff83, 0x27f027f],
  [0xff86, 0x27f027f],
  [0xff8b, 0x27f027f],
  [0xff8e, 0x27f027f],
  [0xff96, 0x27f027f],
  [0xff99, 0x27f027f],
  [0xff9b, 0x27f027f],
  [0xff9e, 0x27f027f],
  [0xffa1, 0x27f027f],
  [0xffa3, 0x27f027f],
  [0xffab, 0x27f027f],
  [0xffae, 0x27f027f],
  [0xffb1, 0x27f027f],
  [0xffb3, 0x27f027f],
  [0xffb6, 0x27f027f],
  [0xffb9, 0x27f027f],
  [0xffbb, 0x27f027f],
  [0xffc3, 0x27f027f],
  [0xffc6, 0x27f027f],
  [0xffc9, 0x27f027f],
  [0xffce, 0x27f027f],
  [0xffd3, 0x27f027f],
  [0xfff8, 0x27f0000],
  [0xfff9, 0x27f027f],
]);

const leafGreenData = new Map([
  [0x3f8, 0x21f0046],
  [0x60c, 0x21f0046],
  [0x15bc, 0x20f1404],
  [0x1626, 0x20f0000],
  [0x3d88, 0x2c7030e],
  [0x4d1b, 0x2030405],
  [0xbcb2, 0x20b0221],
  [0xc290, 0x20310c7],
  [0xc6aa, 0x2e2ede2],
  [0xcfad, 0x2870602],
  [0xd45d, 0x2031036],
  [0xd628, 0x2031003],
  [0xea20, 0x2eee440],
  [0xeb51, 0x27312d3],
  [0xfbed, 0x23301f0],
  [0xff11, 0x26f026e],
  [0xff37, 0x27f027e],
  [0xff41, 0x24f024e],
  [0xff57, 0x27f027e],
  [0xff5c, 0x25f001a],
  [0xff61, 0x26f026e],
  [0xff6c, 0x27f027f],
  [0xff79, 0x27f027f],
  [0xff7c, 0x27f027f],
  [0xff7f, 0x27f027f],
  [0xff81, 0x27f027f],
  [0xff84, 0x27f027f],
  [0xff87, 0x27f027f],
  [0xff8c, 0x27f027f],
  [0xff8f, 0x27f027f],
  [0xff97, 0x27f027f],
  [0xff99, 0x27f027f],
  [0xff9c, 0x27f027f],
  [0xff9f, 0x27f027f],
  [0xffa1, 0x27f027f],
  [0xffa4, 0x27f027f],
  [0xffac, 0x27f027f],
  [0xffaf, 0x27f027f],
  [0xffb1, 0x27f027f],
  [0xffb4, 0x27f027f],
  [0xffb7, 0x27f027f],
  [0xffb9, 0x27f027f],
  [0xffbc, 0x27f027f],
  [0xffc4, 0x27f027f],
  [0xffc7, 0x27f027f],
  [0xffc9, 0x27f027f],
  [0xffce, 0x27f0000],
  [0xffd1, 0x27f027f],
  [0xfff9, 0x27f027f],
]);

const POKEMON_STROAGE_ADDR = 0x0202924C;
const EV_ADJUST_SSTRUCTS = new Set([8, 22]);
const EXP_ADJUST_SSTRUCTS = new Set([6, 7, 12, 13, 18, 19]);
const PID_SUBSTRUCTURE_ORDERS = [
  'GAEM',
  'GAME',
  'GEAM',
  'GEMA',
  'GMAE',
  'GMEA',
  'AGEM',
  'AGME',
  'AEGM',
  'AEMG',
  'AMGE',
  'AMEG',
  'EGAM',
  'EGMA',
  'EAGM',
  'EAMG',
  'EMGA',
  'EMAG',
  'MGAE',
  'MGEA',
  'MAGE',
  'MAEG',
  'MEGA',
  'MEAG',
];

function getAdjustmentType(pid) {
  if (typeof pid !== "number") {
    throw new Error("Not a number");
  }
  const pmod = (pid >>> 0) % 24;
  if (EV_ADJUST_SSTRUCTS.has(pmod)) {
    return "EV";
  }
  if (EXP_ADJUST_SSTRUCTS.has(pmod)) {
    return "Experience";
  }
  return null;
}

function findSpeciesWord(pid, tid, targetSpeciesList) {
  if (!(
    typeof pid === "number"
    && typeof tid === "number"
    && targetSpeciesList.constructor === Map
  )) {
    throw new Error("Bad arguments");
  }
  const words = [];
  const encryptionKey = ((pid >>> 0) ^ (tid >>> 0)) & ((1 << 16) - 1);
  for (const speciesIndex of targetSpeciesList.keys()) {
    if (typeof speciesIndex !== "number") {
      throw new Error("Bad arguments");
    }
    const encryptedSpecies = speciesIndex ^ encryptionKey;
    if (easyChatData.has(encryptedSpecies)) {
      words.push([speciesIndex, encryptedSpecies]);
    }
  }
  return words;
}

function calculateBoxLocation(entrypoint) {
  if (typeof entrypoint !== "number") {
    throw new Error("Bad arguments");
  }
  const offset = ((entrypoint & 0x0203FFFF)
                  - (POKEMON_STROAGE_ADDR + 4 + 124));
  const boxNumber = Math.floor(Math.floor(offset / 80) / 30) + 1;
  const slotNumber = Math.floor(offset / 80) % 30 + 1;
  return [boxNumber, slotNumber];
}

document.getElementById("pid-input").addEventListener("input", function() {
  this.setCustomValidity("");
});

document.getElementById("pid-input").addEventListener("blur", function() {
  const n = Number(this.value);
  if (isNaN(n) || !(n >= 0 && n <= 0xFFFFFFFF)) {
    this.setCustomValidity("Invalid personality value");
    this.reportValidity();
  } else {
    this.setCustomValidity("");
  }
  document.activeElement.blur();
});

document.getElementById("tid-input").addEventListener("input", function() {
  this.setCustomValidity("");
});

document.getElementById("tid-input").addEventListener("blur", function() {
  const n = Number(this.value);
  if (isNaN(n) || !(n >= 0 && n <= 65535)) {
    this.setCustomValidity("Invalid trainer ID");
    this.reportValidity();
  } else {
    this.setCustomValidity("");
  }
  document.activeElement.blur();
});

document.getElementById("word-search-form").onsubmit = () => false;
document.getElementById("word-search-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const params = new FormData(this);
  const pid = Number(params.get("pid"));
  const tid = Number(params.get("tid"));
  const gameVersion = params.get("game-version");
  let speciesList;
  if (!this.elements["pid"].checkValidity()) {
    this.elements["pid"].reportValidity();
    return;
  }
  if (!this.elements["tid"].checkValidity()) {
    this.elements["tid"].reportValidity();
    return;
  }
  if (typeof gameVersion !== "string") {
    throw new Error("Malformed input");
  }
  switch (gameVersion) {
    case "firered":
      speciesList = fireRedData;
      break;
    case "leafgreen":
      speciesList = leafGreenData;
      break;
    default:
      throw new Error("Malformed input");
  }
  const adjustmentType = getAdjustmentType(pid);
  const speciesWords = [];
  if (adjustmentType !== null) {
    for (const result of findSpeciesWord(pid, tid, speciesList)) {
      speciesWords.push(result);
    }
  }
  document.getElementById("pid-substructure-order").innerText = `${(pid >>> 0) % 24} (${PID_SUBSTRUCTURE_ORDERS[(pid >>> 0) % 24]})`;
  document.getElementById("encryption-key").innerText = "0x" + (((pid >>> 0) ^ (tid >>> 0)) & ((1 << 16) - 1)).toString(16).toUpperCase();
  document.getElementById("corruption-type").innerText = adjustmentType ?? "None";
  const resultsBody = document.getElementById("results-body");
  while (resultsBody.firstElementChild) {
    resultsBody.removeChild(resultsBody.lastElementChild);
  }
  for (const speciesWord of speciesWords) {
    const entrypoint = calculateBoxLocation(speciesList.get(speciesWord[0]));
    const resultRow = document.createElement("tr");
    const speciesCell = document.createElement("td");
    const entrypointCell = document.createElement("td");
    const wordIndexCell = document.createElement("td");
    const wordGroupCell = document.createElement("td");
    const wordCell = document.createElement("td");
    speciesCell.innerText = "0x" + speciesWord[0].toString(16).padStart(4, "0").toUpperCase();
    entrypointCell.innerText = `Box ${entrypoint[0]} - Slot ${entrypoint[1]}`;
    wordIndexCell.innerText = "0x" + speciesWord[1].toString(16).padStart(4, "0").toUpperCase();
    wordGroupCell.innerText = easyChatData.get(speciesWord[1]).Group;
    wordCell.innerText = easyChatData.get(speciesWord[1]).Word;
    resultRow.append(speciesCell);
    resultRow.append(entrypointCell);
    resultRow.append(wordIndexCell);
    resultRow.append(wordGroupCell);
    resultRow.append(wordCell);
    resultsBody.append(resultRow);
  }
});
})();
