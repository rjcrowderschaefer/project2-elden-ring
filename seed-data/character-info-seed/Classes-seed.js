const Classes = [
    {
        name: 'Hero',
        soulLevel: '7',
        description: 'Hero is a starting Class in Elden Ring. The Hero has high Strength and Vigor with some arcane. It starts the game level 7, with a battle axe and leather shield. The Classes of Elden Ring only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. The Hero is a Strength-based class that begins the game with an axe.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/hero_class_elden_ring_wiki_guide_200px.png',
        stats: {
            vigor: '7',
            mind: '9',
            endurance: '12',
            strength: '16',
            dex: '9',
            int: '7',
            fai: '8',
            arc: '11'
        },
        weapons: {
            weapon1: 'Battle Axe',
            weapon2: 'Large Leather Shield',
            weapon3: null
        },
        spells: {
           spell1: null,
           spell2: null 
        },
        armor: {
            head: 'Champion Headband',
            chest: 'Champion Pauldron',
            hands: 'Champion Bracers',
            legs: 'Champion Gaiters'
        }
    },
    {
        name: 'Bandit',
        soulLevel: '5',
        description:'Bandit is a starting Class in Elden Ring. The Bandit has High Arcane and Dexterity. It starts the game level 5, with a dagger, parrying shield, bow and arrows. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bandit_class_elden_ring_wiki_guide_200px.png',
        stats: {
            vigor: '10',
            mind: '11',
            endurance: '10',
            strength: '9',
            dex: '13',
            int: '9',
            fai: '8',
            arc: '14'
        },
        weapons: {
            weapon1: 'Great Knife',
            weapon2: 'Shortbow',
            weapon3: 'Buckler'
        },
        spells: {
           spell1: null,
           spell2: null 
        },
        armor: {
            head: 'Bandit Mask',
            chest: 'Bandit Garb',
            hands: 'Bandit Manchettes',
            legs: 'Bandit Boots'
        }
    },
    {
        name: 'Astrologer',
        soulLevel: '6',
        description: 'Astrologer is a starting Class in Elden Ring. The Astrologer has high Intelligence and Mind and some Dexterity. It starts the game level 6, with a Staff, a sword and small shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/astrologer_class_elden_ring_wiki_guide_200px.png',
        stats: {
            vigor: '9',
            mind: '15',
            endurance: '9',
            strength: '8',
            dex: '12',
            int: '16',
            fai: '7',
            arc: '9'
        },
        weapons: {
            weapon1: 'Short Sword',
            weapon2: 'Astrologers Staff',
            weapon3: 'Scripture Wooden Shield'
        },
        spells: {
           spell1: 'Glintstone pebble',
           spell2: 'Glintstone arc' 
        },
        armor: {
            head: 'Astrologer Hood',
            chest: 'Astrologer Robe',
            hands: 'Astrologer Gloves',
            legs: 'Astrologer Trousers'
        }
    },
    {
        name: 'Warrior',
        soulLevel: '8',
        description: 'Warrior is a starting Class in Elden Ring. The Warrior has High Dex and medium physical stats. It starts the game level 8, with two scimitars and a light shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/warrior_class_elden_ring_wiki_guide_200px.png',
        stats: {
            vigor: '11',
            mind: '12',
            endurance: '11',
            strength: '10',
            dex: '16',
            int: '10',
            fai: '8',
            arc: '9'
        },
        weapons: {
            weapon1: 'Scimitar',
            weapon2: 'Scimitar',
            weapon3: 'Riveted Wooden Shield'
        },
        spells: {
           spell1: null,
           spell2: null 
        },
        armor: {
            head: 'Blue Cloth Cowl',
            chest: 'Blue Cloth Vest',
            hands: 'Warrior Gauntlets',
            legs: 'Warrior Greaves'
        }
    },
    {
        name: 'Prisoner',
        soulLevel: '9',
        description: 'Prisoner is a starting Class in Elden Ring. The Prisoner has high Intelligence and Dexterity, and medium physical stats. It starts the game level 9, with an estoc, a staff and shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/prisoner_class_elden_ring_wiki_guide_200px.png',
        stats: {
            vigor: '11',
            mind: '12',
            endurance: '11',
            strength: '11',
            dex: '14',
            int: '14',
            fai: '6',
            arc: '9'
        },
        weapons: {
            weapon1: 'Estoc',
            weapon2: 'Glintstone Staff',
            weapon3: 'Rift Shield'
        },
        spells: {
           spell1: 'Magic Glintblade',
           spell2: null 
        },
        armor: {
            head: 'Prisoner Iron Mask',
            chest: 'Prisoner Clothing',
            hands: null,
            legs: 'Prisoner Trousers'
        }
    },
    {
        name: 'Confessor',
        soulLevel: '10',
        description: 'Confessor is a starting Class in Elden Ring. The Confessor has high Faith and medium physical stats. It starts the game level 10 with a broadsword, a kite shield and a finger seal. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/confessor_class_elden_ring_wiki_guide_200px.png',
        stats: {
            vigor: '10',
            mind: '13',
            endurance: '10',
            strength: '12',
            dex: '12',
            int: '9',
            fai: '14',
            arc: '9'
        },
        weapons: {
            weapon1: 'Broadsword',
            weapon2: 'Finger Seal',
            weapon3: 'Blue Crest Heater Shield'
        },
        spells: {
           spell1: 'Urgent Heal',
           spell2: 'Assassins Approach' 
        },
        armor: {
            head: 'Confessor Hood',
            chest: 'Confessor Armor',
            hands: 'Confessor Gloves',
            legs: 'Confessor Boots'
        }
    },
    {
        name: 'Wretch',
        soulLevel: '1',
        description: 'Wretch is a starting Class in Elden Ring. The Wretch is the “deprived” of the game. It starts at level 1 with 10 on all stats and just a club for weapons. It is the weakest starting Class in Elden Ring, and should be selected by those who want an added challenge in the earlier parts of the game. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/wretch_class_elden_ring_wiki_guide_200px.png',
        stats: {
            vigor: '10',
            mind: '10',
            endurance: '10',
            strength: '10',
            dex: '10',
            int: '10',
            fai: '10',
            arc: '10'
        },
        weapons: {
            weapon1: 'Club',
            weapon2: null,
            weapon3: null
        },
        spells: {
           spell1: null,
           spell2: null 
        },
        armor: {
            head: null,
            chest: null,
            hands: null,
            legs: null
        }
    },
    {
        name: 'Vagabond',
        soulLevel: '9',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/vagabond_class_elden_ring_wiki_guide_200px.png',
        description: 'Vagabond is a starting Class in Elden Ring. The Vagabond has high Vigor, Strength and Dexterity. It starts at level 9, with a sword, shield and halberd so possibly comparable to the Knight class in previous games. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.',
        stats: {
            vigor: '15',
            mind: '10',
            endurance: '11',
            strength: '14',
            dex: '13',
            int: '9',
            fai: '9',
            arc: '7'
        },
        weapons: {
            weapon1: 'Longsword',
            weapon2: 'Halberd',
            weapon3: 'Heater Shield'
        },
        spells: {
           spell1: null,
           spell2: null
        },
        armor: {
            head: 'Vagabond Knight Helm',
            chest: 'Vagabond Knight Armor',
            hands: 'Vagabond Knight Gauntlets',
            legs: 'Vagabond Knight Greaves'
        }
    },
    {
        name: 'Prophet',
        soulLevel: '7',
        description: 'Prophet is a starting Class in Elden Ring. The Prophet has high Faith and mind and some arcane and strength. It starts level 7, with a spear, a finger seal and a small shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/prophet_class_elden_ring_wiki_guide_200px.png',
        stats: {
            vigor: '10',
            mind: '14',
            endurance: '8',
            strength: '11',
            dex: '10',
            int: '7',
            fai: '16',
            arc: '10'
        },
        weapons: {
            weapon1: 'Short Spear',
            weapon2: 'Finger Seal',
            weapon3: 'Rickety Shield'
        },
        spells: {
           spell1: 'Heal',
           spell2: 'Catch Flame' 
        },
        armor: {
            head: 'Prophet Blindfold',
            chest: 'Prophet Robe',
            hands: null,
            legs: 'Prophrt Trousers'
        }
    },
    {
        name: 'Samurai',
        soulLevel: '9',
        description: 'Samurai is a starting Class in Elden Ring. The Samurai has high Dexterity, Medium strength, endurance, mind and vigor. It starts the game level 9 with a katana, bow, arrows (flaming arrows too!) and a shield. The Classes only determine the starting Stats and Equipment of the player, but as the game progresses, players can freely change their build to their preferred playstyle. There are 10 Classes in Elden Ring that the player can begin the game with.',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/samurai_class_elden_ring_wiki_guide_200px.png',
        stats: {
            vigor: '12',
            mind: '11',
            endurance: '13',
            strength: '12',
            dex: '15',
            int: '9',
            fai: '8',
            arc: '8'
        },
        weapons: {
            weapon1: 'Uchigatana',
            weapon2: 'Longbow',
            weapon3: 'Red Thorn Roundshield'
        },
        spells: {
           spell1: null,
           spell2: null 
        },
        armor: {
            head: 'Land Of Reeds Helm',
            chest: 'Land Of Reeds Armor',
            hands: 'Land Of Reeds Gauntlets',
            legs: 'Land Of Reeds Greaves'
        }
    }
]

module.exports = Classes