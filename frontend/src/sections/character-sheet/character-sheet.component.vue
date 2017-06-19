<script>
import DcsDescription from './components/description.component';
import DcsAbilityScoreList from './components/ability-score-list.component';
import DcsStatus from './components/status.component';
import DcsArmor from './components/armor.component';
import DcsMisc from './components/misc.component';
import DcsSavingThrows from './components/saving-throws.component';
import DcsBab from './components/bab.component';
import DcsGrapple from './components/grapple.component';
import DcsAttacksList from './components/attacks-list.component';
import DcsSkillsList from './components/skills-list.component';

import CharacterService from 'Services/character.service';

export default {
    components: {
        DcsDescription, DcsAbilityScoreList,
        DcsStatus, DcsArmor,
        DcsMisc, DcsSavingThrows,
        DcsBab, DcsGrapple,
        DcsAttacksList, DcsSkillsList
    },
    data: function () {
        return {
            character: CharacterService.empty()
        }
    },
    watch: {
        'character.abilityScores': {
            handler: function (newVal, oldVal) {
                this.character.update();
            },
            deep: true
        }
    },
    beforeRouteEnter(to, from, next) {
        CharacterService.get().then(function (character) {
            next(vm => {
                vm.character = character;
                window.character = vm.character;
            });
        });
    }
}
</script>
  
<template>
    <div class="container-fluid">
        <!-- Character Description -->
        <dcs-description v-bind:character="character"></dcs-description>
        <!-- Ability Score, Status, Armor, Misc  -->
        <div class="row">
            <div class="col-md-4">
                <!-- Ability Score -->
                <dcs-ability-score-list v-bind:ability-scores="character.abilityScores"></dcs-ability-score-list>
            </div>
            <!-- Status, Armor, Misc -->
            <div class="col-md-8">
                <!-- Status -->
                <dcs-status v-bind:status="character.status"></dcs-status>
                <!-- Main Armor -->
                <dcs-armor v-bind:armor-class="character.armorClass"></dcs-armor>
                <!-- Second Armor, Misc-->
                <dcs-misc v-bind:armor-class="character.armorClass" v-bind:initiative="character.initiative"></dcs-misc>
            </div>
        </div>
        <!-- Saving Throws, BAB, BAB Related, Attacks, Skills-->
        <div class="row">
            <div class="col-md-7">
                <!-- Saving Throws -->
                <dcs-saving-throws></dcs-saving-throws>
                <!-- BAB -->
                <dcs-bab></dcs-bab>
                <!-- Grapple -->
                <dcs-grapple></dcs-grapple>
                <!-- Attacks -->
                <dcs-attacks-list></dcs-attacks-list>
            </div>
            <!-- Skills -->
            <div class="col-md-5 skills-column">
                <dcs-skills-list></dcs-skills-list>
            </div>
        </div>
    </div>
</template>
