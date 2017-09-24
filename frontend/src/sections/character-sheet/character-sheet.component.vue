<script>
import CharacterService from 'Services/character.service';
import SizeService from 'Services/size.service';
import RaceService from 'Services/race.service';
import AlignmentService from 'Services/alignment.service';
import ExporterService from 'Services/exporter.service';
import DcsFeatModal from './modals/feat.modal.component';
import DcsSpellModal from './modals/spell.modal.component';
import DcsSpecialAbilityModal from './modals/special-ability.modal.component';
import DcsSkillModal from './modals/skill.modal.component';

export default {
    components: { DcsFeatModal, DcsSpellModal, DcsSpecialAbilityModal, DcsSkillModal },
    data: function() {
        return {
            sheetPage: 1,
            show: {
                skillModal: false,
                featModal: false,
                spellModal: false,
                specialAbilityModal: false,
                spells: [...Array(10).keys()].map(i => {
                    return {
                        collapse: false
                    }
                })
            },
            selected: {
                skill: null,
                feat: null,
                spell: null,
                specialAbility: null
            },
            character: CharacterService.new(),
            allSizes: SizeService.getAll(),
            allRaces: RaceService.getAll(),
            allAlignments: AlignmentService.getAll(),
            // Create items grid with 17 rows and 2 columns.
            itemsGrid: [...Array(17).keys()].map(i => [...Array(2).keys()].map(i => new Object())),
            spellLevels: _.range(10)
        };
    },
    watch: {
        // Maybe find out a better way, but so far, it's what we've got.
        "character.abilityScores": {
            deep: true,
            handler: function(oldV, newV) {
                this.character.updateAbilityScore();
            }
        }
    },
    computed: {
        characterSkills: function() {
            return _.sortBy(this.character.skills, skill => skill.name);
        },
        /** A combination of character classes. */
        classesCombined: {
            get: function() {
                return this.character.classes.map(classe => {
                    if (!classe.name || !classe.level) return "";
                    return classe.name + " (" + classe.level + ")";
                });
            },
            set: function(newValue) {
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
                        name: classOnly.trim(),
                        level: level
                    });
                });
            }
        },
        /** A combination of the character feats. */
        featsCombined: {
            get: function() {
                return this.character.feats.map(feat => {
                    if (!feat) return "";
                    return feat;
                });
            },
            set: function(newValue) {
                this.character.feats = [];
                const newFeats = newValue.split(',');
                newFeats.forEach(newFeat => {
                    this.character.feats.push(newFeat);
                });
            }
        },
        /** A combination of the character languages. */
        languagesCombined: {
            get: function() {
                return this.character.languages.map((language, index) => {
                    if (!language) return "";
                    return index > 0 ? " " + language : language;
                });
            },
            set: function(newValue) {
                this.character.languages = [];
                const newLanguages = newValue.split(',');
                newLanguages.forEach(newLanguage => {
                    this.character.languages.push(newLanguage.trim());
                });
            }
        },
        spellsCombined: {
            get: function() {
                return this.character.spellList.map((spell, index) => {
                    if (!spell) return "";
                    return index > 0 ? " " + spell : spell;
                });
            },
            set: function(newValue) {
                this.character.spellList = [];
                const newSpells = newValue.split(',');
                newSpells.forEach(newSpell => {
                    this.character.spellList.push(newSpell.trim());
                });
            }
        },
        /** Calculated value of total weight carried by the character. */
        totalWeightCarried: function() {
            var value = this.character.items.map(i => i.weight).reduce((prev, next) => prev + next)
            return value.toPrecision(3);
        }
    },
    methods: {
        range: function(from, to) {
            return _.range(from, to);
        },
        updateTemporaryScore: function(abilityScore) {
            abilityScore.tempValue = abilityScore.value;
        },
        addNewFeat: function(featAdded) {
            CharacterService.addFeat(this.character, featAdded).then(feat => {
                console.debug(feat);
                this.character.feats.push(feat);
            });
        },
        addNewSpell: function(spellAdded) {
            var spellList = _.filter(this.character.spellLists, o => o.level == spellAdded.level)[0];
            spellList.spells.push(spellAdded);
        },
        addNewSpecialAbility: function(specialAbilityAdded) {
            console.log(specialAbilityAdded);
        },
        addNewSkill: function(skillAdded) {
            this.character.skills.push(skillAdded);
        },
        removeFeat: function(featId) {
            CharacterService.removeFeat(this.character, featId).then(character => {
                this.character.feats = this.character.feats.filter(feat => feat._id != featId);
            });
        },
        removeSpell: function(spellRemoved) {
            var spellList = _.filter(this.character.spellLists, o => o.level == spellRemoved.level)[0];
            var spellIndex = _.findIndex(spellList.spells, spell => spell._id == spellRemoved._id);
            spellList.spells.splice(spellIndex, 1);
        },
        removeSpecialAbility: function(specialAbilityRemoved) {
            console.log(specialAbilityRemoved);
        },
        removeSkill: function(skillRemoved) {
            console.log(skillRemoved);
        },
        featType: function(feat) {
            return "feat-" + feat.type.toLowerCase().replace(' ', '-');
        },
        spellSchool: function(spell) {
            return "spell-" + spell.school.toLowerCase().replace(' ', '-');
        },
        getFeatTooltip: function(feat) {
            var tooltip = "";
            tooltip += feat.title + " [" + feat.type + "]";

            if (feat.prerequisite) tooltip += "\n\nPrerequisite: " + feat.prerequisite;
            if (feat.benefit) tooltip += "\n\nBenefit: " + feat.benefit;
            if (feat.normal) tooltip += "\n\nNormal: " + feat.normal;
            if (feat.special) tooltip += "\n\nSpecial: " + feat.special;

            return tooltip;
        },
        getSpellTooltip: function(spell) {
            var tooltip = "";
            tooltip += spell.name + " [" + spell.school + "]";
            tooltip += "\n\nLevel: " + spell.level;

            return tooltip;
        },
        openFeatDescription: function(feat) {
            this.selected.feat = feat;
            this.show.featModal = true;
        },
        openSpellDescription: function(spell) {
            this.selected.spell = spell;
            this.show.spellModal = true;
        },
        updateCharacterItem: function(rowIndex, columnIndex) {
            var gridItem = this.itemsGrid[rowIndex][columnIndex];
            var characterItem = this.character.items[rowIndex + (this.itemsGrid.length * columnIndex)];
            ({
                name: characterItem.name,
                page: characterItem.page,
                weight: characterItem.weight,
            } = gridItem);
        },
        loadCharacter: function(character) {
            this.character = character;
            this.loadItemsToGrid(character.items);
        },
        loadItemsToGrid: function(itemArray) {
            for (var index = 0; index < itemArray.length; index++) {
                const rowIndex = index % this.itemsGrid.length;
                const columnIndex = Math.floor(index / this.itemsGrid.length);
                var gridItem = this.itemsGrid[rowIndex][columnIndex];
                var charItem = itemArray[index];
                ({
                    name: gridItem.name,
                    page: gridItem.page,
                    weight: gridItem.weight,
                } = charItem);
            }
        },
        saveOrUpdate: function() {
            CharacterService.saveOrUpdate(this.character).then(data => {
                this.character._id = data._id;
                window.history.pushState("", "", '/#/character/' + this.character._id);
            });
        },
        exportCharacter: function() {
            this.saveOrUpdate();
            var fileName = this.character.name || this.character._id;
            fileName += '.json';
            ExporterService.exportText(this.character, fileName);
        },
        importCharacter: function() {
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
                    vm.loadCharacter(character);
                });
            });
        } else {
            next(vm => {
                vm.loadCharacter(CharacterService.new());
            });
        }
    }
};
</script>
<template>
    <div>
        <div class="main-container">
            <div class="character-sheet-panels">
                <button @click="sheetPage = 1">Front</button>
                <button @click="sheetPage = 2">Cover</button>
                <button @click="sheetPage = -1">All</button>
            </div>
            <div id="character-sheet" class="character-sheet">
                <div v-if="sheetPage == 1 || sheetPage == -1" class="first-page">
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
                                                    <input type="number" value="10" class="ability-score-field" v-model.number="abilityScore.value" @change="updateTemporaryScore(abilityScore)">
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
                                            <input type="text" style="width: 50%; text-align: center" v-model="character.speed">
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
                                    <table class="attack-table-mobile hidden-sm-up" v-if="attack.name">
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
                                                    <span class="add-skill-icon glyphicon glyphicon-plus" @click="show.skillModal = true"></span>
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
                                            <tr v-for="(skill, index) in characterSkills" :key="index">
                                                <td>
                                                    <input type="checkbox" class="class-skill-input" v-model="skill.classSkill">
                                                    <span class="skill-name" :class="{ 'untrained-skill': skill.untrained }">{{skill.name}}</span>
                                                    <div class="subvalue-container" v-if="skill.hasSubValue" style="display: inline;">
                                                        <input type="text" class="skill-subvalue" v-model="skill.subValue">
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
                <div v-if="sheetPage == 2 || sheetPage == -1" class="second-page">
                    <div class="padding-box">
                        <div class="pure-g">
                            <div class="pure-u-lg-1-2 pure-u-1">
                                <div class="left-container">
                                    <div class="campaign-container">
                                        <input type="text" class="campaign-input" v-model="character.campaign">
                                        <span class="description-span">Campaign</span>
                                    </div>
                                    <div class="experience-container">
                                        <input type="number" class="experience-input" v-model.number="character.experience">
                                        <span class="description-span">Experience Points</span>
                                    </div>
                                    <div class="gear-container">
                                        <div class="gear-header black-box">
                                            <span class="health-points-abbreviation">Gear</span>
                                        </div>
                                        <div class="vue-repeater">
                                            <div class="armor-equipped-container hidden-sm-down">
                                                <div>
                                                    <div class="black-box armor-title">
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
                                                        <input type="number" class="full-input" v-model="character.gear.armor.maxDex">
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
                                            <div class="armor-equipped-container hidden-sm-up">
                                                <div>
                                                    <div class="black-box armor-title test">
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
                                        <div class="possessions-header black-box">
                                            <span class="health-points-abbreviation">Other Possessions</span>
                                        </div>
                                        <div class="dual-possession">
                                            <div class="single-possession">
                                                <div class="item-header">
                                                    <div class="item-title">
                                                        <span>Item</span>
                                                    </div>
                                                    <div class="item-page">
                                                        <span>Pg.</span>
                                                    </div>
                                                    <div class="item-weight">
                                                        <span>Wt.</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-possession">
                                                <div class="item-header">
                                                    <div class="item-title">
                                                        <span>Item</span>
                                                    </div>
                                                    <div class="item-page">
                                                        <span>Pg.</span>
                                                    </div>
                                                    <div class="item-weight">
                                                        <span>Wt.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dual-possession" v-for="(itemRow, rowIndex) in itemsGrid" :key="rowIndex">
                                            <div class="single-possession" v-for="(itemColumn, columnIndex) in itemRow" :key="columnIndex" v-if="rowIndex != (itemsGrid.length - 1) || columnIndex != (itemsGrid[0].length - 1)">
                                                <div class="item-header">
                                                    <div class="item-title">
                                                        <input type="text" class="full-input item-input" v-model="itemColumn.name" @change="updateCharacterItem(rowIndex, columnIndex)">
                                                    </div>
                                                    <div class="item-page">
                                                        <input type="number" class="full-input item-input" v-model.number="itemColumn.page" @change="updateCharacterItem(rowIndex, columnIndex)">
                                                    </div>
                                                    <div class="item-weight">
                                                        <input type="number" class="full-input item-input" v-model.number="itemColumn.weight" @change="updateCharacterItem(rowIndex, columnIndex)">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-possession" v-else>
                                                <div class="item-header">
                                                    <div class="item-title">
                                                        <span class="total-weight-carried">Total Weight Carried</span>
                                                    </div>
                                                    <div class="total-weight">
                                                        <input type="number" class="full-input total-weight-input" readonly :value="totalWeightCarried">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="load-container">
                                            <div>
                                                <div>
                                                    <input type="number" class="full-input" v-model.number="character.carryCapacity.lightLoad">
                                                    <span class="load-span">Light<br>Load</span>
                                                </div>
                                                <div>
                                                    <input type="number" class="full-input" v-model.number="character.carryCapacity.mediumLoad">
                                                    <span class="load-span">Medium<br>Load</span>
                                                </div>
                                                <div>
                                                    <input type="number" class="full-input" v-model.number="character.carryCapacity.heavyLoad">
                                                    <span class="load-span">Heavy<br>Load</span>
                                                </div>
                                                <div>
                                                    <input type="number" class="full-input" v-model.number="character.carryCapacity.liftOverHead">
                                                    <span class="load-span">Lift Over<br>Head</span>
                                                    <span class="load-span-sm">Equals<br>Max Load</span>
                                                </div>
                                                <div>
                                                    <input type="number" class="full-input" v-model.number="character.carryCapacity.liftOffGround">
                                                    <span class="load-span">Lift Off<br>Ground</span>
                                                    <span class="load-span-sm">2 x<br>Max Load</span>
                                                </div>
                                                <div>
                                                    <input type="number" class="full-input" v-model.number="character.carryCapacity.pushOrDrag">
                                                    <span class="load-span">Push or<br>Drag</span>
                                                    <span class="load-span-sm">5 x<br>Max Load</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="money-container">
                                            <div class="money-header black-box">
                                                <span class="health-points-abbreviation">Money</span>
                                            </div>
                                            <div style="display: flex">
                                                <div class="coins-container" style="width: 50%">
                                                    <div>
                                                        <span class="coin-span" title="Cooper Coins">CP —</span>
                                                        <input type="number" class="coin-input" v-model.number="character.money.copper">
                                                    </div>
                                                    <div>
                                                        <span class="coin-span" title="Silver Coins = 10 Cooper Coins">SP —</span>
                                                        <input type="number" class="coin-input" v-model.number="character.money.silver">
                                                    </div>
                                                    <div>
                                                        <span class="coin-span" title="Gold Coins = 10 Silver Coins">GP —</span>
                                                        <input type="number" class="coin-input" v-model.number="character.money.gold">
                                                    </div>
                                                    <div>
                                                        <span class="coin-span" title="Platinum Coins = 100 Gold Coins">PP —</span>
                                                        <input type="number" class="coin-input" v-model.number="character.money.platinum">
                                                    </div>
                                                </div>
                                                <div class="treasure-container" style="width: 50%">
                                                    <textarea class="treasure-area" v-model="character.money.treasure"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pure-u-lg-1-2 pure-u-1">
                                <div class="pure-g">
                                    <div class="pure-u-lg-2-5 pure-u-1">
                                        <div class="feats-container">
                                            <div class="feats-header black-box">
                                                <span class="health-points-abbreviation">Feats</span>
                                                <span class="add-feat-icon glyphicon glyphicon-plus" @click="show.featModal = true"></span>
                                            </div>
                                            <div class="feats-area">
                                                <span class="feat" :class="featType(feat)" v-for="(feat, index) in character.feats" :key="index" :title="getFeatTooltip(feat)"
                                                    @click="openFeatDescription(feat)">{{feat.title}}
                                                    <small v-if="feat.hasSubValue">({{feat.subValue.value}})</small>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="special-abilities-container">
                                            <div class="special-abilities-header black-box">
                                                <span class="health-points-abbreviation">Special Abilities</span>
                                                <span class="add-special-ability-icon glyphicon glyphicon-plus" @click="show.specialAbilityModal = true"></span>
                                            </div>
                                            <textarea class="special-abilities-area" v-model.lazy="character.specialAbilities">
                                            </textarea>
                                        </div>
                                        <div class="languages-container">
                                            <div class="languages-header black-box">
                                                <span class="health-points-abbreviation">Languages</span>
                                            </div>
                                            <span class="languages-note">Initial languages = Common + racial languagues + one per point of Int bonus</span>
                                            <textarea class="languages-area" v-model.lazy="languagesCombined">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="pure-u-lg-3-5 pure-u-1">
                                        <div class="third-region">
                                            <div class="spells-container">
                                                <div class="spells-header black-box">
                                                    <span class="health-points-abbreviation">Spells</span>
                                                    <span class="add-spell-icon glyphicon glyphicon-plus" @click="show.spellModal = true"></span>
                                                </div>
                                                <span class="spells-note">Domains/Specialty School</span>
                                                <input type="text" class="domain-specialty-school" v-model="character.domainSchool">
                                                <div class="spells-area">
                                                    <div v-for="(spellList, index) in character.spellLists" v-if="spellList.spells.length > 0" :key="spellList" class="spell-list-container"
                                                        :class="{ 'spell-list-container-collapsed' : show.spells[index].collapse}">
                                                        <span @click="show.spells[index].collapse = !show.spells[index].collapse">{{spellList.level}}th: </span>
                                                        <span class="spell" :class="spellSchool(spell)" v-for="spell in spellList.spells" :key="spell" @click="openSpellDescription(spell)"
                                                            :title="getSpellTooltip(spell)">{{spell.name}}</span>
                                                    </div>
                                                </div>
                                                <!-- textarea class="spells-area" v-model.lazy="spellsCombined">
                                                                                                                                                    </textarea -->
                                            </div>
                                            <div class="spell-save-container">
                                                <div class="spell-save-header black-box">
                                                    <span class="health-points-abbreviation">Spell Save</span>
                                                </div>
                                                <input class="spell-save-input" type="number" v-model="character.spellSave">
                                            </div>
                                            <div class="arcane-spell-failure-container">
                                                <div class="arcane-spell-failure-header black-box">
                                                    <span class="health-points-abbreviation">Arcane Spell Failure</span>
                                                </div>
                                                <input class="arcane-spell-failure-input" type="number" v-model="character.arcaneSpellFailure">
                                                <span>%</span>
                                            </div>
                                            <div class="spell-condition-modifiers-container">
                                                <span class="spell-condition-modifiers-span" v-if="!character.spellConditionModifier">Conditional Modifiers</span>
                                                <textarea class="spell-condition-modifier-area" v-model="character.spellConditionModifier">
                                                </textarea>
                                            </div>
                                            <div class="daily-spells-container">
                                                <table class="daily-spells-table">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <span class="spells-known">Spells<br>Known</span>
                                                            </th>
                                                            <th>
                                                                <span class="spell-save-dc">Spell<br>Save DC</span>
                                                            </th>
                                                            <th>
                                                                <span class="spell-level">Level</span>
                                                            </th>
                                                            <th>
                                                                <span class="spells-per-day">Spells<br>Per Day</span>
                                                            </th>
                                                            <th>
                                                                <span class="bonus-spells">Bonus<br>Spells</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="perDay in character.spellPerDayList" :key="perDay.spellLevel">
                                                            <td>
                                                                <input class="spells-known-input" type="number" v-model="perDay.spellsKnown">
                                                            </td>
                                                            <td>
                                                                <input class="spell-save-dc-input" type="number" v-model="perDay.spellSaveDC">
                                                            </td>
                                                            <td>
                                                                <label v-if="perDay.spellLevel == 0" class="spell-level-label">0</label>
                                                                <label v-if="perDay.spellLevel == 1" class="spell-level-label">1st</label>
                                                                <label v-if="perDay.spellLevel == 2" class="spell-level-label">2nd</label>
                                                                <label v-if="perDay.spellLevel == 3" class="spell-level-label">3rd</label>
                                                                <label v-if="perDay.spellLevel > 3" class="spell-level-label">{{perDay.spellLevel}}th</label>
                                                            </td>
                                                            <td>
                                                                <input class="spells-per-day-input" type="number" v-model="perDay.spellsPerDay">
                                                            </td>
                                                            <td>
                                                                <label v-if="perDay.spellLevel == 0">0</label>
                                                                <input v-else class="bonus-spells-input" type="number" v-model="perDay.bonusSpells">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <dcs-feat-modal :show.sync="show.featModal" :describe-feat.sync="selected.feat" :character-feats="character.feats" @onFeatAdded="addNewFeat"
                @onFeatRemoved="removeFeat"></dcs-feat-modal>
            <dcs-spell-modal :show.sync="show.spellModal" :describe-spell.sync="selected.spell" :character-spells="character.spellLists"
                @onSpellAdded="addNewSpell" @onSpellRemoved="removeSpell"></dcs-spell-modal>
            <dcs-special-ability-modal :show.sync="show.specialAbilityModal" :describe-special-ability.sync="selected.specialAbility"
                :character-special-abilities="character.specialAbilities" @onSpecialAbilityAdded="addNewSpecialAbility" @onSpecialAbilityRemoved="removeSpecialAbility"></dcs-special-ability-modal>
            <dcs-skill-modal :show.sync="show.skillModal" :describe-special-ability.sync="selected.skill"
                :character-special-abilities="character.skills" @onSkillAdded="addNewSkill" @onSkillRemoved="removeSkill"></dcs-skill-modal>
            <div class="controls-container">
                <button @click="saveOrUpdate">Salvar</button>
                <!-- button @click="exportCharacter">Exportar</button>
                        <button @click="importCharacter">Importar</button>
                        <input id="importField" type="file" -->
            </div>
        </div>
    </div>
</template>
