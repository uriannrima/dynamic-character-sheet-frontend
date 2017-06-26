<script>
import DcsDescription from './components/description.component';
import DcsAbilityScoreList from './components/ability-score-list.component';
import DcsStatus from './components/status.component';
import DcsArmor from './components/armor.component';
import DcsMisc from './components/misc.component';
import DcsSavingThrowsList from './components/saving-throws-list.component';
import DcsBab from './components/bab.component';
import DcsGrapple from './components/grapple.component';
import DcsAttacksList from './components/attacks-list.component';
import DcsSkillsList from './components/skills-list.component';

import CharacterService from 'Services/character.service';

export default {
    components: {
        DcsDescription, DcsAbilityScoreList,
        DcsStatus, DcsArmor,
        DcsMisc, DcsSavingThrowsList,
        DcsBab, DcsGrapple,
        DcsAttacksList, DcsSkillsList
    },
    data: function () {
        return {
            character: null
        }
    },
    methods: {
        newCharacter: function () {
            this.character = CharacterService.new();
        },
        saveOrUpdate: function () {
            CharacterService.saveOrUpdate(this.character).then(savedCharacter => {
                this.character._id = savedCharacter._id;
            });
        }
    },
    watch: {
        'character.abilityScores': {
            handler: function (newVal, oldVal) {
                CharacterService.update(this.character);
            },
            deep: true
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
}
</script>
  
<template>
    <div class="container-fluid" v-if="character">
        <!-- Character Description -->
        <dcs-description :character="character" @onSaveCharacter="saveOrUpdate" @onNewCharacter="newCharacter"></dcs-description>
        <!-- Ability Score, Status, Armor, Misc  -->
        <div class="row">
            <div class="col-md-4">
                <!-- Ability Score -->
                <dcs-ability-score-list :ability-scores="character.abilityScores"></dcs-ability-score-list>
            </div>
            <!-- Status, Armor, Misc -->
            <div class="col-md-8">
                <!-- Status -->
                <dcs-status :status="character.status"></dcs-status>
                <!-- Main Armor -->
                <dcs-armor :armor-class="character.armorClass"></dcs-armor>
                <!-- Second Armor, Misc-->
                <dcs-misc :armor-class="character.armorClass" :initiative="character.initiative"></dcs-misc>
            </div>
        </div>
        <!-- Saving Throws, BAB, BAB Related, Attacks, Skills-->
        <div class="row">
            <div class="col-md-7">
                <!-- Saving Throws -->
                <dcs-saving-throws-list :saving-throws="character.savingThrows"></dcs-saving-throws-list>
                <!-- BAB -->
                <dcs-bab :base-attack-bonus="character.baseAttackBonus" :spell-resistance="character.spellResistance"></dcs-bab>
                <!-- Grapple -->
                <dcs-grapple :grapple="character.grapple"></dcs-grapple>
                <!-- Attacks -->
                <dcs-attacks-list :attacks="character.attacks"></dcs-attacks-list>
            </div>
            <!-- Skills -->
            <div class="col-md-5 skills-column">
                <dcs-skills-list :skill-points="character.skillPoints" :skills="character.skills"></dcs-skills-list>
            </div>
        </div>
    </div>
    <div v-else>No character selected.</div>
</template>
