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

const toolForm = document.getElementById("adjustment-tool-form");

function calcAdjustment(encryptionKey, oldSpecies, newSpecies, checksumWord) {
  if (typeof encryptionKey !== "number") {
    throw new Error("Bad arguments");
  }
  if (typeof oldSpecies !== "number") {
    throw new Error("Bad arguments");
  }
  if (typeof newSpecies !== "number") {
    throw new Error("Bad arguments");
  }
  if (typeof checksumWord !== "number") {
    throw new Error("Bad arguments");
  }
  const checksumDiff = Math.max(oldSpecies, newSpecies) - Math.min(oldSpecies, newSpecies);
  const decryptedValue = checksumWord ^ encryptionKey;
  return ((checksumDiff + decryptedValue) & 0xFFFF) >>> 0;
}

function calcExpAdjustment(baseAdjustment, experience) {
  if (typeof baseAdjustment !== "number") {
    throw new Error("Bad arguments");
  }
  if (typeof experience !== "number") {
    throw new Error("Bad arguments");
  }
  let newExperience = baseAdjustment;
  while (newExperience < experience) {
    newExperience += 0x10000;
  }
  return newExperience >>> 0;
}

function calcEvAdjustment(baseAdjustment) {
  if (typeof baseAdjustment !== "number") {
    throw new Error("Bad arguments");
  }
  const ev1 = baseAdjustment & 0xFF;
  const ev2 = (baseAdjustment >> 8) & 0xFF;
  return [ev1, ev2];
}

function filterEasyChat(useUnlockable, usePostElite4) {
  // Word groups are determined through a bit shift right by 9
  const filteredEasyChat = [...easyChatData.keys()];
  const UNLOCKABLE_GROUPS = new Set([
    0x0,
    0x11,
    0x12,
    0x13,
    0x14,
    0x15,
  ]);
  const POST_E4_GROUPS = new Set([
    0x0,
    0x11,
    0x12,
    0x13,
    0x14,
  ]);
  const POST_E4_INDEX = (() => {
    const POKEMON2_GROUP = 0x15 << 9
    const indexes = new Set();
    indexes.add(POKEMON2_GROUP | 146); // Moltres, can only be reached from Sevii Islands
    // Exclude MEWTWO to CELEBII
    for (let i = 150; i <= 251; i++) {
      indexes.add(POKEMON2_GROUP | i);
    }
    return indexes;
  })();
  const filteredGroups = new Set();
  const filteredIndexes = new Set();
  if (!useUnlockable) {
    for (const group of UNLOCKABLE_GROUPS) {
      filteredGroups.add(group);
    }
  } else if (!usePostElite4) {
    for (const group of POST_E4_GROUPS) {
      filteredGroups.add(group);
    }
    for (const index of POST_E4_INDEX) {
      filteredIndexes.add(index);
    }
  }
  for (let i = filteredEasyChat.length - 1; i >= 0; i--) {
    if (
      filteredGroups.has(filteredEasyChat[i] >> 9)
      || filteredIndexes.has(filteredEasyChat[i])
    ) {
      filteredEasyChat.splice(i, 1);
    }
  }
  return filteredEasyChat;
}

function searchChecksumWords(
  adjustmentType,
  encryptionKey,
  oldSpecies,
  newSpecies,
  useUnlockable,
  usePostElite4,
  experience
) {
  const easyChatData = filterEasyChat(useUnlockable, usePostElite4);
  let checksumWord = 0;
  let adjustmentScore = 2**32 - 1 >>> 0; // Start with largest possible
  switch (adjustmentType) {
    case "EXP":
      for (const checksumWordId of easyChatData) {
        const adjustment = calcAdjustment(encryptionKey, oldSpecies, newSpecies, checksumWordId);
        const expAdjustment = calcExpAdjustment(adjustment, experience);
        if (expAdjustment < adjustmentScore) {
          adjustmentScore = expAdjustment;
          checksumWord = checksumWordId;
        }
      }
      break;
    case "EV":
      for (const checksumWordId of easyChatData) {
        const adjustment = calcAdjustment(encryptionKey, oldSpecies, newSpecies, checksumWordId);
        const evAdjustment = calcEvAdjustment(adjustment);
        const evAdjustmentScore = evAdjustment[0] + evAdjustment[1];
        if (evAdjustmentScore < adjustmentScore) {
          adjustmentScore = evAdjustmentScore;
          checksumWord = checksumWordId;
        }
      }
      break;
    default:
      break;
  }
  return checksumWord;
}

document.getElementById("encryption-key-input").addEventListener("input", function() {
  this.setCustomValidity("");
})

document.getElementById("encryption-key-input").addEventListener("blur", function() {
  const n = Number(this.value);
  if (isNaN(n) || !(n >= 0 && n <= 65535)) {
    this.setCustomValidity("Invalid encryption key");
    this.reportValidity();
  } else {
    this.setCustomValidity("");
  }
  document.activeElement.blur();
});

document.getElementById("old-species-input").addEventListener("input", function() {
  this.setCustomValidity("");
})

document.getElementById("old-species-input").addEventListener("blur", function() {
  const n = Number(this.value);
  if (isNaN(n) || !(n >= 0 && n <= 65535)) {
    this.setCustomValidity("Invalid species index");
    this.reportValidity();
  } else {
    this.setCustomValidity("");
  }
  document.activeElement.blur();
});

document.getElementById("new-species-input").addEventListener("input", function() {
  this.setCustomValidity("");
})

document.getElementById("new-species-input").addEventListener("blur", function() {
  const n = Number(this.value);
  if (isNaN(n) || !(n >= 0 && n <= 65535)) {
    this.setCustomValidity("Invalid species index");
    this.reportValidity();
  } else {
    this.setCustomValidity("");
  }
  document.activeElement.blur();
});

document.getElementById("checksum-word-input").addEventListener("input", function() {
  this.setCustomValidity("");
})

document.getElementById("checksum-word-input").addEventListener("blur", function() {
  if (this.value === "") {
    this.setCustomValidity("");
    return;
  }
  const n = Number(this.value);
  if (isNaN(n) || !(n >= 0 && n <= 65535)) {
    this.setCustomValidity("Invalid checksum word");
    this.reportValidity();
  } else {
    this.setCustomValidity("");
  }
  document.activeElement.blur();
});

document.getElementById("search-all-ecs-checkbox").addEventListener("change", function() {
  if (this.checked) {
    toolForm.elements["checksum-word"].value = "";
    toolForm.elements["checksum-word"].disabled = true;
    toolForm.elements["use-unlockable"].disabled = false;
  } else {
    toolForm.elements["checksum-word"].disabled = false;
    toolForm.elements["use-unlockable"].disabled = true;
    toolForm.elements["use-post-e4"].disabled = true;
  }
});

toolForm.elements["use-unlockable"].addEventListener("change", function() {
  if (this.checked) {
    toolForm.elements["use-post-e4"].disabled = false;
  } else {
    toolForm.elements["use-post-e4"].checked = false;
    toolForm.elements["use-post-e4"].disabled = true;
  }
});

toolForm.elements["exp-adjustment-radio"].addEventListener("click", adjustmentTypeRadioHelper)
toolForm.elements["ev-adjustment-radio"].addEventListener("click", adjustmentTypeRadioHelper)

function adjustmentTypeRadioHelper(e) {
  switch (e.target.value) {
    case "EXP":
      document.querySelector('label[for="current-experience-input"]').style.display = "";
      toolForm.elements["current-experience"].disabled = false;
      toolForm.elements["current-experience"].style.display = "";
      break;
    case "EV":
      document.querySelector('label[for="current-experience-input"]').style.display = "none";
      toolForm.elements["current-experience"].disabled = true;
      toolForm.elements["current-experience"].style.display = "none";
      break;
    default:
      break;
  }
}

document.getElementById("word-search-form").onsubmit = () => false;
toolForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const params = new FormData(e.target);
  const adjustmentType = params.get("adjustment-type")
  const encryptionKey = Number(params.get("encryption-key"));
  const oldSpecies = Number(params.get("old-species"));
  const newSpecies = Number(params.get("new-species"));
  let checksumWord = 0;
  if (params.get("search-all-ecs")) {
    const useUnlockable = Boolean(params.get("use-unlockable"));
    const usePostE4 = Boolean(params.get("use-post-e4"));
    checksumWord = searchChecksumWords(
      adjustmentType,
      encryptionKey,
      oldSpecies,
      newSpecies,
      useUnlockable,
      usePostE4,
      Number(params.get("current-experience")),
    );
  } else {
    checksumWord = Number(params.get("checksum-word"));
  }
  document.getElementById("checksum-word-index-insert").innerText = `\
  0x${checksumWord.toString(16).toUpperCase()}\
  `;
  document.getElementById("checksum-word-group-insert").innerText = `\
  ${easyChatData.get(checksumWord).Group}\
  `;
  document.getElementById("checksum-word-insert").innerText = `\
  ${easyChatData.get(checksumWord).Word}\
  `;
  const baseAdjustment = calcAdjustment(
                          encryptionKey,
                          oldSpecies,
                          newSpecies,
                          checksumWord,
                        )
  let adjustment;
  switch (adjustmentType) {
    case "EXP":
      adjustment = calcExpAdjustment(
        baseAdjustment,
        Number(params.get("current-experience")),
      );
      document.getElementById("adjustment-insert").innerText = `\
      ${adjustment} experience\
      `
      break;
    case "EV":
      adjustment = calcEvAdjustment(baseAdjustment);
      document.getElementById("adjustment-insert").innerText = `\
      ${adjustment[0]} HP and ${adjustment[1]} Attack \
      or ${adjustment[0]} Sp.Attack and ${adjustment[1]} Sp.Defense\
      `
      break;
    default:
      break;
  }
});
})();
