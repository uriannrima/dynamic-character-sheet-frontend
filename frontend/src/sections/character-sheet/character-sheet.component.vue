<script>

import CharacterService from 'Services/character.service';

export default {
    data: function () {
        return {
            character: CharacterService.new()
        };
    },
    computed: {
        classLevel: {
            get: function () {

            },
            set: function () {

            }
        }
    }
};
</script>
<template>
    <div class="main-container">
        <div class="pure-g">
            <div class="description-container">
                <div class="pure-u-md-1-1 hidden-lg-up">
                    <img src="assets/images/dnd-logo.png" alt="" width="100%" height="100%">
                </div>
                <div class="pure-u-md-1-2 pure-u-lg-1-3">
                    <div class="pure-g">
                        <div class="pure-u-1-1">
                            <div class="padding-box">
                                <input type="text" class="description-field" v-model="character.name">
                                <span class="description-span">Character Name</span>
                            </div>
                        </div>
                        <div class="pure-u-1-1">
                            <div class="padding-box">
                                <input type="text" class="description-field" :classLevel="c">
                                <span class="description-span">Class And Level</span>
                            </div>
                        </div>
                        <div class="pure-u-1-4">
                            <div class="padding-box">
                                <input type="text" class="description-field">
                                <span class="description-span">Size</span>
                            </div>
                        </div>
                        <div class="pure-u-1-4">
                            <div class="padding-box">
                                <input type="text" class="description-field">
                                <span class="description-span">Age</span>
                            </div>
                        </div>
                        <div class="pure-u-1-4">
                            <div class="padding-box">
                                <input type="text" class="description-field">
                                <span class="description-span">Gender</span>
                            </div>
                        </div>
                        <div class="pure-u-1-4">
                            <div class="padding-box">
                                <input type="text" class="description-field">
                                <span class="description-span">Height</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pure-u-md-1-2 pure-u-lg-1-3">
                    <div class="pure-g">
                        <div class="pure-u-1-1">
                            <div class="padding-box">
                                <input type="text" class="description-field">
                                <span class="description-span">Player Name</span>
                            </div>
                        </div>
                        <div class="pure-u-1-3">
                            <div class="padding-box">
                                <input type="text" class="description-field">
                                <span class="description-span">Race</span>
                            </div>
                        </div>
                        <div class="pure-u-1-3">
                            <div class="padding-box">
                                <input type="text" class="description-field">
                                <span class="description-span">Alignment</span>
                            </div>
                        </div>
                        <div class="pure-u-1-3">
                            <div class="padding-box">
                                <input type="text" class="description-field">
                                <span class="description-span">Deity</span>
                            </div>
                        </div>
                        <div class="pure-u-1-4">
                            <div class="padding-box">
                                <input type="text" class="description-field">
                                <span class="description-span">Weight</span>
                            </div>
                        </div>
                        <div class="pure-u-1-4">
                            <div class="padding-box">
                                <input type="text" class="description-field">
                                <span class="description-span">Eyes</span>
                            </div>
                        </div>
                        <div class="pure-u-1-4">
                            <div class="padding-box">
                                <input type="text" class="description-field">
                                <span class="description-span">Hair</span>
                            </div>
                        </div>
                        <div class="pure-u-1-4">
                            <div class="padding-box">
                                <input type="text" class="description-field">
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
                                        <input type="number" value="10" class="ability-score-field">
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <input type="number" value="0" class="ability-score-field">
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <input type="number" value="10" class="ability-score-field">
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <input type="number" value="0" class="ability-score-field">
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
                                        <input type="number" value="0" class="health-points-field">
                                    </div>
                                </td>
                                <td style="width: 30%">
                                    <div>
                                        <input type="text" class="wounds-field">
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <input type="text" class="non-lethal-field">
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <input type="text" class="speed-field">
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
                                <input type="number" value="0" style="width: 50%">
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
                                <input type="text" style="width: 50%">
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
                                <input type="text" style="width: 50%">
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
                                <input type="text" style="width: 50%">
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
                                    <input type="number" value="10" class="health-points-field">
                                </td>
                                <td>
                                    <span class="armor-base-value">= 10 +</span>
                                </td>
                                <td>
                                    <input type="number" value="0" class="health-points-field">
                                </td>
                                <td>
                                    <input type="number" value="0" class="health-points-field">
                                </td>
                                <td>
                                    <input type="number" value="0" class="health-points-field">
                                </td>
                                <td>
                                    <input type="number" value="0" class="health-points-field">
                                </td>
                                <td>
                                    <input type="number" value="0" class="health-points-field">
                                </td>
                                <td>
                                    <input type="number" value="0" class="health-points-field">
                                </td>
                                <td>
                                    <input type="number" value="0" class="health-points-field">
                                </td>
                                <td style="width:15%">
                                    <input type="text" class="damage-reduction-field">
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
                                            <input type="number" value="10" class="health-points-field total-health-points-field">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="number" value="0" class="health-points-field">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field">
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
                                                        <input type="number" value="0" class="health-points-field">
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
                                                    <input type="number" value="0" class="health-points-field">
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
                                        <input type="number" value="0" class="health-points-field">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field">
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
                                                <input type="number" value="0" class="health-points-field">
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
                                            <input type="number" value="0" class="health-points-field">
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
                                        <input type="number" value="0" class="health-points-field">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="health-points-field">
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
                                        <input type="number" value="0">
                                    </div>
                                    <span class="saving-throw-signs">=</span>
                                    <div>
                                        <label v-if="index == 0" for="">Base
                                            <br>Save</label>
                                        <input type="number" value="0">
                                    </div>
                                    <span class="saving-throw-signs">+</span>
                                    <div>
                                        <label v-if="index == 0" for="">Ability
                                            <br>Modifier</label>
                                        <input type="number" value="0">
                                    </div>
                                    <span class="saving-throw-signs">+</span>
                                    <div>
                                        <label v-if="index == 0" for="">Magic
                                            <br>Modifier</label>
                                        <input type="number" value="0">
                                    </div>
                                    <span class="saving-throw-signs">+</span>
                                    <div>
                                        <label v-if="index == 0" for="">Misc
                                            <br>Modifier</label>
                                        <input type="number" value="0">
                                    </div>
                                    <span class="saving-throw-signs">+</span>
                                    <div>
                                        <label v-if="index == 0" for="">Temporary
                                            <br>Modifier</label>
                                        <input type="number" value="0">
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
                                                <input type="number" value="0">
                                            </div>
                                            <span class="saving-throw-signs">=</span>
                                            <div>
                                                <label for="">Base
                                                    <br>Save</label>
                                                <input type="number" value="0">
                                            </div>
                                            <span class="saving-throw-signs">+</span>
                                            <div>
                                                <label for="">Ability
                                                    <br>Modifier</label>
                                                <input type="number" value="0">
                                            </div>
                                            <span class="saving-throw-signs">+</span>
                                            <div>
                                                <label for="">Magic
                                                    <br>Modifier</label>
                                                <input type="number" value="0">
                                            </div>
                                            <span class="saving-throw-signs">+</span>
                                            <div>
                                                <label for="">Misc
                                                    <br>Modifier</label>
                                                <input type="number" value="0">
                                            </div>
                                            <span class="saving-throw-signs">+</span>
                                            <div>
                                                <label for="">Temporary
                                                    <br>Modifier</label>
                                                <input type="number" value="0">
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
                    <textarea class="condition-modifier-area">
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
                                            <input type="text" class="bab-resistance-input">
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
                                            <input type="text" class="bab-resistance-input">
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
                                <input type="number" value="0">
                            </td>
                            <td>
                                <input type="number" value="0">
                            </td>
                            <td>
                                <input type="number" value="0">
                            </td>
                            <td>
                                <input type="number" value="0">
                            </td>
                            <td>
                                <input type="number" value="0">
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
                                        <input type="text" class="attack-input">
                                    </td>
                                    <td>
                                        <input type="text" class="attack-input">
                                    </td>
                                    <td>
                                        <input type="text" class="attack-input">
                                    </td>
                                    <td>
                                        <input type="text" class="attack-input">
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
                                            <input type="text">
                                        </div>
                                        <div>
                                            <input type="text">
                                        </div>
                                    </td>
                                    <td colspan="3">
                                        <input type="text">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <div>
                                            <input type="checkbox">
                                            <label>Ammunition:</label>
                                            <input type="text" class="ammunition-input">
                                        </div>
                                        <div>
                                            <label>Notes:</label>
                                            <input type="text" class="ammunition-notes-input">
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
                                        <input type="text" class="attack-input">
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
                                        <input type="text" class="attack-input">
                                    </td>
                                    <td>
                                        <input type="text" class="attack-input">
                                    </td>
                                    <td>
                                        <input type="text" class="attack-input">
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
                                            <input type="text">
                                        </div>
                                        <div>
                                            <input type="text">
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
                                            <input type="text">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div>
                                            <input type="checkbox">
                                            <label>Ammunition:</label>
                                            <input type="text" class="ammunition-input">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div>
                                            <label>Notes:</label>
                                            <input type="text" class="ammunition-notes-input">
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
                                        <input type="checkbox" class="class-skill-input">
                                        <span class="skill-name" :class="{ 'untrained-skill': skill.untrained }">{{skill.name}}</span>
                                        <div v-if="skill.subValue" style="display: inline;">
                                            (
                                            <input type="text" class="skill-subvalue">)
                                        </div>
                                    </td>
                                    <td>
                                        <span class="skill-key-ability" :class="{ 'armor-check-penalty': skill.armorCheckPenalty }">{{skill.keyAbility.substr(0,3)}}</span>
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="skill-modifier-input">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="skill-under-input">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="skill-under-input">
                                    </td>
                                    <td>
                                        <input type="number" value="0" class="skill-under-input">
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
</template>