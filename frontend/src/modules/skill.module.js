export const Skill = function ({ _id, name, keyAbility, untrained = true, armorCheckPenalty, classSkill, check, action, tryAgain, special, synergy, untrainedDescription, restriction, miscellaneous, aditionalInformation, hasSubValue, subValue, rank, abilityModifier, miscModifier, hiddenModifier }) {
    return {
        _id,
        name,
        keyAbility,
        untrained,
        armorCheckPenalty,
        classSkill,
        check,
        action,
        tryAgain,
        special,
        synergy,
        untrainedDescription,
        restriction,
        miscellaneous,
        aditionalInformation,
        hasSubValue,
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

export const DEFAULT_SKILLS = [
    new Skill({ name: 'Appraise', keyAbility: 'intelligence', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Balance', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true }),
    new Skill({ name: 'Bluff', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Climb', keyAbility: 'strength', untrained: true, armorCheckPenalty: true }),
    new Skill({ name: 'Concentration', keyAbility: 'constitution', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Craft', keyAbility: 'intelligence', untrained: true, armorCheckPenalty: true }),
    new Skill({ name: 'Decipher Script', keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false }),
    new Skill({ name: 'Diplomacy', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Disable Device', keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false }),
    new Skill({ name: 'Disguise', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Escape Artist', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true }),
    new Skill({ name: 'Forgery', keyAbility: 'intelligence', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Gather Information', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Handle Animal', keyAbility: 'charisma', untrained: false, armorCheckPenalty: false }),
    new Skill({ name: 'Heal', keyAbility: 'wisdom', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Hide', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true }),
    new Skill({ name: 'Intimidate', keyAbility: 'charisma', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Jump', keyAbility: 'strength', untrained: true, armorCheckPenalty: true }),
    new Skill({ name: 'Knowledge', keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false, hasSubValue: true }),
    new Skill({ name: 'Listen', keyAbility: 'wisdom', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Move Silently', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: true }),
    new Skill({ name: 'Open Lock', keyAbility: 'dexterity', untrained: false, armorCheckPenalty: false }),
    new Skill({ name: 'Perform', keyAbility: 'charisma', untrained: false, armorCheckPenalty: false, hasSubValue: true }),
    new Skill({ name: 'Profession', keyAbility: 'wisdom', untrained: false, armorCheckPenalty: false, hasSubValue: true }),
    new Skill({ name: 'Ride', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Search', keyAbility: 'intelligence', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Sense Motive', keyAbility: 'wisdom', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Sleight of Hands', keyAbility: 'dexterity', untrained: false, armorCheckPenalty: true }),
    new Skill({ name: 'Spellcraft', keyAbility: 'intelligence', untrained: false, armorCheckPenalty: false }),
    new Skill({ name: 'Spot', keyAbility: 'wisdom', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Survival', keyAbility: 'wisdom', untrained: true, armorCheckPenalty: false }),
    new Skill({ name: 'Swim', keyAbility: 'strength', untrained: true, armorCheckPenalty: true }),
    new Skill({ name: 'Tumble', keyAbility: 'dexterity', untrained: false, armorCheckPenalty: true }),
    new Skill({ name: 'Use Magic Device', keyAbility: 'charisma', untrained: false, armorCheckPenalty: false }),
    new Skill({ name: 'Use Rope', keyAbility: 'dexterity', untrained: true, armorCheckPenalty: false })
];
