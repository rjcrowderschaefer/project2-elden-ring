const Weapons = [
    {
        swords: {
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
        },
        axes: {
            name: 'koby'
        },
        hammers: {
            name: 'koby'
        },
        spears: {
            name: 'koby'
        },
        fists: {
            name: 'koby'
        },
        projectileWeapons: {
            name: 'koby'
        },
        casting: {
            name: 'koby'
        }
    }

];

module.exports = Weapons;