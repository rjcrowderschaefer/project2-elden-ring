const DamageTypes = [
    {
        name: 'Standard Damage',
        effectiveAgainst: 'Most enemies',
        ineffectiveAgainst: 'Miners',
        notes: null
    },
    {
        name: 'Strike Damage',
        effectiveAgainst: 'Armored Enemies, Rocky / Brittle Creatures',
        ineffectiveAgainst: 'Scaly Creatures',
        notes: null
    },
    {
        name: 'Slash Damage',
        effectiveAgainst: 'Unarmored / Lightly Armored Enemies, Fleshy Creatures',
        ineffectiveAgainst: 'Heavily Armored Enemies, Rocky Creatures, Giant Ants',
        notes: null
    },
    {
        name: 'Pierce Damage',
        effectiveAgainst: 'Scaly Creatures, Light / Medium Armored Enemies, Players Mid-Attack',
        ineffectiveAgainst: 'Heavily Armored Enemies',
        notes: 'Players are notably weak to Pierce Damage while they making an attack. Catching someone mid-animation will deal significant damage.'
    },
    {
        name: 'Magic Damage',
        effectiveAgainst: 'Armored Enemies, Miners',
        ineffectiveAgainst: 'Magic-oriented Enemies',
        notes: null
    },
    {
        name: 'Fire Damage',
        effectiveAgainst: 'Unarmored Enemies, Fleshy Creatures, Undead, Wood- and Plant-themed enemies, Giant Ants',
        ineffectiveAgainst: 'Heavily Armored Enemies, Draconic Creatures, Fire-Oriented Creatures',
        notes: 'Fire Damage taken is reduced while wet. Fire Damage cures/resets Frostbite.'
    },
    {
        name: 'Lightning Damage',
        effectiveAgainst: 'Heavily Armored Enemies, Abductor Virgins, Silver Tears',
        ineffectiveAgainst: 'Ancient Dragons, Tibia Mariners, rock-themed enemies like Golems and Gargoyles, Miranda Sprouts',
        notes: 'Lightning Damage is amplified when the target is wet.'
    },
    {
        name: 'Holy Damage',
        effectiveAgainst: 'Undead, Crabs, Albinaurics',
        ineffectiveAgainst: 'Godskin Apostle and Noble, Most Shardbearers, Royal Revenants, Erdtree Avatars, Bell Bearing Hunters, Erdtree Avatars, Cleanrot Knights, Omenkillers, Tree Spirits, Crucible Knights, Black Knife Assassins',
        notes: null
    }
]
module.exports = DamageTypes;