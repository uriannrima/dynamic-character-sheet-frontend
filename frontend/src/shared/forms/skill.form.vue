<script>
export default {
    props: ['skill', 'edit', 'describeSkill'],
    data: function() {
        return {
            has: {
                tryAgain: false,
                special: false,
                synergy: false,
                untrained: false
            }
        };
    }
}
</script>
<!-- style scoped>
.skill-form-component span {
    white-space: pre-line;
}

.skill-form-component > div > div {
    margin-bottom: 10px;
}
.skill-form-component-name-container small {
    text-transform: capitalize;
}
</style -->

<template>
    <div class="skill-form-component">
        <div v-if="describeSkill">
            <div class="skill-form-component-name-container">
                <span>
                    <strong>Name:</strong>
                </span>
                <span>{{describeSkill.name}} <small>[{{describeSkill.keyAbility}}]</small></span>
            </div>
            <div class="skill-form-component-check-container">
                <span>
                    <strong>Check:</strong>
                </span>
                <span>{{describeSkill.check}}</span>
            </div>
            <div class="skill-form-component-action-container">
                <span>
                    <strong>Action:</strong>
                </span>
                <span>{{describeSkill.action}}</span>
            </div>
            <div class="skill-form-component-try-again-container" v-if="describeSkill.tryAgain">
                <span>
                    <strong>Try Again:</strong>
                </span>
                <span>{{describeSkill.tryAgain}}</span>
            </div>
            <div class="skill-form-component-special-container" v-if="describeSkill.special">
                <span>
                    <strong>Special:</strong>
                </span>
                <span>{{describeSkill.special}}</span>
            </div>
            <div class="skill-form-component-synergy-container" v-if="describeSkill.synergy">
                <span>
                    <strong>Synergy:</strong>
                </span>
                <span>{{describeSkill.synergy}}</span>
            </div>
            <div class="skill-form-component-untrained-description-container" v-if="describeSkill.untrainedDescription">
                <span>
                    <strong>Untrained Description:</strong>
                </span>
                <span>{{describeSkill.untrainedDescription}}</span>
            </div>
            <div class="skill-form-component-sub-value-container" v-if="describeSkill.subValue">
                <span>
                    <strong>Sub Value:</strong>
                </span>
                <span>{{describeSkill.subValue}}</span>
            </div>
        </div>
        <div v-else>
            <div class="skill-form-component-name-container">
                <span>Name:</span>
                <input type="text" v-model="skill.name">
            </div>
            <div class="skill-form-component-key-ability-container">
                <span>Key Ability:</span>
                <select v-model="skill.keyAbility">
                    <option value="strength">Strength</option>
                    <option value="dexterity">Dexterity</option>
                    <option value="constitution">Constitution</option>
                    <option value="intelligence">Intelligence</option>
                    <option value="wisdom">Wisdom</option>
                    <option value="charisma">Charisma</option>
                </select>
            </div>
            <div class="skill-form-component-check-container">
                <span>Check:</span>
                <textarea type="text" v-model="skill.check"></textarea>
            </div>
            <div class="skill-form-component-action-container">
                <span>Action:</span>
                <textarea type="text" v-model="skill.action"></textarea>
            </div>
            <div class="skill-form-component-special-container">
                <span>Try Again:</span>
                <input type="checkbox" v-model="has.tryAgain">
                <textarea v-if="has.tryAgain" type="text" v-model="skill.tryAgain"></textarea>
            </div>
            <div class="skill-form-component-special-container">
                <span>Special:</span>
                <input type="checkbox" v-model="has.special">
                <textarea v-if="has.special" type="text" v-model="skill.special"></textarea>
            </div>
            <div class="skill-form-component-synergy-container">
                <span>Synergy:</span>
                <input type="checkbox" v-model="has.synergy" style="vertical-align: middle">
                <textarea v-if="has.synergy" type="text" v-model="skill.synergy"></textarea>
            </div>
            <div class="skill-form-component-untrained-container">
                <span>Untrained:</span>
                <input type="checkbox" v-model="skill.untrained" style="vertical-align: middle">
            </div>
            <div class="skill-form-component-untrained-description-container" v-if="skill.untrained">
                <span>Untrained Description:</span>
                <textarea type="text" v-model="skill.untrainedDescription"></textarea>
            </div>
            <div class="skill-form-component-armor-check-penaly-container">
                <span>Armor Check Penalty:</span>
                <input type="checkbox" v-model="skill.armorCheckPenalty" style="vertical-align: middle">
            </div>
            <div class="skill-form-component-has-sub-value-container">
                <span>Sub Value:</span>
                <input type="checkbox" v-model="skill.hasSubValue" style="vertical-align: middle">
            </div>
            <div class="skill-form-component-sub-value-container" v-if="skill.hasSubValue">
                <span>Value:</span>
                <input type="text" v-model="skill.subValue"></input>
            </div>
        </div>
    </div>
</template>

