<script>
import SavingThrowComponent from '../components/saving-throw.component';

export default {
  props: ['character'],
  components: { SavingThrowComponent }
}
</script>
<template>
    <div class="saving-throws-container">
        <div>
            <div class="saving-throw-title hidden-sm-up">
                <span class="ability-score-description">
                    Saving Throws
                </span>
            </div>
            <div class="saving-throw-container">
                <table class="saving-throw-table">
                    <!-- Mobile Header -->
                    <thead class="hidden-sm-down">
                        <tr>
                            <th>
                                <span class="ability-score-description">
                                    Saving Throws
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <saving-throw-component v-for="(savingThrow, index) in character.savingThrows" :key="index" :showInputLabel="index === 0"
                            :name="savingThrow.name" :keyAbility="character.getAbilityScore(savingThrow.keyAbility)" :base.sync="savingThrow.base"
                            :magicModifier.sync="savingThrow.magicModifier" :miscModifier.sync="savingThrow.miscModifier" :tempModifier.sync="savingThrow.tempModifier">
                        </saving-throw-component>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>