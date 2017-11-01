exports.SpellSchools = [
    {
        "name": "Abjuration",
        "description": "Abjuration spells are protective in nature, though some of them have aggressive uses. They create magical barriers, negate harmful effects, harm trespassers, or banish creatures to other planes of existence.",
        "subject": "Abjurer"
    },
    {
        "name": "Evocation",
        "description": "Evocation spells manipulate magical energy to produce a desired effect. Some call up blasts of fire or lightning. Others channel positive energy to heal wounds.",
        "subject": "Evoker"
    },
    {
        "name": "Necromancy",
        "description": "Necromancy spells manipulate the energies of life and death. Such spells can grant an extra reserve of life force, drain the life energy from another creature, create the undead, or even bring the dead back to life. \nCreating the undead through the use of necromancy spells such as animate dead is not a good act, and only evil casters use such spells frequently.",
        "subject": "Necromancer"
    },
    {
        "name": "Transmutation",
        "description": "Transmutation spells change the properties of a creature, object, or environment. They might turn an enemy into a harmless creature, bolster the strength of an ally, make an object move at the caster’s command, or enhance a creature’s innate healing abilities to rapidly recover from injury.",
        "subject": "Transmuter"
    },
    {
        "name": "Conjuration",
        "description": "Conjuration spells involve the transportation of objects and creatures from one location to another. Some spells summon creatures or objects to the caster’s side, whereas others allow the caster to teleport to another location. Some conjurations create objects or effects out of nothing.",
        "subject": "Conjurer",
        "subSchools": [
            {
                "name": "Calling",
                "description": "A calling spell transports a creature from another plane to the plane you are on. The spell grants the creature the one-time ability to return to its plane of origin, although the spell may limit the circumstances under which this is possible. Creatures who are called actually die when they are killed; they do not disappear and reform, as do those brought by a summonin"
            },
            {
                "name": "Creation",
                "description": "A creation spell manipulates matter to create an object or creature in the place the spellcaster designates. If the spell has a duration other than instantaneous, magic holds the creation together, and when the spell ends, the conjured creature or object vanishes without a trace. If the spell has an instantaneous duration, the created object or creature is merely assembled through magic. It lasts indefinitely and does not depend on magic for its existence."
            },
            {
                "name": "Healing",
                "description": "Certain divine conjurations heal creatures or even bring them back to life."
            },
            {
                "name": "Summoning",
                "description": "A summoning spell instantly brings a creature or object to a place you designate. When the spell ends or is dispelled, a summoned creature is instantly sent back to where it came from, but a summoned object is not sent back unless the spell description specifically indicates this. A summoned creature also goes away if it is killed or if its hit points drop to 0 or lower, but it is not really dead. It takes 24 hours for the creature to reform, during which time it can’t be summoned again."
            },
            {
                "name": "Teleportation",
                "description": "A teleportation spell transports one or more creatures or objects a great distance. The most powerful of these spells can cross planar boundaries. Unlike summoning spells, the transportation is (unless otherwise noted) one-way and not dispellable.\nTeleportation is instantaneous travel through the Astral Plane. Anything that blocks astral travel also blocks teleportation."
            }
        ]
    },
    {
        "name": "Divination",
        "description": "Divination spells reveal information, whether in the form of secrets long forgotten, glimpses of the future, the locations of hidden things, the truth behind illusions, or visions of distant people or places.",
        "subject": "Diviner",
        "subSchools": [
            {
                "name": "Scrying",
                "description": "A scrying spell creates an invisible magical sensor that sends you information. Unless noted otherwise, the sensor has the same powers of sensory acuity that you possess. This level of acuity includes any spells or effects that target you, but not spells or effects that emanate from you. The sensor, however, is treated as a separate, independent sensory organ of yours, and thus functions normally even if you have been blinded or deafened, or otherwise suffered sensory impairment.\nA creature can notice the sensor by making a Perception check with a DC 20 + the spell level. The sensor can be dispelled as if it were an active spell.\nLead sheeting or magical protection blocks a scrying spell, and you sense that the spell is blocked."
            }
        ]
    },
    {
        "name": "Enchantment",
        "description": "Enchantment spells affect the minds of others, influencing or controlling their behavior. Such spells can make enemies see the caster as a friend, force creatures to take a course of action, or even control another creature like a puppet.",
        "subject": "Enchanter",
        "subSchools": [
            {
                "name": "Charm",
                "description": "A charm spell changes how the subject views you, typically making it see you as a good friend."
            },
            {
                "name": "Compulsion",
                "description": "a compulsion spell forces the subject to act in some manner or changes the way its mind works. Some compulsion spells determine the subject’s actions or the effects on the subject, others allow you to determine the subject’s actions when you cast the spell, and still others give you ongoing control over the subject."
            }
        ]
    },
    {
        "name": "Illusion",
        "description": "Illusion spells deceive the senses or minds of others. They cause people to see things that are not there, to miss things that are there, to hear phantom noises, or to remember things that never happened. Some illusions create phantom images that any creature can see, but the most insidious illusions plant an image directly in the mind of a creature.",
        "subject": "Illusionist",
        "subSchools": [
            {
                "name": "Figment",
                "description": "A figment spell creates a false sensation. Those who perceive the figment perceive the same thing, not their own slightly different versions of the figment. It is not a personalized mental impression. Figments cannot make something seem to be something else. A figment that includes audible effects cannot duplicate intelligible speech unless the spell description specifically says it can. If intelligible speech is possible, it must be in a language you can speak. If you try to duplicate a language you cannot speak, the figment produces gibberish. Likewise, you cannot make a visual copy of something unless you know what it looks like (or copy another sense exactly unless you have experienced it).\nBecause figments and glamers are unreal, they cannot produce real effects the way that other types of illusions can. Figments and glamers cannot cause damage to objects or creatures, support weight, provide nutrition, or provide protection from the elements. Consequently, these spells are useful for confounding foes, but useless for attacking them directly.\nA figment’s AC is equal to 10 + its size modifier."
            },
            {
                "name": "Glamer",
                "description": "A glamer spell changes a subject’s sensory qualities, making it look, feel, taste, smell, or sound like something else, or even seem to disappear."
            },
            {
                "name": "Pattern",
                "description": "Like a figment, a pattern spell creates an image that others can see, but a pattern also affects the minds of those who see it or are caught in it. All patterns are mind-affecting spells."
            },
            {
                "name": "Phantasm",
                "description": "A phantasm spell creates a mental image that usually only the caster and the subject (or subjects) of the spell can perceive. This impression is totally in the minds of the subjects. It is a personalized mental impression, all in their heads and not a fake picture or something that they actually see. Third parties viewing or studying the scene don’t notice the phantasm. All phantasms are mind-affecting spells."
            },
            {
                "name": "Shadow",
                "description": "A shadow spell creates something that is partially real from extradimensional energy. Such illusions can have real effects. Damage dealt by a shadow illusion is real."
            }
        ]
    }
]

exports.SpellSchool = function ({ _id, name, description, subject, subSchools = "" }) {
    return {
        _id,
        name,
        description,
        subject,
        subSchools
    }
}

exports.SubSchool = function ({ name, description }) {
    return {
        name,
        description
    }
};