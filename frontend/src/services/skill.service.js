const ALL_SKILLS = [
    { name: 'Appraise', keyAbility: 'Int', untrained: true, armorCheckPenalty: false },
    { name: 'Balance', keyAbility: 'Dex', untrained: true, armorCheckPenalty: true },
    { name: 'Bluff', keyAbility: 'Cha', untrained: true, armorCheckPenalty: false },
    { name: 'Climb', keyAbility: 'Str', untrained: true, armorCheckPenalty: true },
    { name: 'Concentration', keyAbility: 'Con', untrained: true, armorCheckPenalty: false },
    { name: 'Craft', subValue: true, keyAbility: 'Int', untrained: true, armorCheckPenalty: false },
    { name: 'Decipher Script', keyAbility: 'Int', untrained: false, armorCheckPenalty: false },
    { name: 'Diplomacy', keyAbility: 'Cha', untrained: true, armorCheckPenalty: false },
    { name: 'Disable Device', keyAbility: 'Int', untrained: false, armorCheckPenalty: false },
    { name: 'Disguise', keyAbility: 'Cha', untrained: true, armorCheckPenalty: false },
    { name: 'Escape Artist', keyAbility: 'Dex', untrained: true, armorCheckPenalty: true },
    { name: 'Forgery', keyAbility: 'Int', untrained: true, armorCheckPenalty: false },
    { name: 'Gather Information', keyAbility: 'Cha', untrained: true, armorCheckPenalty: false },
    { name: 'Handle Animal', keyAbility: 'Cha', untrained: false, armorCheckPenalty: false },
    { name: 'Heal', keyAbility: 'Wis', untrained: true, armorCheckPenalty: false },
    { name: 'Hide', keyAbility: 'Dex', untrained: true, armorCheckPenalty: true },
    { name: 'Intimidade', keyAbility: 'Cha', untrained: true, armorCheckPenalty: false },
    { name: 'Jump', keyAbility: 'Str', untrained: true, armorCheckPenalty: true },
    { name: 'Knowledge', subValue: true, keyAbility: 'Int', untrained: false, armorCheckPenalty: false },
    { name: 'Listen', keyAbility: 'Wis', untrained: true, armorCheckPenalty: false },
    { name: 'Move Silently', keyAbility: 'Dex', untrained: true, armorCheckPenalty: true },
    { name: 'Open Lock', keyAbility: 'Dex', untrained: false, armorCheckPenalty: false },
    { name: 'Perform', keyAbility: 'Cha', untrained: false, armorCheckPenalty: false },
    { name: 'Profession', subValue: true, keyAbility: 'Wis', untrained: false, armorCheckPenalty: false },
    { name: 'Ride', keyAbility: 'Dex', untrained: true, armorCheckPenalty: false },
    { name: 'Search', keyAbility: 'Int', untrained: true, armorCheckPenalty: false },
    { name: 'Sense Motive', keyAbility: 'Wis', untrained: true, armorCheckPenalty: false },
    { name: 'Sleight of Hands', keyAbility: 'Dex', untrained: false, armorCheckPenalty: true },
    { name: 'Spellcraft', keyAbility: 'Int', untrained: false, armorCheckPenalty: false },
    { name: 'Spot', keyAbility: 'Wis', untrained: true, armorCheckPenalty: false },
    { name: 'Survival', keyAbility: 'Wis', untrained: true, armorCheckPenalty: false },
    { name: 'Swim', keyAbility: 'Str', untrained: true, armorCheckPenalty: true },
    { name: 'Tumble', keyAbility: 'Dex', untrained: false, armorCheckPenalty: true },
    { name: 'Use Magic Device', keyAbility: 'Cha', untrained: false, armorCheckPenalty: false },
    { name: 'Use Rope', keyAbility: 'Dex', untrained: true, armorCheckPenalty: false }
];

module.exports = {
    get: function () {
        return ALL_SKILLS;
    }
}