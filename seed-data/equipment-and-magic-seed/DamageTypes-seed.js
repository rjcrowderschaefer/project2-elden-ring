const DamageTypes = [
    {
        name: 'Standard Damage',
        effectiveAgainst: 'Most enemies',
        ineffectiveAgainst: 'Miners',
        notes: '',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ash_of_war_square_off_elden_ring_wiki_guide_200px.png'
    },
    {
        name: 'Strike Damage',
        effectiveAgainst: 'Armored Enemies, Rocky / Brittle Creatures',
        ineffectiveAgainst: 'Scaly Creatures',
        notes: '',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ash_of_war_hoarah_louxs_earthshaker_elden_ring_wiki_guide_200px.png'
    },
    {
        name: 'Slash Damage',
        effectiveAgainst: 'Unarmored / Lightly Armored Enemies, Fleshy Creatures',
        ineffectiveAgainst: 'Heavily Armored Enemies, Rocky Creatures, Giant Ants',
        notes: '',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ash_of_war_spinning_slash_elden_ring_wiki_guide_200px.png'
    },
    {
        name: 'Pierce Damage',
        effectiveAgainst: 'Scaly Creatures, Light / Medium Armored Enemies, Players Mid-Attack',
        ineffectiveAgainst: 'Heavily Armored Enemies',
        notes: 'Players are notably weak to Pierce Damage while they making an attack. Catching someone mid-animation will deal significant damage.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ash_of_war_impaling_thrust_elden_ring_wiki_guide_200px.png'
    },
    {
        name: 'Magic Damage',
        effectiveAgainst: 'Armored Enemies, Miners',
        ineffectiveAgainst: 'Magic-oriented Enemies',
        notes: '',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ash_of_war_glintstone_pebble_elden_ring_wiki_guide_200px.png'
    },
    {
        name: 'Fire Damage',
        effectiveAgainst: 'Unarmored Enemies, Fleshy Creatures, Undead, Wood- and Plant-themed enemies, Giant Ants',
        ineffectiveAgainst: 'Heavily Armored Enemies, Draconic Creatures, Fire-Oriented Creatures',
        notes: 'Fire Damage taken is reduced while wet. Fire Damage cures/resets Frostbite.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ash_of_war_flame_of_the_redmanes_elden_ring_wiki_guide_200px.png'
    },
    {
        name: 'Lightning Damage',
        effectiveAgainst: 'Heavily Armored Enemies, Abductor Virgins, Silver Tears',
        ineffectiveAgainst: 'Ancient Dragons, Tibia Mariners, rock-themed enemies like Golems and Gargoyles, Miranda Sprouts',
        notes: 'Lightning Damage is amplified when the target is wet.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ash_of_war_flame_of_the_redmanes_elden_ring_wiki_guide_200px.png'
    },
    {
        name: 'Holy Damage',
        effectiveAgainst: 'Undead, Crabs, Albinaurics',
        ineffectiveAgainst: 'Godskin Apostle and Noble, Most Shardbearers, Royal Revenants, Erdtree Avatars, Bell Bearing Hunters, Erdtree Avatars, Cleanrot Knights, Omenkillers, Tree Spirits, Crucible Knights, Black Knife Assassins',
        notes: '',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ash_of_war_shared_order_elden_ring_wiki_guide_200px.png'
    }
]
module.exports = DamageTypes;