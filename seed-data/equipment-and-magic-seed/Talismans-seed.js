const Talismans = [
    {
        name: 'Crimson Amber Medallion',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crimson_amber_medallion_talisman_elden_ring_wiki_guide_200px.png',
        weight: '0.3',
        description: 'A medallion with crimson amber inlaid. Boosts maximum HP. The Erdtrees old sap becomes amber, treasured as the most precious of jewels in the age of Godfrey, the first Elden Lord. A primordial life energy resides inside.',
        effect: 'Crimson Amber Medallion raises maximum HP by 6/7/8%.',
        upgradedVersions: '+1 and +2 versions available',
        whereToFind: {
            regular: 'Base Talisman can be purchased from the Nomadic Merchant at the eastern side of Weeping Peninsula, for 1,500 runes',
            plusOne: '+1 Variant: Found in Volcano Manor. Go to the Prison Town Church Site of Grace, go out and through the little town as if you were progressing through the manor as normal, and use a Stonesword Key to go through the fog gate. An Abductor Virgin is there, but you can easily run up the stairs to the level above, where the talisman is on a dead body.',
            plusTwo: '+2 Variant, SPOILER WARNING: Can be found just southwest of the Leyndell, Ashen Capital Site of Grace,  by dropping down the open sewer grate to the beam below. [Map link] Video Location'
        }
    },
    {
        name: 'Cerulean Amber Medallion',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/cerulean_amber_medallion_talisman_elden_ring_wiki_guide_200px.png',
        weight: '0.3',
        description: 'A medallion with cerulean amber inlaid. Boosts maximum FP. The Erdtrees old sap becomes amber, treasured as the most precious of jewels in the age of Godfrey, the first Elden Lord. A primordial life energy resides inside.',
        effect: 'Cerulean Amber Medallion raises maximum FP by 7/9/11%.',
        upgradedVersions: '+1 and +2 versions available',
        whereToFind: {
            regular: 'Base Talisman: Lakeside Crystal Cave: After defeating the Bloodhound Knight.',
            plusOne: '+1 Variant: Castle Sol: Found on a corpse hanging by a wooden ledge above the southern walls of the castle. This area is accessed by climbing a ladder behind the church in the southeast and following the walls west. Beware the very powerful dual sword knight guarding the area. He can teleport behind you and perform long combos.',
            plusTwo: '+2 Variant: Lunar Estate Ruins: Found in a treasure chest in an underground room northwest of the ruins. Look for an Imp Statue pressed up against the wall. This requires one Stonesword Key. The stairs are also concealed by an illusory floor. Simply hit the floor next to the Imp Statue to reveal the stairs.'
        }
    },
    {
        name: 'Viridian Amber Medallion',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/viridian_amber_medallion_talisman_elden_ring_wiki_guide_200px.png',
        weight: '0.3',
        description: 'A medallion with viridian amber inlaid. Boosts maximum stamina. The Erdtrees old sap becomes amber, treasured as the most precious of jewels in the age of Godfrey, the first Elden Lord. A primordial life energy resides inside.',
        effect: 'Viridian Amber Medallion raises maximum Stamina by 11/13/15%.',
        upgradedVersions: '+1 and +2 versions available',
        whereToFind: {
            regular: 'Base talisman: Tombsward Cave, a small dungeon in the Weeping Peninsula: Located southeast of the Fourth Church of Marika. The medallion is obtained after defeating the boss, Miranda the Blighted Bloom.',
            plusOne: '+1 Variant: Altus Plateau, south of the Outer Wall Battleground Site of Grace: You will hear Margit whisper, "I see you, Tarnished..."  to you before appearing on the road. Defeat him again and it will drop.',
            plusTwo: '+2 Variant: Miquellas Haligtree: The closest site of grace is the Haligtree Town Plaza. Go south towards the roof with a dead body on it. For reference, the dead body is two stories above the talisman. Continue southeast, and jump down once. Jump across the gap, and then do an immediate 180 turn and make a running jump into the building below. Itll be in a chest guarded by Scarlet Rot Zombies. '
        }
    },
    {
        name: 'Green Turtle Talisman',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/green_turtle_talisman_talisman_elden_ring_wiki_guide_200px.png',
        weight: '0.7',
        description: 'A talisman in the shape of a green turtle. Raises stamina recovery speed. Turtles are known as a nutritious ingredient, symbolic of inexhaustible power. However, those who hold turtles to be wise creatures consider the practice of eating their meat to be barbarous.',
        effect: 'Green Turtle Talisman raises Stamina recovery speed by 8 per second (17.7%).',
        upgradedVersions: '1 variant available',
        whereToFind: {
            regular: 'Summonwater Village. In an underground area on the eastern outskirts of the village. Entering the area requires a Stonesword Key.',
            plusOne: 'none',
            plusTwo: 'none'
        }
    },
    {
        name: 'Great Jar Arsenal',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/great-jars_arsenal_talisman_elden_ring_wiki_guide_200px.png',
        weight: '1.5',
        description: 'A charm that resembles a great jar overflowing with weaponry. Vastly boosts maximum equipment load. The great jar grants this talisman to their warriors. Carry as much as you can — grow big and strong.',
        effect: 'Great Jar Arsenal raises maximum Equip Load by 19%.',
        upgradedVersions: '1 variant available',
        whereToFind: {
            regular: 'Reward for completing the The Great-Jar challenge of defeating three NPC duelists in Dragonbarrow (northern Caelid).',
            plusOne: 'none',
            plusTwo: 'none'
        }
    },
    {
        name: 'Dragoncreat Greatshield Talisman',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragoncrest_greatshield_talisman_talisman_elden_ring_wiki_guide_200px.png',
        weight: '0.8',
        description: 'Legendary talisman of wrought iron depicting a massive ancient dragon. Enormously boosts physical damage negation. The ancient dragons, who ruled in the prehistoric era before the Erdtree, would protect their lord as a wall of living rock. And so it is that the shape of the dragon has become symbolic of all manner of protections.',
        effect: 'Dragoncrest Greatshield Talisman enormously reduces Physical Damage taken, by 20%. (Effect is reduced to 5% in PvP.)',
        upgradedVersions: '1 variant available',
        whereToFind: {
            regular: 'Elphael, Brace of the Haligtree: Found in a chest on an elevated platform inside the large building in the northeast, guarded by several Pests.',
            plusOne: 'none',
            plusTwo: 'none'
        }
    },
    {
        name: 'Axe Talisman',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/axe_talisman_talisman_elden_ring_wiki_guide_200px.png',
        weight: '0.8',
        description: 'A talisman depicting an axe and a warrior. Enhances charge attacks. The Lord who led the Long March bore an axe, and his loyal warriors honored him by wielding axes of their own, making them very effective at dealing decisive blows.',
        effect: 'Axe Talisman increases charged attack damage by 10%.',
        upgradedVersions: '1 variant available',
        whereToFind: {
            regular: 'Found in a cellar underneath the Mistwood Ruins in eastern Limgrave.',
            plusOne: 'none',
            plusTwo: 'none'
        }
    },
    {
        name: 'Graven Mass Talisman',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/graven-mass_talisman_talisman_elden_ring_wiki_guide_200px.png',
        weight: '1.0',
        description: 'A talisman depicting the first school of graven mages — a nightmare that would continue to haunt the academy. Greatly raises potency of sorceries. The primeval current is a forbidden tradition of glintstone sorcery. To those who cleave to its teachings, the act of collecting sorcerers to fashion them into the seeds of stars is but another path of scientific inquiry.',
        effect: 'Graven-Mass Talisman raises the damage of all damage types dealt by Sorceries by 8%.',
        upgradedVersions: '1 variant available',
        whereToFind: {
            regular: 'Found in a chest atop Albinauric Rise, in the east of the Consecrated Snowfield.',
            plusOne: 'none',
            plusTwo: 'none'
        }
    },
    {
        name: 'Flocks Canvas Talisman',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flocks_canvas_talisman_talisman_elden_ring_wiki_guide_200px.png',
        weight: '1.0',
        description: 'A talisman bearing an icon that depicts a mass of masked figures. Greatly raises potency of incantations. The figures represent the flock at prayer, their firm belief in the intangible inspiring even the solitary founder of their religion. What is faith if not an affirmation?',
        effect: 'Flocks Canvas Talisman raises the potency of Incantations by 8%',
        upgradedVersions: '1 variant available',
        whereToFind: {
            regular: 'Drops from Gowry after you kill him, only if he is crying about Millicents death.',
            plusOne: 'none',
            plusTwo: 'none'
        }
    },
    {
        name: 'Radagon Icon',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/radagon_icon_talisman_elden_ring_wiki_guide_200px.png',
        weight: '0.7',
        description: 'A legendary talisman depicting the Elden Lord Radagon. Shortens the casting time of sorceries and incantations. As the husband of Rennala of Caria, the red-haired Radagon studied sorcery, and as the husband of Queen Marika, he studied  incantations. Thus did the hero aspire to be complete.',
        effect: 'Radagon Icon shortens the casting time of Spells.',
        upgradedVersions: '1 variant available',
        whereToFind: {
            regular: 'In Raya Lucaria Academy, the talisman is found inside a treasure chest on the second floor near the Debate Parlor Site of Grace. From the Site of Grace, head north into the courtyard.',
            plusOne: 'none',
            plusTwo: 'none'
        }
    },

]
<<<<<<< HEAD
=======

>>>>>>> 5e9bc4f350fa6b7cc2a008018f858c80e840d59f
module.exports = Talismans;