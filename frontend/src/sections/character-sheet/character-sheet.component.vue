<script>

import CharacterService from 'Services/character.service';
import SizeService from 'Services/size.service';
import RaceService from 'Services/race.service';
import AlignmentService from 'Services/alignment.service';
import ExporterService from 'Services/exporter.service';

export default {
    data: function () {
        return {
            importFile: null,
            character: CharacterService.new(),
            allSizes: SizeService.getAll(),
            allRaces: RaceService.getAll(),
            allAlignments: AlignmentService.getAll()
        };
    },
    computed: {
        classesCombined: {
            get: function () {
                return this.character.classes.map(classe => {
                    if (!classe.name || !classe.level) return "";
                    return classe.name + " (" + classe.level + ")";
                });
            },
            set: function (newValue) {
                this.character.classes = [];
                const fieldValues = newValue.split(',');
                fieldValues.forEach(fieldValue => {
                    // If empty character
                    if (fieldValue.trim() === '') return;

                    // Clear whitespaces
                    var classLevel = fieldValue.replace(/ /g, '');

                    // Regex to get level
                    var levelRegex = /\(([^)]+)\)/;

                    // Get level data, 
                    var levelData = levelRegex.exec(classLevel);
                    // Extract level from data
                    var level = levelData && levelData.length > 1 ? levelData[1] : 1;

                    // Remove level from field.
                    var classOnly = classLevel.replace(levelRegex, '');
                    this.character.classes.push({
                        name: classOnly,
                        level: level
                    });
                });
            }
        }
    },
    methods: {
        saveOrUpdate: function () {
            CharacterService.saveOrUpdate(this.character).then(data => {
                this.character._id = data._id;
                window.history.pushState("", "", '/#/character/' + this.character._id);
            });
        },
        exportCharacter: function () {
            this.saveOrUpdate();
            var fileName = this.character.name || this.character._id;
            fileName += '.json';
            ExporterService.exportText(this.character, fileName);
        },
        importCharacter: function () {
            var element = document.getElementById('importField');
            if (element.files.length > 0) {
                ExporterService.importFile(element.files[0]).then(characterData => {
                    element.value = "";
                    this.character = CharacterService.load(characterData);
                    window.history.pushState("", "", '/#/character/' + this.character._id);
                    this.saveOrUpdate();
                });
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        if (to.params.id) {
            CharacterService.get(to.params.id).then(character => {
                next(vm => {
                    vm.character = character;
                });
            });
        } else {
            next(vm => {
                vm.character = CharacterService.new();
            });
        }
    }
};
</script>
<template>
    <div>
        <div class="first-page main-container" style="display: none">
            <div class="controls-container">
                <button @click="saveOrUpdate">Salvar</button>
                <button @click="exportCharacter">Exportar</button>
                <button @click="importCharacter">Importar</button>
                <input id="importField" type="file">
            </div>
            <div class="pure-g">
                <div class="description-container">
                    <div class="pure-u-md-1-1 hidden-lg-up">
                        <img src="assets/images/dnd-logo.png" alt="" width="100%" height="100%">
                    </div>
                    <div class="pure-u-md-1-2 pure-u-lg-1-3">
                        <div class="pure-g first-description-container">
                            <div class="pure-u-1-1">
                                <div class="small-padding-box">
                                    <input type="text" class="description-field" v-model="character.name">
                                    <span class="description-span">Character Name</span>
                                </div>
                            </div>
                            <div class="pure-u-1-1">
                                <div class="small-padding-box">
                                    <input type="text" class="description-field" v-model.lazy="classesCombined">
                                    <span class="description-span">Class And Level</span>
                                </div>
                            </div>
                            <div class="pure-u-1-4">
                                <div class="small-padding-box">
                                    <select class="description-field" v-model="character.size">
                                        <option disabled value="">None</option>
                                        <option v-for="(size, index) in allSizes" :key="index">{{size.name}}</option>
                                    </select>
                                    <span class="description-span">Size</span>
                                </div>
                            </div>
                            <div class="pure-u-1-4">
                                <div class="small-padding-box">
                                    <input type="text" class="description-field" v-model="character.age">
                                    <span class="description-span">Age</span>
                                </div>
                            </div>
                            <div class="pure-u-1-4">
                                <div class="small-padding-box">
                                    <select class="description-field" v-model="character.gender">
                                        <option disabled value="">None</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                    <span class="description-span">Gender</span>
                                </div>
                            </div>
                            <div class="pure-u-1-4">
                                <div class="small-padding-box">
                                    <input type="text" class="description-field" v-model="character.height">
                                    <span class="description-span">Height</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pure-u-md-1-2 pure-u-lg-1-3">
                        <div class="pure-g padding-box">
                            <div class="pure-u-1-1">
                                <div class="small-padding-box">
                                    <input type="text" class="description-field" v-model="character.playerName">
                                    <span class="description-span">Player Name</span>
                                </div>
                            </div>
                            <div class="pure-u-1-3">
                                <div class="small-padding-box">
                                    <select class="description-field" v-model="character.race">
                                        <option disabled value="">None</option>
                                        <option v-for="(race, index) in allRaces" :key="index">{{race}}</option>
                                    </select>
                                    <span class="description-span">Race</span>
                                </div>
                            </div>
                            <div class="pure-u-1-3">
                                <div class="small-padding-box">
                                    <select class="description-field" v-model="character.alignment">
                                        <option disabled value="">None</option>
                                        <option v-for="(alignment, index) in allAlignments" :key="index">{{alignment}}</option>
                                    </select>
                                    <span class="description-span">Alignment</span>
                                </div>
                            </div>
                            <div class="pure-u-1-3">
                                <div class="small-padding-box">
                                    <input type="text" class="description-field" v-model="character.deity">
                                    <span class="description-span">Deity</span>
                                </div>
                            </div>
                            <div class="pure-u-1-4">
                                <div class="small-padding-box">
                                    <input type="text" class="description-field" v-model="character.weight">
                                    <span class="description-span">Weight</span>
                                </div>
                            </div>
                            <div class="pure-u-1-4">
                                <div class="small-padding-box">
                                    <input type="text" class="description-field" v-model="character.eyes">
                                    <span class="description-span">Eyes</span>
                                </div>
                            </div>
                            <div class="pure-u-1-4">
                                <div class="small-padding-box">
                                    <input type="text" class="description-field" v-model="character.hair">
                                    <span class="description-span">Hair</span>
                                </div>
                            </div>
                            <div class="pure-u-1-4">
                                <div class="small-padding-box">
                                    <input type="text" class="description-field" v-model="character.skin">
                                    <span class="description-span">Skin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pure-u-lg-1-3 hidden-md-down">
                        <img src="assets/images/dnd-logo.png" alt="" width="100%" height="100%">
                    </div>
                </div>
                <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                    <div class="ability-container">
                        <table class="ability-table">
                            <thead>
                                <tr>
                                    <th>
                                        <span class="ability-score-description">Ability Name</span>
                                    </th>
                                    <th>
                                        <span class="ability-score-description">Ability
                                            <br>Score</span>
                                    </th>
                                    <th>
                                        <span class="ability-score-description">Ability
                                            <br>Modifier</span>
                                    </th>
                                    <th>
                                        <span class="ability-score-description">Temporary
                                            <br>Score</span>
                                    </th>
                                    <th>
                                        <span class="ability-score-description">Temporary
                                            <br>Modifier</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(abilityScore, index) in character.abilityScores" :key="index">
                                    <th>
                                        <div class="black-box">
                                            <span class="ability-score-abbreviation">{{abilityScore.name.substring(0,3)}}</span>
                                            <span class="ability-score-name">{{abilityScore.name}}</span>
                                        </div>
                                    </th>
                                    <td>
                                        <div>
                                            <input type="number" value="10" class="ability-score-field" v-model.number="abilityScore.value">
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <input type="number" value="0" class="ability-score-field" readonly :value="abilityScore.getModifier()">
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <input type="number" value="10" class="ability-score-field" v-model.number="abilityScore.tempValue">
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <input type="number" value="0" class="ability-score-field" readonly :value="abilityScore.getTempModifier()">
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-2-3">
                    <div class="first-gutter hidden-lg-up">
                        <span>&nbsp</span>
                    </div>
                    <div class="padding-box">
                        <table class="health-table hidden-md-down">
                            <thead>
                                <tr>
                                    <th>
                                        <span>&nbsp</span>
                                    </th>
                                    <th>
                                        <span class="ability-score-description">Total</span>
                                    </th>
                                    <th>
                                        <span class="ability-score-description">Wounds/Current HP</span>
                                    </th>
                                    <th>
                                        <span class="ability-score-description">Nonlethal
                                            <br>Damage</span>
                                    </th>
                                    <th>
                                        <span class="ability-score-description">Speed</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <div class="black-box">
                                            <span class="health-points-abbreviation">HP</span>
                                            <span class="health-points-description">Health Points</span>
                                        </div>
                                    </th>
                                    <td>
                                        <div>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.status.healthPoints">
                                        </div>
                                    </td>
                                    <td style="width: 30%">
                                        <div>
                                            <input type="text" class="wounds-field" v-model="character.status.wounds">
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <input type="number" value="0" class="non-lethal-field" v-model.number="character.status.nonLethalDamage">
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <input type="text" class="speed-field" v-model="character.speed">
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="wounds-table hidden-lg-up">
                            <tbody>
                                <th style="width: 50%;">
                                    <div class="black-box">
                                        <span class="armor-class-abbreviation">HP</span>
                                        <span class="health-points-description">Health Points</span>
                                    </div>
                                </th>
                                <td style="text-align: center;">
                                    <input type="number" value="0" style="width: 50%" v-model.number="character.status.healthPoints">
                                </td>
                            </tbody>
                        </table>
                        <table class="wounds-table hidden-lg-up">
                            <tbody>
                                <th style="width: 50%;">
                                    <div class="black-box">
                                        <span class="armor-class-abbreviation">Wounds</span>
                                        <span class="health-points-description">Current HP</span>
                                    </div>
                                </th>
                                <td style="text-align: center;">
                                    <input type="text" style="width: 50%" v-model="character.status.wounds">
                                </td>
                            </tbody>
                        </table>
                        <table class="nonlethal-table hidden-lg-up">
                            <tbody>
                                <th style="width: 50%;">
                                    <div class="black-box">
                                        <span class="armor-class-abbreviation" style="font-size: 80%">Nonlethal
                                            <br>Damage</span>
                                    </div>
                                </th>
                                <td style="text-align: center;">
                                    <input type="number" value="0" style="width: 50%" v-model.number="character.status.nonLethalDamage">
                                </td>
                            </tbody>
                        </table>
                        <table class="speed-table hidden-lg-up">
                            <tbody>
                                <th style="width: 50%;">
                                    <div class="black-box">
                                        <span class="armor-class-abbreviation">Speed</span>
                                    </div>
                                </th>
                                <td style="text-align: center;">
                                    <input type="text" style="width: 50%" v-model="character.speed">
                                </td>
                            </tbody>
                        </table>
                        <!-- Desktop Armor Table -->
                        <table class="armor-table hidden-md-down">
                            <tbody>
                                <tr>
                                    <th>
                                        <div class="black-box">
                                            <span class="armor-class-abbreviation">AC</span>
                                            <span class="armor-class-description">Armor Class</span>
                                        </div>
                                    </th>
                                    <td>
                                        <input type="number" value="10" class="health-points-field" readonly :value="character.armorClass.getTotalArmor()">
                                    </td>
                                    <td>
                                        <span class="armor-base-value">= 10 +</span>
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.armorBonus">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.shieldBonus">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.dexModifier">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.sizeModifier">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.naturalArmor">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.deflectionModifier">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.miscModifier">
                                    </td>
                                    <td style="width:15%">
                                        <input type="text" class="damage-reduction-field" v-model="character.damageReduction">
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>
                                        <span>&nbsp</span>
                                    </th>
                                    <th>
                                        <span class="ability-score-description">Total</span>
                                    </th>
                                    <th>
                                        <span class="ability-score-description">&nbsp</span>
                                    </th>
                                    <th>
                                        <span class="armor-description">Armor
                                            <br>Bonus</span>
                                    </th>
                                    <th>
                                        <span class="armor-description">Shield
                                            <br>Bonus</span>
                                    </th>
                                    <th>
                                        <span class="armor-description">Dex
                                            <br>Modifier</span>
                                    </th>
                                    <th>
                                        <span class="armor-description">Size
                                            <br>Modifier</span>
                                    </th>
                                    <th>
                                        <span class="armor-description">Natural
                                            <br>Armor</span>
                                    </th>
                                    <th>
                                        <span class="armor-description">Deflection
                                            <br>Modifier</span>
                                    </th>
                                    <th>
                                        <span class="armor-description">Misc
                                            <br>Modifier</span>
                                    </th>
                                    <th>
                                        <span class="armor-description">Damage Reduction</span>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                        <!-- Mobile Armor Table -->
                        <div class="armor-container">
                            <table class="armor-table hidden-lg-up">
                                <tbody>
                                    <tr>
                                        <td colspan="9">
                                            <div class="black-box" style="width:50%; float:left">
                                                <span class="health-points-abbreviation">AC</span>
                                                <span class="health-points-description">Armor Class</span>
                                            </div>
                                            <div style="vertical-align: middle; width:50%; float:right; margin-top: 4px;">
                                                <input type="number" value="10" class="health-points-field total-health-points-field" readonly :value="character.armorClass.getTotalArmor()">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.armorBonus">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.shieldBonus">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.dexModifier">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.sizeModifier">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.naturalArmor">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.deflectionModifier">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.armorClass.miscModifier">
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>
                                            <span class="armor-description">Armor
                                                <br>Bonus</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Shield
                                                <br>Bonus</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Dex
                                                <br>Modifier</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Size
                                                <br>Modifier</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Natural
                                                <br>Armor</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Deflection
                                                <br>Modifier</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Misc
                                                <br>Modifier</span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <!-- Touch and Flat-Footed -->
                        <div>
                            <div class="pure-u-lg-11-24 hidden-md-down">
                                <div class="touch-flat-container">
                                    <div style="width:39%">
                                        <table class="touch-table">
                                            <tbody>
                                                <tr>
                                                    <th>
                                                        <div class="black-box">
                                                            <span class="health-points-abbreviation">Touch</span>
                                                            <span class="health-points-description">Armor Class</span>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div>
                                                            <input type="number" value="0" class="health-points-field" readonly :value="character.armorClass.getTouchArmor()">
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div style="width:57.2%">
                                        <table class="flat-table hidden-md-down">
                                            <tbody>
                                                <th>
                                                    <div class="black-box">
                                                        <span class="health-points-abbreviation">Flat-Footed</span>
                                                        <span class="health-points-description">Armor Class</span>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        <input type="number" value="0" class="health-points-field" readonly :value="character.armorClass.getFlatFooted()">
                                                    </div>
                                                </td>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden-md-down pure-u-1 pure-u-lg-11-24">
                            <table class="initiative-table" style="width:100%; text-align: center">
                                <tbody>
                                    <tr>
                                        <th>
                                            <div class="black-box">
                                                <span class="health-points-abbreviation">Initiative</span>
                                                <span class="health-points-description">Modifier</span>
                                            </div>
                                        </th>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" readonly :value="character.initiative.getTotal()">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.initiative.dexModifier">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.initiative.miscModifier">
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>
                                            <span>&nbsp</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Total</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Dex
                                                <br>Modifier</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Misc
                                                <br>Modifier</span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="padding-box hidden-lg-up">
                    <div class="pure-u-md-1-2 pure-u-1">
                        <div class="touch-flat-container-mobile">
                            <div>
                                <table class="touch-table">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <div class="black-box">
                                                    <span class="health-points-abbreviation">Touch</span>
                                                    <span class="health-points-description">Armor Class</span>
                                                </div>
                                            </th>
                                            <td>
                                                <div>
                                                    <input type="number" value="0" class="health-points-field" readonly :value="character.armorClass.getTouchArmor()">
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table class="flat-table">
                                    <tbody>
                                        <th>
                                            <div class="black-box">
                                                <span class="health-points-abbreviation">Flat-Footed</span>
                                                <span class="health-points-description">Armor Class</span>
                                            </div>
                                        </th>
                                        <td>
                                            <div>
                                                <input type="number" value="0" class="health-points-field" readonly :value="character.armorClass.getFlatFooted()">
                                            </div>
                                        </td>
                                    </tbody>
                                </table>
                            </div>
                        </div>
    
                    </div>
                    <div class="pure-u-md-1-2 pure-u-1">
                        <div class="initiative-container">
                            <table class="initiative-table" style="width:100%; text-align: center">
                                <tbody>
                                    <tr>
                                        <th>
                                            <div class="black-box">
                                                <span class="health-points-abbreviation">Initiative</span>
                                                <span class="health-points-description">Modifier</span>
                                            </div>
                                        </th>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" readonly :value="character.initiative.getTotal()">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.initiative.dexModifier">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="health-points-field" v-model.number="character.initiative.miscModifier">
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>
                                            <span>&nbsp</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Total</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Dex
                                                <br>Modifier</span>
                                        </th>
                                        <th>
                                            <span class="armor-description">Misc
                                                <br>Modifier</span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="padding-box">
                    <div class="pure-u-1 pure-u-md-4-5 pure-u-lg-12-24" style="overflow-y: auto;">
                        <table class="saving-throw-table hidden-sm-down">
                            <thead>
                                <tr>
                                    <th>
                                        <span class="ability-score-description">
                                            Saving Throws
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(savingThrow, index) in character.savingThrows" :key="index">
                                    <th>
                                        <div class="black-box">
                                            <span class="health-points-abbreviation">{{savingThrow.name}}</span>
                                            <span class="health-points-description">({{savingThrow.keyAbility}})</span>
                                        </div>
                                    </th>
                                    <td>
                                        <div>
                                            <label v-if="index == 0" for="">Total</label>
                                            <input type="number" value="0" readonly :value="savingThrow.getTotal()">
                                        </div>
                                        <span class="saving-throw-signs">=</span>
                                        <div>
                                            <label v-if="index == 0" for="">Base
                                                <br>Save</label>
                                            <input type="number" value="0" v-model.number="savingThrow.base">
                                        </div>
                                        <span class="saving-throw-signs">+</span>
                                        <div>
                                            <label v-if="index == 0" for="">Ability
                                                <br>Modifier</label>
                                            <input type="number" value="0" v-model.number="savingThrow.abilityModifier">
                                        </div>
                                        <span class="saving-throw-signs">+</span>
                                        <div>
                                            <label v-if="index == 0" for="">Magic
                                                <br>Modifier</label>
                                            <input type="number" value="0" v-model.number="savingThrow.magicModifier">
                                        </div>
                                        <span class="saving-throw-signs">+</span>
                                        <div>
                                            <label v-if="index == 0" for="">Misc
                                                <br>Modifier</label>
                                            <input type="number" value="0" v-model.number="savingThrow.miscModifier">
                                        </div>
                                        <span class="saving-throw-signs">+</span>
                                        <div>
                                            <label v-if="index == 0" for="">Temporary
                                                <br>Modifier</label>
                                            <input type="number" value="0" v-model.number="savingThrow.tempModifier">
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="saving-throws-container hidden-sm-up">
                            <div class="saving-throw-title">
                                <span class="ability-score-description">
                                    Saving Throws
                                </span>
                            </div>
                            <div class="saving-throw-container" v-for="(savingThrow, index) in character.savingThrows" :key="index">
                                <table class="saving-throw-table-mobile hidden-sm-up">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="black-box">
                                                    <span class="health-points-abbreviation">{{savingThrow.name}}</span>
                                                    <span class="health-points-description">({{savingThrow.keyAbility}})</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>
                                                    <label for="">Total</label>
                                                    <input type="number" value="0" readonly :value="savingThrow.getTotal()">
                                                </div>
                                                <span class="saving-throw-signs">=</span>
                                                <div>
                                                    <label for="">Base
                                                        <br>Save</label>
                                                    <input type="number" value="0" v-model.number="savingThrow.base">
                                                </div>
                                                <span class="saving-throw-signs">+</span>
                                                <div>
                                                    <label for="">Ability
                                                        <br>Modifier</label>
                                                    <input type="number" value="0" v-model.number="savingThrow.abilityModifier">
                                                </div>
                                                <span class="saving-throw-signs">+</span>
                                                <div>
                                                    <label for="">Magic
                                                        <br>Modifier</label>
                                                    <input type="number" value="0" v-model.number="savingThrow.magicModifier">
                                                </div>
                                                <span class="saving-throw-signs">+</span>
                                                <div>
                                                    <label for="">Misc
                                                        <br>Modifier</label>
                                                    <input type="number" value="0" v-model.number="savingThrow.miscModifier">
                                                </div>
                                                <span class="saving-throw-signs">+</span>
                                                <div>
                                                    <label for="">Temporary
                                                        <br>Modifier</label>
                                                    <input type="number" value="0" v-model.number="savingThrow.tempModifier">
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="pure-u-1 pure-u-md-1-5 pure-u-lg-3-24 condition-modifier-container">
                        <label style="display: block; font-size: 60%;">Condition Modifier</label>
                        <textarea class="condition-modifier-area" v-model="character.conditionModifier">
                        </textarea>
                    </div>
                </div>
                <div class="pure-u-lg-15-24">
                    <div class="padding-left">
                        <div class="bab-resistance-container">
                            <div class="pure-u-1 pure-u-md-1-2">
                                <table class="bab-table">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <div class="black-box">
                                                    <span class="health-points-abbreviation">Base Attack Bonus</span>
                                                </div>
                                            </th>
                                            <td>
                                                <input type="text" class="bab-resistance-input" v-model="character.baseAttackBonus">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="pure-u-1 pure-u-md-1-2">
                                <table class="spell-resistance-table">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <div class="black-box">
                                                    <span class="health-points-abbreviation">Spell Resistance</span>
                                                </div>
                                            </th>
                                            <td>
                                                <input type="text" class="bab-resistance-input" v-model="character.spellResistance">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pure-u-1-1 pure-u-lg-15-24">
                    <div class="grapple-container">
                        <table class="grapple-table" style="width: 100%">
                            <tbody>
                                <th>
                                    <div class="black-box">
                                        <span class="health-points-abbreviation">Grapple</span>
                                        <span class="health-points-description">Modifier</span>
                                    </div>
                                </th>
                                <td>
                                    <input type="number" value="0" readonly :value="character.grapple.getTotal()">
                                </td>
                                <td>
                                    <input type="number" value="0" v-model.number="character.grapple.baseAttackBonus">
                                </td>
                                <td>
                                    <input type="number" value="0" v-model.number="character.grapple.strengthModifier">
                                </td>
                                <td>
                                    <input type="number" value="0" v-model.number="character.grapple.sizeModifier">
                                </td>
                                <td>
                                    <input type="number" value="0" v-model.number="character.grapple.miscModifier">
                                </td>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>&nbsp</th>
                                    <th>
                                        <span>Total</span>
                                    </th>
                                    <th>
                                        <span>Base Attack
                                            <br>Bonus</span>
                                    </th>
                                    <th>
                                        <span>Strength
                                            <br>Modifier</span>
                                    </th>
                                    <th>
                                        <span>Size
                                            <br>Modifier</span>
                                    </th>
                                    <th>
                                        <span>Misc
                                            <br>Modifier</span>
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div class="pure-u-1-1 pure-u-lg-15-24">
                    <div class="attacks-container">
                        <div v-for="(attack, index) in character.attacks" :key="index" class="attack-container">
                            <table class="attack-table hidden-sm-down">
                                <thead>
                                    <tr>
                                        <th>
                                            <div class="black-box">
                                                <span class="attack-name">Attack</span>
                                            </div>
                                        </th>
                                        <th>
                                            <div class="black-box">
                                                <span>Attack Bonus</span>
                                            </div>
                                        </th>
                                        <th>
                                            <div class="black-box">
                                                <span>Damage</span>
                                            </div>
                                        </th>
                                        <th>
                                            <div class="black-box">
                                                <span>Critical</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" class="attack-input" v-model="attack.name">
                                        </td>
                                        <td>
                                            <input type="text" class="attack-input" v-model="attack.attackBonus">
                                        </td>
                                        <td>
                                            <input type="text" class="attack-input" v-model="attack.damage">
                                        </td>
                                        <td>
                                            <input type="text" class="attack-input" v-model="attack.critical">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div class="black-box">
                                                <span>Range</span>
                                            </div>
                                            <div class="black-box">
                                                <span>Type</span>
                                            </div>
                                        </th>
                                        <th colspan="3">
                                            <div class="black-box">
                                                <span>Notes</span>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <input type="text" v-model="attack.range">
                                            </div>
                                            <div>
                                                <input type="text" v-model="attack.type">
                                            </div>
                                        </td>
                                        <td colspan="3">
                                            <input type="text" v-model="attack.notes">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4">
                                            <div>
                                                <input type="checkbox">
                                                <label>Ammunition:</label>
                                                <input type="text" class="ammunition-input" v-model="attack.ammunition.name">
                                            </div>
                                            <div>
                                                <label>Notes:</label>
                                                <input type="text" class="ammunition-notes-input" v-model="attack.ammunition.notes">
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>&nbsp</th>
                                    </tr>
                                </tfoot>
                            </table>
                            <table class="attack-table-mobile hidden-sm-up">
                                <tbody>
                                    <tr>
                                        <td colspan="3">
                                            <div class="black-box">
                                                <span class="attack-name">Attack</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <input type="text" class="attack-input" v-model="attack.name">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="black-box">
                                                <span>Attack Bonus</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="black-box">
                                                <span>Damage</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="black-box">
                                                <span>Critical</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" class="attack-input" v-model="attack.attackBonus">
                                        </td>
                                        <td>
                                            <input type="text" class="attack-input" v-model="attack.damage">
                                        </td>
                                        <td>
                                            <input type="text" class="attack-input" v-model="attack.critical">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <div class="black-box">
                                                <span>Range</span>
                                            </div>
                                            <div class="black-box">
                                                <span>Type</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <div>
                                                <input type="text" v-model="attack.range">
                                            </div>
                                            <div>
                                                <input type="text" v-model="attack.type">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <div class="black-box">
                                                <span>Notes</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <div>
                                                <input type="text" v-model="attack.notes">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <div>
                                                <input type="checkbox">
                                                <label>Ammunition:</label>
                                                <input type="text" class="ammunition-input" v-model="attack.ammunition.name">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <div>
                                                <label>Notes:</label>
                                                <input type="text" class="ammunition-notes-input" v-model="attack.ammunition.notes">
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="pure-u-1-1 pure-u-lg-9-24">
                    <div class="skills-container">
                        <div class="padding-box">
                            <table class="skills-table">
                                <thead>
                                    <tr>
                                        <th colspan="6">
                                            <span class="health-points-abbreviation">Skills</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            <span>Skill Name</span>
                                        </th>
                                        <th>
                                            <span>Key
                                                <br>Ability</span>
                                        </th>
                                        <th>
                                            <span>Skill
                                                <br>Modifier</span>
                                        </th>
                                        <th>
                                            <span>Ability
                                                <br>Modifier</span>
                                        </th>
                                        <th>
                                            <span>Ranks</span>
                                        </th>
                                        <th>
                                            <span>Misc
                                                <br>Modifier</span>
                                        </th>
                                    </tr>
                                    <tr v-for="(skill, index) in character.skills" :key="index">
                                        <td>
                                            <input type="checkbox" class="class-skill-input" v-model="skill.classSkill">
                                            <span class="skill-name" :class="{ 'untrained-skill': skill.untrained }">{{skill.name}}</span>
                                            <div v-if="skill.hasSubValue" style="display: inline;">
                                                (
                                                <input type="text" class="skill-subvalue" v-model="skill.subValue">)
                                            </div>
                                        </td>
                                        <td>
                                            <span class="skill-key-ability" :class="{ 'armor-check-penalty': skill.armorCheckPenalty }">{{skill.keyAbility.substr(0,3)}}</span>
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="skill-modifier-input" readonly :value="skill.getTotal()">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="skill-under-input" v-model.number="skill.abilityModifier">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="skill-under-input" v-model.number="skill.rank">
                                        </td>
                                        <td>
                                            <input type="number" value="0" class="skill-under-input" v-model.number="skill.miscModifier">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="caption-container">
                        <span>Mark this box with an X if the skill is a class skill for the character.</span>
                        <span class="untrained-skill">Denotes a skill that can be used untrained.</span>
                        <span class="armor-check-penalty">Armor check penalty, if any applies.
                            <strong>(Double for Swim)</strong>.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="second-page main-container">
            <div class="padding-box">
                <div class="pure-g">
                    <div class="pure-u-lg-1-2 pure-u-1">
                        <div class="left-container">
                            <div class="campaign-container">
                                <input type="text" class="campaign-input">
                                <span class="description-span">Campaign</span>
                            </div>
                            <div class="experience-container">
                                <input type="text" class="experience-input">
                                <span class="description-span">Experience Points</span>
                            </div>
                            <div class="gear-container">
                                <div class="gear-header black-box">
                                    <span class="health-points-abbreviation">Gear</span>
                                </div>
                                <div class="vue-repeater">
                                    <div class="armor-container hidden-sm-down">
                                        <div>
                                            <div class="black-box armor-title" style="height: 20px">
                                                <span class="attack-name">Armor/Protective Item</span>
                                            </div>
                                            <div class="black-box armor-type">
                                                <span>Type</span>
                                            </div>
                                            <div class="black-box armor-bonus">
                                                <span>AC Bonus</span>
                                            </div>
                                            <div class="black-box armor-max-dex">
                                                <span>Max Dex</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="armor-title">
                                                <input type="text" class="full-input" v-model="character.gear.armor.name">
                                            </div>
                                            <div class="armor-type">
                                                <input type="text" class="full-input" v-model="character.gear.armor.type">
                                            </div>
                                            <div class="armor-bonus">
                                                <input type="number" class="full-input" v-model.number="character.gear.armor.acBonus">
                                            </div>
                                            <div class="armor-max-dex">
                                                <input type="text" class="full-input" v-model="character.gear.armor.maxDex">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="black-box armor-penalty">
                                                <span>Check Penalty</span>
                                            </div>
                                            <div class="black-box armor-spell-failure">
                                                <span>Spell Failure</span>
                                            </div>
                                            <div class="black-box armor-speed">
                                                <span>Speed</span>
                                            </div>
                                            <div class="black-box armor-weight">
                                                <span>Weight</span>
                                            </div>
                                            <div class="black-box armor-properties">
                                                <span>Special Properties</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="armor-penalty">
                                                <input class="full-input" type="text" v-model="character.gear.armor.checkPenalty">
                                            </div>
                                            <div class="armor-spell-failure">
                                                <input type="text" class="full-input" v-model="character.gear.armor.spellFailure">
                                            </div>
                                            <div class="armor-speed">
                                                <input type="text" class="full-input" v-model="character.gear.armor.speed">
                                            </div>
                                            <div class="armor-weight">
                                                <input type="text" class="full-input" v-model="character.gear.armor.weight">
                                            </div>
                                            <div class="armor-properties">
                                                <input type="text" class="full-input" v-model="character.gear.armor.specialProperties">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Armor/Protection Mobile -->
                                    <div class="armor-container hidden-sm-up">
                                        <div>
                                            <div class="black-box armor-title">
                                                <span class="attack-name">Armor/Protective Item</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="armor-title">
                                                <input type="text" class="full-input" v-model="character.gear.armor.name">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="black-box armor-type">
                                                <span>Type</span>
                                            </div>
                                            <div class="black-box armor-bonus">
                                                <span>AC Bonus</span>
                                            </div>
                                            <div class="black-box armor-max-dex">
                                                <span>Max Dex</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="armor-type">
                                                <input type="text" class="full-input" v-model="character.gear.armor.type">
                                            </div>
                                            <div class="armor-bonus">
                                                <input type="number" class="full-input" v-model.number="character.gear.armor.acBonus">
                                            </div>
                                            <div class="armor-max-dex">
                                                <input type="number" class="full-input" v-model.number="character.gear.armor.maxDex">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="black-box armor-penalty">
                                                <span>Check Penalty</span>
                                            </div>
                                            <div class="black-box armor-spell-failure">
                                                <span>Spell Failure</span>
                                            </div>
                                            <div class="black-box armor-speed">
                                                <span>Speed</span>
                                            </div>
                                            <div class="black-box armor-weight">
                                                <span>Weight</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="armor-penalty">
                                                <input type="text" class="full-input" v-model="character.gear.armor.checkPenalty">
                                            </div>
                                            <div class="armor-spell-failure">
                                                <input type="text" class="full-input" v-model="character.gear.armor.spellFailure">
                                            </div>
                                            <div class="armor-speed">
                                                <input type="text" class="full-input" v-model="character.gear.armor.speed">
                                            </div>
                                            <div class="armor-weight">
                                                <input type="text" class="full-input" v-model="character.gear.armor.weight">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="black-box armor-properties">
                                                <span class="attack-name">Special Properties</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="armor-properties">
                                                <input type="text" class="full-input" v-model="character.gear.armor.specialProperties">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="vue-repeater">
                                    <div class="shield-container hidden-sm-down">
                                        <div>
                                            <div class="black-box shield-title">
                                                <span class="attack-name">Shield/Protective Item</span>
                                            </div>
                                            <div class="black-box shield-bonus">
                                                <span>AC Bonus</span>
                                            </div>
                                            <div class="black-box shield-weight">
                                                <span>Weight</span>
                                            </div>
                                            <div class="black-box shield-penalty">
                                                <span>Check Penalty</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="shield-title">
                                                <input type="text" class="full-input" v-model="character.gear.shield.name">
                                            </div>
                                            <div class="shield-bonus">
                                                <input type="number" class="full-input" v-model.number="character.gear.shield.acBonus">
                                            </div>
                                            <div class="shield-weight">
                                                <input type="text" class="full-input" v-model="character.gear.shield.weight">
                                            </div>
                                            <div class="shield-penalty">
                                                <input type="text" class="full-input" v-model="character.gear.shield.checkPenalty">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="black-box shield-spell-failure">
                                                <span>Spell Failure</span>
                                            </div>
                                            <div class="black-box shield-properties">
                                                <span>Shield Properties</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="shield-spell-failure">
                                                <input type="text" class="full-input" v-model="character.gear.shield.spellFailure">
                                            </div>
                                            <div class="shield-properties">
                                                <input type="text" class="full-input" v-model="character.gear.shield.specialProperties">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Shield/Protection Mobile-->
                                    <div class="shield-container hidden-sm-up">
                                        <div>
                                            <div class="black-box shield-title">
                                                <span class="attack-name">Shield/Protective Item</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="shield-title">
                                                <input type="text" class="full-input" v-model="character.gear.shield.name">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="black-box shield-bonus">
                                                <span>AC Bonus</span>
                                            </div>
                                            <div class="black-box shield-weight">
                                                <span>Weight</span>
                                            </div>
                                            <div class="black-box shield-penalty">
                                                <span>Check Penalty</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="shield-bonus">
                                                <input type="number" class="full-input" v-model.number="character.gear.shield.acBonus">
                                            </div>
                                            <div class="shield-weight">
                                                <input type="text" class="full-input" v-model="character.gear.shield.weight">
                                            </div>
                                            <div class="shield-penalty">
                                                <input type="text" class="full-input" v-model="character.gear.shield.checkPenalty">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="black-box shield-spell-failure">
                                                <span>Spell Failure</span>
                                            </div>
                                            <div class="black-box shield-properties">
                                                <span>Shield Properties</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="shield-spell-failure">
                                                <input type="text" class="full-input" v-model="character.gear.shield.spellFailure">
                                            </div>
                                            <div class="shield-properties">
                                                <input type="text" class="full-input" v-model="character.gear.shield.specialProperties">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="vue-repeater" v-for="(protectiveItem, index) in character.gear.protectiveItems" :key="index">
                                    <div class="protective-item-container hidden-sm-down">
                                        <div>
                                            <div class="black-box protective-item-title">
                                                <span class="attack-name">Protective Item</span>
                                            </div>
                                            <div class="black-box protective-item-bonus">
                                                <span>AC Bonus</span>
                                            </div>
                                            <div class="black-box protective-item-weight">
                                                <span>Weight</span>
                                            </div>
                                            <div class="black-box protective-item-properties">
                                                <span>Special Properties</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="protective-item-title">
                                                <input type="text" class="full-input" v-model="protectiveItem.name">
                                            </div>
                                            <div class="protective-item-bonus">
                                                <input type="number" class="full-input" v-model.number="protectiveItem.acBonus">
                                            </div>
                                            <div class="protective-item-weight">
                                                <input type="text" class="full-input" v-model="protectiveItem.weight">
                                            </div>
                                            <div class="protective-item-properties">
                                                <input type="text" class="full-input" v-model="protectiveItem.specialProperties">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Protective Item Mobile -->
                                    <div class="protective-item-container hidden-sm-up">
                                        <div>
                                            <div class="black-box protective-item-title">
                                                <span class="attack-name">Protective Item</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="protective-item-title">
                                                <input type="text" class="full-input" v-model="protectiveItem.name">
                                            </div>
                                        </div>
                                        <div>
                                            <div class="black-box protective-item-bonus">
                                                <span>AC Bonus</span>
                                            </div>
                                            <div class="black-box protective-item-weight">
                                                <span>Weight</span>
                                            </div>
                                            <div class="black-box protective-item-properties">
                                                <span>Special Properties</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="protective-item-bonus">
                                                <input type="number" class="full-input" v-model.number="protectiveItem.acBonus">
                                            </div>
                                            <div class="protective-item-weight">
                                                <input type="text" class="full-input" v-model="protectiveItem.weight">
                                            </div>
                                            <div class="protective-item-properties">
                                                <input type="text" class="full-input" v-model="protectiveItem.specialProperties">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="possessions-container">
                                D
                            </div>
                        </div>
                    </div>
                    <div class="pure-u-1-2 pure-sm-u-1">
                        <div class="pure-u-2-5">
                            E
                        </div>
                        <div class="pure-u-3-5">
                            F
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>