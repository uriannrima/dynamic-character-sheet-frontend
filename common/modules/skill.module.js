var skill = function ({ _id, name, keyAbility, untrained, armorCheckPenalty, classSkill, hasSubValue, check, action, tryAgain, special, synergy, untrainedDescription, restriction, miscellaneous, subValue, rank, abilityModifier, miscModifier, hiddenModifier }) {
    return {
        _id,
        name,
        keyAbility,
        untrained: untrained || true,
        armorCheckPenalty,
        classSkill,
        hasSubValue,
        check,
        action,
        tryAgain,
        special,
        synergy,
        untrainedDescription,
        restriction, 
        miscellaneous,
        subValue: subValue || "",
        rank: rank || 0,
        abilityModifier: abilityModifier || 0,
        miscModifier: miscModifier || 0,
        hiddenModifier: hiddenModifier || 0,
        getTotal: function () {
            var result = 0;
            for (var key in this) {
                if (typeof this[key] !== "number") continue;
                if (key !== "rank" || this.classSkill) {
                    result += this[key];
                } else {
                    result += Math.floor(this[key] / 2);
                }
            }
            return result;
        }
    }
};

exports.DEFAULT_SKILLS = [
    new skill({ name: 'Appraise', keyAbility: 'intelligence', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Balance', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true }),
    new skill({ name: 'Bluff', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Climb', keyAbility: 'strength', untrained: true, armorCheckPenalty: true }),
    new skill({ name: 'Concentration', keyAbility: 'constitution', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Craft', keyAbility: 'intelligence', untrained: true, armorCheckPenalty: true, hasSubValue: true, }),
    new skill({ name: 'Decipher Script', keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false }),
    new skill({ name: 'Diplomacy', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Disable Device', keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false }),
    new skill({ name: 'Disguise', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Escape Artist', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true }),
    new skill({ name: 'Forgery', keyAbility: 'intelligence', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Gather Information', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Handle Animal', keyAbility: 'charisma', untrained: false, armorCheckPenalty: false }),
    new skill({ name: 'Heal', keyAbility: 'wisdom', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Hide', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true }),
    new skill({ name: 'Intimidate', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Jump', keyAbility: 'strength', untrained: true, armorCheckPenalty: true }),
    new skill({ name: 'Knowledge', keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false, hasSubValue: true }),
    new skill({ name: 'Listen', keyAbility: 'wisdom', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Move Silently', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true }),
    new skill({ name: 'Open Lock', keyAbility: 'dexterity', untrained: false, armorCheckPenalty: false }),
    new skill({ name: 'Perform', keyAbility: 'charisma', untrained: false, armorCheckPenalty: false, hasSubValue: true }),
    new skill({ name: 'Profession', keyAbility: 'wisdom', untrained: false, armorCheckPenalty: false, hasSubValue: true }),
    new skill({ name: 'Ride', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Search', keyAbility: 'intelligence', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Sense Motive', keyAbility: 'wisdom', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Sleight of Hands', keyAbility: 'dexterity', untrained: false, armorCheckPenalty: true }),
    new skill({ name: 'Spellcraft', keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false }),
    new skill({ name: 'Spot', keyAbility: 'wisdom', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Survival', keyAbility: 'wisdom', untrained: true, armorCheckPenalty: false }),
    new skill({ name: 'Swim', keyAbility: 'strength', untrained: true, armorCheckPenalty: true }),
    new skill({ name: 'Tumble', keyAbility: 'dexterity', untrained: false, armorCheckPenalty: true }),
    new skill({ name: 'Use Magic Device', keyAbility: 'charisma', untrained: false, armorCheckPenalty: false }),
    new skill({ name: 'Use Rope', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: false })
];

exports.skill = skill;