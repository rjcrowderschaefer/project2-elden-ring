const Weapons = [
    {
        swords: [
            {
                name: 'Claymore',
                type: 'Greatsword',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/claymore_weapon_elden_ring_wiki_guide_200px.png',
                description: 'A large sword with a long, straight blade. This heavy sword is usually wielded with two hands, but for those with enough strength, one is sufficient. In addition to the heavy sweeping attacks, it can also make a heavy piercing thrust making this a versatile weapon',
                weight: '9.0',
                location: 'Castle Morne: From the main courtyard entrance, hug the right wall and go past the burning corpses with Misbegotten surrounding them. You may aggro one or two along the way. This path leads to the entrance to the building in the north. The sword can be found in a chest to the left just as you enter this building.',
                ashOfWar: 'Lions Claw',
                attack: {
                    phy: '138',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '65',
                    mag: '35',
                    fire: '35',
                    ligt: '35',
                    holy: '35',
                    boost: '42'
                },
                requirements: {
                    str: '16',
                    dex: '13',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Ordoviss Greatsword',
                type: 'Greatsword',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ordoviss_greatsword_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Greatsword of Ordovis, one of the two honored as foremost among the Crucible Knights. This sword is imbued with an ancient holy essence. Its red tint exemplifies the nature of primordial gold, said to be close in nature to life itself.',
                weight: '12.0',
                location: 'Dropped by Crucible Knight Ordovis, located at Auriza Heros Grave.',
                ashOfWar: 'Ordoviss Vortex',
                attack: {
                    phy: '107',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '69',
                    crit: '100'
                },
                guard: {
                    phy: '69',
                    mag: '37',
                    fire: '37',
                    ligt: '37',
                    holy: '50',
                    boost: '47'
                },
                requirements: {
                    str: '25',
                    dex: '13',
                    int: '0',
                    fai: '15',
                    arc: '0'
                },
                scaling: {
                    str: 'C',
                    dex: 'E',
                    int: '',
                    fai: 'D',
                    arc: ''
                }
            },
            {
                name: 'Dark Moon Greatsword',
                type: 'Greatsword',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dark_moon_greatsword_weapon_elden_ring_wiki_guide_200px.png',
                description: 'A Moon Greatsword, bestowed by a Carian queen upon her spouse to honor long-standing tradition. One of the legendary armaments. Rannis sigil is a full moon, cold and leaden, and this sword is but a beam of its light.',
                weight: '10.0',
                location: 'Found below the Cathedral of Manus Celes after giving Ranni the Dark Moon Ring.',
                ashOfWar: 'Moonlight Greatsword',
                attack: {
                    phy: '82',
                    mag: '98',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '57',
                    mag: '63',
                    fire: '31',
                    ligt: '31',
                    holy: '31',
                    boost: '44'
                },
                requirements: {
                    str: '16',
                    dex: '11',
                    int: '38',
                    fai: '',
                    arc: ''
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: 'C',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Sword Of Night And Flame',
                type: 'Straight Sword',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_night_and_flame_straight_sword_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Storied sword and treasure of Caria Manor. One of the legendary armaments. Astrologers, who preceded the sorcerers, established themselves in mountaintops that nearly touched the sky, and considered the Fire Giants their neighbors.',
                weight: '4.0',
                location: 'The Sword of Night and Flame weapon can be found in Caria Manor in a locked room behind the gardens in the east side of the manor.',
                ashOfWar: 'Night-and-Flame Stance',
                attack: {
                    phy: '87',
                    mag: '56',
                    fire: '56',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '35',
                    mag: '42',
                    fire: '42',
                    ligt: '26',
                    holy: '26',
                    boost: '31'
                },
                requirements: {
                    str: '12',
                    dex: '12',
                    int: '24',
                    fai: '24',
                    arc: '0'
                },
                scaling: {
                    str: 'E',
                    dex: 'E',
                    int: 'D',
                    fai: 'D',
                    arc: ''
                }
            },
            {
                name: 'Godslayers Greatsword',
                type: 'Colossal Sword',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godslayers_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png',
                description: 'Sacred sword of the Gloam-Eyed Queen who controlled the Godskin Apostles before her defeat at the hands of Maliketh. The black flames wielded by the apostles are channeled from this sword.',
                weight: '17.5',
                location: 'Divine Tower of Caelid: Found in a chest behind the Godskin Apostles boss arena after defeating him.',
                ashOfWar: 'The Queens Black Flame',
                attack: {
                    phy: '119',
                    mag: '0',
                    fire: '77',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '63',
                    mag: '38',
                    fire: '49',
                    ligt: '38',
                    holy: '38',
                    boost: '45'
                },
                requirements: {
                    str: '20',
                    dex: '22',
                    int: '0',
                    fai: '20',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: '',
                    fai: 'D',
                    arc: ''
                }
            }
        ],
        axes: [
            {
                name: 'Axe Of Godfrey',
                type: 'Colossal Axe',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/axe_of_godfrey_colossal_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Weapon of Godfrey, Elden Lord. It was broken in a battle fought as leader of the Tarnished during the Long March. This weapon is symbolic of Godfreys vow to conduct himself as a lord, later becoming an emblem of the golden lineage. In the days of the past, a crown was warranted with strength.',
                weight: '18',
                location: 'Weapon of Godfrey, Elden Lord. It was broken in a battle fought as leader of the Tarnished during the Long March. This weapon is symbolic of Godfreys vow to conduct himself as a lord, later becoming an emblem of the golden lineage. In the days of the past, a crown was warranted with strength.',
                ashOfWar: 'Regal Roar',
                attack: {
                    phy: '165',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '75',
                    mag: '45',
                    fire: '45',
                    ligt: '45',
                    holy: '45',
                    boost: '50'
                },
                requirements: {
                    str: '42',
                    dex: '14',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Rotten Greataxe',
                type: 'Colossal Axe',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_greataxe_colossal_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Greataxe designed for gladiatorial combat, now festering with scarlet rot. Used by duelists who were exiled from the colosseum.',
                weight: '20.0',
                location: 'Dropped by Rotten Duelist to the north of Ordina, Liturgical Town.',
                ashOfWar: 'Endure',
                attack: {
                    phy: '162',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '78',
                    mag: '47',
                    fire: '47',
                    ligt: '47',
                    holy: '47',
                    boost: '52'
                },
                requirements: {
                    str: '30',
                    dex: '10',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'E',
                    dex: 'C',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Icerind Hatchet',
                type: 'Axe',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/icerind_hatchet_weapon_elden_ring_wiki_guide_200px.png',
                description: 'A hatchet with a frost-coated blade. One of several gifts given by Castle Sol in the distant north. Known as "freezing fog," the blade is thought to be a dragons scale. Inflicts a powerful frost effect.',
                weight: '3.0',
                location: 'Can be found at Temple Quarter, southeast of the Site of Grace, in a chest located inside the ruined bell tower, adjacent to a ring of flowers.',
                ashOfWar: 'Hoarfrost Stomp',
                attack: {
                    phy: '115',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '40',
                    mag: '27',
                    fire: '27',
                    ligt: '27',
                    holy: '27',
                    boost: '27'
                },
                requirements: {
                    str: '11',
                    dex: '16',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'E',
                    dex: 'C',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Rosus Axe',
                type: 'Axe',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rosus_axe_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Usher of Death, Rosus, who shows the path to the catacombs throughout the Lands Between, is depicted on this ritual axe. The dead easily lose their way, and have always been in sore need of a guiding hand.',
                weight: '5.5',
                location: 'Located behind a Stonesword Key door in Black Knife Catacombs.',
                ashOfWar: 'Rosuss Summons',
                attack: {
                    phy: '112',
                    mag: '72',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '44',
                    mag: '44',
                    fire: '30',
                    ligt: '30',
                    holy: '30',
                    boost: '33'
                },
                requirements: {
                    str: '18',
                    dex: '10',
                    int: '18',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'E',
                    int: 'D',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Axe Of Godrick',
                type: 'Greataxe',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/axe_of_godrick_greataxe_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Greataxe wielded by Godrick the Grafted. This golden battleaxe is emblazoned with the figure of a beast, representing the strength of Godfrey, First Elden Lord and patriarch of the golden lineage "I command thee kneel! For I am the lord of all that is golden!"',
                weight: '11.0',
                location: 'Trade Remembrance of the Grafted with Enia at Roundtable Hold.',
                ashOfWar: 'I Command Thee, Kneel!',
                attack: {
                    phy: '142',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '65',
                    mag: '35',
                    fire: '35',
                    ligt: '35',
                    holy: '35',
                    boost: '42'
                },
                requirements: {
                    str: '34',
                    dex: '22',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: '',
                    fai: '',
                    arc: ''
                }
            }
        ],
        hammers: [
            {
                name: 'Rotten Battle Hammer',
                type: 'Great Hammer',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_battle_hammer_warhammer_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Large iron great hammer designed for gladiatorial combat, now festering with scarlet rot. Weighty enough to crush armor and its wearer alike. Skill: Braggarts Roar Declare your presence with a boastful roar. Raises attack power, defense, and stamina recovery speed.',
                weight: '10.0',
                location: 'Guaranteed drop from a Rotten Duelist enemy in the stone coffins northwest of the Consecrated Snowfield Site of Grace.',
                ashOfWar: 'Braggarts Roar',
                attack: {
                    phy: '125',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '68',
                    mag: '36',
                    fire: '36',
                    ligt: '36',
                    holy: '36',
                    boost: '36'
                },
                requirements: {
                    str: '26',
                    dex: '8',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'C',
                    dex: 'E',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Envoys Long Horn',
                type: 'Great Hammer',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/envoys_long_horn_warhammer_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Long golden horn of the Oracle Envoys. Profoundly weighty, its blows are sure to be felt. Originally an instrument, but one that cannot be sounded by a mere human. Or perhaps it is too early to sound the call.',
                weight: '9.5',
                location: 'This weapon can be dropped by the Large Oracle Envoy located early on in the East Capital Rampart in Leyndell, Royal Capital.',
                ashOfWar: 'Bubble Shower',
                attack: {
                    phy: '120',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '78',
                    crit: '100'
                },
                guard: {
                    phy: '58',
                    mag: '31',
                    fire: '31',
                    ligt: '31',
                    holy: '42',
                    boost: '39'
                },
                requirements: {
                    str: '23',
                    dex: '11',
                    int: '18',
                    fai: '',
                    arc: ''
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: '',
                    fai: 'C',
                    arc: ''
                }
            },
            {
                name: 'Prelates Inferno Crozier',
                type: 'Colossal Hammer',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/prelates_inferno_crozier_colossal_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Colossal hammer with the appearance of roiling flames. Weapon of the Prelates who lead the Fire Monks. Its heft represents the weight of their guardianship. The hammers head is unusually substantial, and strong attacks will fling foes into the air.',
                weight: '23.5',
                location: 'Drops from a Fire Prelate wielding it inside Fort Laiedd near Seethewater Terminus Site of Grace.',
                ashOfWar: 'Prelates Charge',
                attack: {
                    phy: '156',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '82',
                    mag: '49',
                    fire: '49',
                    ligt: '49',
                    holy: '49',
                    boost: '55'
                },
                requirements: {
                    str: '45',
                    dex: '8',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'C',
                    dex: 'E',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Giant-Crusher',
                type: 'Colossal Hammer',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/giant-crusher_elden_ring_wiki_guide_200px.png',
                description: 'A hammer made from a boulder, used in the War against the Giants. One of the heftiest weapons in the entire Lands Between. After the giants were quelled, and man turned against man in violence, this weapon was all but forgotten. Man has grown feeble in comparison to his forebears. ',
                weight: '26.5',
                location: 'Can be found in a chest in the back of a Carriage directly to the south of Outer Wall Phantom Tree site of grace. ',
                ashOfWar: 'Endure',
                attack: {
                    phy: '155',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '88',
                    mag: '52',
                    fire: '52',
                    ligt: '52',
                    holy: '52',
                    boost: '58'
                },
                requirements: {
                    str: '60',
                    dex: '0',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'C',
                    dex: '',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Ringed Finger',
                type: 'Hammer',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/ringed_finger_hammer_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Bludgeon made of an enormous finger sheathed in several heavy rings. Thought to have been cut from an ancestor of the Fingercreeper. Some life yet remains in this legacy of an ancient act of blasphemy, as evidenced by the barely perceptible warmth it still exudes.',
                weight: '4.5',
                location: 'Gelmir Heros Grave: From the first Chariot hallway, head all the way down, as the path ends you will need to continue down across the lava and turn left at the end of the path to find a room with a chest containing the weapon.',
                ashOfWar: 'Claw Flick',
                attack: {
                    phy: '121',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '38',
                    mag: '26',
                    fire: '26',
                    ligt: '26',
                    holy: '38',
                    boost: '28'
                },
                requirements: {
                    str: '15',
                    dex: '9',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'C',
                    dex: 'D',
                    int: '',
                    fai: '',
                    arc: ''
                }
            }
        ],
        spears: [
            {
                name: 'Serpant-Hunter',
                type: 'Great Spear',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent-hunter_greatspear_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Weapon that serves as both greatsword and spear. Thought to have been used to hunt an immortal great serpent in the distant past, it manifests a long blade of light when facing such a creature. When their masters heroic aspirations degenerated into mere greed, his men searched for a weapon with which they might halt their lord.',
                weight: '12.0',
                location: 'Held by a corpse on the left as you enter the boss chamber of Rykard, Lord of Blasphemy.',
                ashOfWar: 'Great-Serpant Hunt',
                attack: {
                    phy: '111',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '72',
                    mag: '42',
                    fire: '42',
                    ligt: '42',
                    holy: '42',
                    boost: '50'
                },
                requirements: {
                    str: '0',
                    dex: '0',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'B',
                    dex: 'E',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Mohgwyns Sacred Spear',
                type: 'Great Spear',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mohgwyns_sacred_spear_great_spears_elden_ring_wiki_guide_200px.png',
                description: 'Trident of Mohg, Lord of Blood. A sacred spear that will come to symbolize his dynasty. As well as serving as a weapon, it is an instrument of communion with an outer god who bestows power upon accursed blood. The mother of truth desires a wound.',
                weight: '10.0',
                location: 'Can be obtained by trading Remembrance of the Blood Lord with Enia at Roundtable Hold.',
                ashOfWar: 'Blooodboon Ritual',
                attack: {
                    phy: '96',
                    mag: '0',
                    fire: '62',
                    ligt: '0',
                    holy: '0',
                    crit: '0'
                },
                guard: {
                    phy: '57',
                    mag: '36',
                    fire: '49',
                    ligt: '36',
                    holy: '36',
                    boost: '46'
                },
                requirements: {
                    str: '24',
                    dex: '14',
                    int: '0',
                    fai: '0',
                    arc: '27'
                },
                scaling: {
                    str: 'D',
                    dex: 'E',
                    int: '',
                    fai: '',
                    arc: 'D'
                }
            },
            {
                name: 'Silurias Tree',
                type: 'Great Spear',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/silurias_tree_greatspear_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Silurias Tree, weapon of one of the two honored as foremost among the Crucible Knights. The primordial form of the Erdtree is close in nature to life itself, and this spear, modeled on its crucible, is imbued with ancient holy essence.',
                weight: '10.0',
                location: 'Silurias Tree can drop from Crucible Knight Siluria in Deeproot Depths.',
                ashOfWar: 'Silurias Woe',
                attack: {
                    phy: '90',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '90',
                    crit: '100'
                },
                guard: {
                    phy: '51',
                    mag: '36',
                    fire: '36',
                    ligt: '36',
                    holy: '55',
                    boost: '46'
                },
                requirements: {
                    str: '27',
                    dex: '13',
                    int: '0',
                    fai: '20',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'E',
                    int: 'D',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Bolt Of Gransax',
                type: 'Spear',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bolt_of_gransax_spear_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Spear whittled from the weapon wielded by Gransax. One of the legendary armaments. A great ancient dragon, Gransax once rained calamity upon the Royal Capital - the only time in historical record that Leyndells walls have fallen. This marked the dawn of the war against dragons.',
                weight: '8.5',
                location: 'Can be found in Leyndell, Royal Capital, after beating Godfrey, First Elden Lord (Golden Shade): From the Erdtree Sanctuary grace, walk out the western door, take the elevator down, go down the staircase to the walkway, jump down onto the giant spear lodged into the building, and then walk up it  (you should see the Bolt shining near the handle of the giant spear).',
                ashOfWar: 'Aincent Lightning Spear',
                attack: {
                    phy: '98',
                    mag: '0',
                    fire: '0',
                    ligt: '63',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '60',
                    mag: '31',
                    fire: '31',
                    ligt: '47',
                    holy: '31',
                    boost: '40'
                },
                requirements: {
                    str: '20',
                    dex: '40',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Inquisitors Girandole',
                type: 'Spear',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/inquisitors_girandole_spear_weapon_elden_ring_wiki_guide_200px.png',
                description: 'nstrument of torture used on nobles behind the curtain at the Volcano Manor of Mt. Gelmir. Its numerous spikes pierce the flesh, then singe the wounds with flame. The smell of burnt blood induces despair in the victim. A candlestick conveived by a thorough mind.',
                weight: '7.5',
                location: 'Dropped by the Abductor Virgins Field Boss in Volcano Manors underground, down from the Subterranean Inquisition Chamber site of grace. Easily reachable once you have the Temple of Eiglay Grace.',
                ashOfWar: 'Charge Forth',
                attack: {
                    phy: '102',
                    mag: '0',
                    fire: '66',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '56',
                    mag: '28',
                    fire: '43',
                    ligt: '28',
                    holy: '28',
                    boost: '37'
                },
                requirements: {
                    str: '18',
                    dex: '15',
                    int: '0',
                    fai: '16',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: '',
                    fai: 'D',
                    arc: ''
                }
            },
        ],
        fists: [
            {
                name: 'Grafted Dragon',
                type: 'Fist',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/grafted_dragon_fist_weapon_elden_ring_wiki_guide_200px.png',
                description: 'The embodiment of the power that still remained in the dragons head that was grafted to Godricks left arm. The wielders arm will take the form of a small dragon, sprouting sharp dragon fangs at the fist. This weapon cannot be two-handed.',
                weight: '2.5',
                location: 'Trade Remembrance of the Grafted with Enia at Roundtable Hold.',
                ashOfWar: 'Bear Witness!',
                attack: {
                    phy: '89',
                    mag: '0',
                    fire: '57',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '27',
                    mag: '18',
                    fire: '44',
                    ligt: '18',
                    holy: '18',
                    boost: '22'
                },
                requirements: {
                    str: '20',
                    dex: '14',
                    int: '0',
                    fai: '16',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: '',
                    fai: 'D',
                    arc: ''
                }
            },
            {
                name: 'Star Fist',
                type: 'Fist',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/star_fist_fist_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Spherical iron manifer covered in spikes which induce blood loss. Used in brutal games of pugilism.',
                weight: '3.0',
                location: 'The left side of the colosseum near the West Capital Rampart Site of Grace, in the last opening on a body, in Leyndell, Royal Capital. ',
                ashOfWar: 'Endure',
                attack: {
                    phy: '105',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '41',
                    mag: '23',
                    fire: '23',
                    ligt: '23',
                    holy: '23',
                    boost: '23'
                },
                requirements: {
                    str: '12',
                    dex: '8',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'E',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Veterans Prosthesis',
                type: 'Fist',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/veterans_prosthesis_fist_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Bladed prosthetic leg enwreathed with the power of lightning, instead attached to the fist. Commander Niall, veteran of Castle Sol, offered this prosthesis in exchange for the lives of defeated knights held prisoner. He went on to lead these men as an army of no nation.',
                weight: '4.0',
                location: 'Dropped by Commander Niall upon defeat at Castle Sol in the Mountaintops of the Giants.',
                ashOfWar: 'Storm Kick',
                attack: {
                    phy: '83',
                    mag: '0',
                    fire: '0',
                    ligt: '53',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '30',
                    mag: '20',
                    fire: '20',
                    ligt: '48',
                    holy: '20',
                    boost: '24'
                },
                requirements: {
                    str: '15',
                    dex: '12',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Raptor Talons',
                type: 'Claw',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/raptor_talons_claw_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Claw comprised of two sharp, thin blades, wielded by the assassins of Ravenmount, this weapon allows them to imitate the attacks of Deathbirds. Besides excelling at airborne attacks, its charge attack mimics the vicious swoop of a bird of prey.',
                weight: '1.5',
                location: 'Located at Sages Cave, in one of the chests, behind several secret walls.',
                ashOfWar: 'QuickStep',
                attack: {
                    phy: '86',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '33',
                    mag: '19',
                    fire: '19',
                    ligt: '19',
                    holy: '19',
                    boost: '19'
                },
                requirements: {
                    str: '6',
                    dex: '14',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'E',
                    dex: 'C',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Bloodhound Claws',
                type: 'Claw',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodhound_claws_claw_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Large curved claws used by Bloodhound Knights. The curve allows the weapon to slip through an enemys guard.',
                weight: '3.0',
                location: 'Bloodhound Claws can be dropped by a Lesser Bloodhound Knight in the basement of the Volcano Manor.',
                ashOfWar: 'Bloodhounds Step',
                attack: {
                    phy: '99',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '38',
                    mag: '22',
                    fire: '22',
                    ligt: '22',
                    holy: '22',
                    boost: '22'
                },
                requirements: {
                    str: '10',
                    dex: '15',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: '',
                    fai: '',
                    arc: ''
                }
            }
        ],
        projectileWeapons: [
            {
                name: 'Jar Cannon',
                type: 'Ballista',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/jar_cannon_ballista_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Jar cannon which uses explosives to fire greatbolts. Deals great damage but is slow to reload. Experimental firearm brought to the assault on Volcano Manor, where it was discovered that no one knew how to use it.',
                weight: '15.0',
                location: 'Dropped by the boss Demi-Human Queen Margot at the end of Volcano Cave north of Mt. Gelmir.',
                ashOfWar: 'Kick',
                attack: {
                    phy: '192',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '0',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    boost: '0'
                },
                requirements: {
                    str: '34',
                    dex: '12',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: '',
                    dex: '',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Hand Ballista',
                type: 'Ballista',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/hand_ballista_ballista_weapon_elden_ring_wiki_guide_200px.png',
                description: 'An unconventional ballistic device modeled on a weapon used to besiege castles. Only capable of firing greatbolts. Perfect for reckless acts such as storming a castle or facing an entire army alone.',
                weight: '10.0',
                location: 'At the top of the Forest Lookout Tower, south west of the Bridge of Sacrifice on the Weeping Peninsula.',
                ashOfWar: 'Kick',
                attack: {
                    phy: '135',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '0',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    boost: '0'
                },
                requirements: {
                    str: '30',
                    dex: '14',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: '',
                    dex: '',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Lion Greatbow',
                type: 'Greatbow',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/lion_greatbow_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Greatbow of black iron wielded by General Radahn. Decorated with a lion mane motif. Imbued with gravitational power of the Starscourge, when used along with Radahns Spear, it becomes a true weapon of a champion. ',
                weight: '9.5',
                location: 'Trade Remembrance of the Starscourge with Enia at Roundtable Hold.',
                ashOfWar: 'Radahns Rain',
                attack: {
                    phy: '120',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '0',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    boost: '0'
                },
                requirements: {
                    str: '22',
                    dex: '18',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: 'D',
                    int: '',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Erdtree Greatbow ',
                type: 'Greatbow',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree_greatbow_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Greatbow featuring Erdtree styling. In times of old, when faith and battle went hand in hand, this weapon was created in tandem with the Golden Great Arrow. Scales all arrow damage with faith, revealing its true worth when used with holy-infused arrows.',
                weight: '11.0',
                location: 'Killing the chariot in Fringefolk Heros Grave (requires two Stonesword Keys to access.).',
                ashOfWar: 'Through And Through',
                attack: {
                    phy: '60',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '65',
                    crit: '100'
                },
                guard: {
                    phy: '0',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    boost: '0'
                },
                requirements: {
                    str: '20',
                    dex: '14',
                    int: '0',
                    fai: '14',
                    arc: '0'
                },
                scaling: {
                    str: 'E',
                    dex: 'E',
                    int: '',
                    fai: 'D',
                    arc: ''
                }
            },
            {
                name: 'Serpant Bow',
                type: 'Bow',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent_bow_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Malformed bow in the shape of a pair of poisonous snakes. Imbues arrows with poison through pagan magic, revealing its true worth when used with poison-infused arrows. Used by assassins known as the Formless Serpents.',
                weight: '3.5',
                location: 'Serpent Bow can be found by a pool of rot in Abandoned Cave.',
                ashOfWar: 'Mighty Shot',
                attack: {
                    phy: '75',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '0',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    boost: '0'
                },
                requirements: {
                    str: '8',
                    dex: '15',
                    int: '0',
                    fai: '0',
                    arc: '11'
                },
                scaling: {
                    str: 'E',
                    dex: 'D',
                    int: '',
                    fai: '',
                    arc: 'D'
                }
            }
        ],
        casting: [
            {
                name: 'Frenzied Flame Seal',
                type: 'Sacred Seal',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/frenzied_flame_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Formless sacred seal bestowed by the maiden of the Three Fingers. Enhances incantations of the frenzied flame. This seal is the mark of the Lord of Frenzied Flame. Scales incantations using strength, dexterity, intelligence, and faith all together.',
                weight: '0',
                location: 'Received at the end of Hyettas questline',
                ashOfWar: 'No Skill',
                attack: {
                    phy: '25',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '25',
                    mag: '15',
                    fire: '15',
                    ligt: '15',
                    holy: '15',
                    boost: '15'
                },
                requirements: {
                    str: '0',
                    dex: '0',
                    int: '0',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'E',
                    dex: 'E',
                    int: 'E',
                    fai: 'D',
                    arc: ''
                }
            },
            {
                name: 'Erdtree Seal',
                type: 'Sacred Seal',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png',
                description: 'A formless sacred seal decorated with an Erdtree crest, once the focus of religion in the Lands Between. Even though the Elden Ring is shattered, and the Erdtree has dulled from its former radiance, earnest faith continues to hold the answers.',
                weight: '0',
                location: 'Found on a corpse in a cell near the Omenkiller enemy in the town below the Prison Town Church Site of Grace in Volcano Manor.',
                ashOfWar: 'No Skill',
                attack: {
                    phy: '25',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '15',
                    crit: '100'
                },
                guard: {
                    phy: '25',
                    mag: '15',
                    fire: '15',
                    ligt: '15',
                    holy: '15',
                    boost: '15'
                },
                requirements: {
                    str: '0',
                    dex: '0',
                    int: '0',
                    fai: '40',
                    arc: '0'
                },
                scaling: {
                    str: '',
                    dex: '',
                    int: '',
                    fai: 'C',
                    arc: ''
                }
            },
            {
                name: 'Giants Seal',
                type: 'Sacred Seal',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/giants_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Sacred seal depicting the one eyed god of the Fire Giants, adorned with braids of red hair. Sacred seal wielded by Fire Monks and Prelates, this catalyst enhances Giants Flame incantations.',
                weight: '1.5',
                location: 'Inside Giant-Conquering Heros Grave.',
                ashOfWar: 'No Skill',
                attack: {
                    phy: '25',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '25',
                    mag: '15',
                    fire: '15',
                    ligt: '15',
                    holy: '15',
                    boost: '15'
                },
                requirements: {
                    str: '4',
                    dex: '0',
                    int: '0',
                    fai: '14',
                    arc: '0'
                },
                scaling: {
                    str: 'E',
                    dex: '',
                    int: '',
                    fai: 'C',
                    arc: ''
                }
            },
            {
                name: 'Carian Regal Cepter',
                type: 'Glintstone Staff',
                img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_regal_scepter_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png',
                description: 'Magic scepter of Rennala, Queen of the Full Moon. The glintstone is known as a Carian Blue, enhancing full moon sorceries. Only those of the highest intelligence may wield this, the finest of all glintstone staves.',
                weight: '3,0',
                location: 'Obtained when unlocking the Remembrance of The Full Moon Queens power by handing it over to Enia at Roundtable Hold.',
                ashOfWar: 'Spinning Weapon',
                attack: {
                    phy: '24',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '25',
                    mag: '15',
                    fire: '15',
                    ligt: '15',
                    holy: '15',
                    boost: '15'
                },
                requirements: {
                    str: '8',
                    dex: '10',
                    int: '60',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'E',
                    dex: 'E',
                    int: 'B',
                    fai: '',
                    arc: ''
                }
            },
            {
                name: 'Lusats Glintstone Staff',
                type: 'Glintstone Staff',
                img: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lusat's_glintstone_staff_9_elden_ring_wiki_guide_200px.png",
                description: 'Staff of the primeval glintstone sorcerer Lusat. Only those who have glimpsed what lies beyond the wisdom of stone may wield it. Enhances power of all sorceries, but consumes additional FP.',
                weight: '4.0',
                location: 'Sellia, Town of Sorcery: Found in a chest north of the Nox Swordstress & Nox Priest boss duos chamber after defeating them.',
                ashOfWar: 'No Skill',
                attack: {
                    phy: '24',
                    mag: '0',
                    fire: '0',
                    ligt: '0',
                    holy: '0',
                    crit: '100'
                },
                guard: {
                    phy: '25',
                    mag: '15',
                    fire: '15',
                    ligt: '15',
                    holy: '15',
                    boost: '15'
                },
                requirements: {
                    str: '10',
                    dex: '0',
                    int: '52',
                    fai: '0',
                    arc: '0'
                },
                scaling: {
                    str: 'D',
                    dex: '',
                    int: 'B',
                    fai: '',
                    arc: ''
                }
            }
        ]
    }

];

module.exports = Weapons;