var ALL_SIZES = [{
    name: "Fine",
    attack: 8,
    grapple: -16,
    hide: 16,
    carry: 0.12
},
{
    name: "Diminutive",
    attack: 4,
    grapple: -12,
    hide: 12,
    carry: 0.25
},
{
    name: "Tiny",
    attack: 2,
    grapple: -8,
    hide: 8,
    carry: 0.5
},
{
    name: "Small",
    attack: 1,
    grapple: -4,
    hide: 4,
    carry: 0.75
},
{
    name: "Medium",
    attack: 0,
    grapple: 0,
    hide: 0,
    carry: 1
},
{
    name: "Large",
    attack: -1,
    grapple: 4,
    hide: -4,
    carry: 2
},
{
    name: "Huge",
    attack: -2,
    grapple: 8,
    hide: -8,
    carry: 4
},
{
    name: "Gargantuan",
    attack: -4,
    grapple: 12,
    hide: -12,
    carry: 8
},
{
    name: "Collosal",
    attack: -8,
    grapple: 16,
    hide: -16,
    carry: 16
}];

export default {
    getAll: function () {
        return ALL_SIZES;
    },
    getByName: function (sizeName) {
        return ALL_SIZES.filter(size => size.name === sizeName)[0];
    },
    update: function (character) {
        const size = this.getByName(character.size);
        character.armorClass.sizeModifier = size.attack;
        character.grapple.sizeModifier = size.grapple;
        var hideSkill = character.skills.filter(skill => skill.name === "Hide")[0];
        hideSkill.hiddenModifier = size.hide;
    }
}