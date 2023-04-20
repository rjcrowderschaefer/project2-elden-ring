const Spells = [
    {
        name: 'Carian Phalanx',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_phalanx_sorcery_elden_ring_wiki_guide_200px.png',
        description: 'One of the sorceries of the Carian royal family. Creates a defensive arch of numerous magic glintblades overhead, which automatically attack nearby foes. This sorcery can be used cast while in motion. An enhanced version of the glintblade sorcery used by enchanted knights.',
        officialKobyRating: 'B tier, annoying in PVP and Gideon uses it. But it does lots of poise damage',
        type: 'Sorcery',
        class: 'Carian Sorcery',
        damageType: 'Magic',
        requiredMemory: '1',
        whereToFind: 'Sold by Preceptor Seluvis at Seluviss Rise, after completing steps of his questline.',
        fpCost: '24',
        requirements: {
            int: '34',
            fai: '0',
            arc: '0'
        }
    },
    {
        name: 'Gavel Of Haima',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gavel_of_haima_sorcery_elden_ring_wiki_guide_200px.png',
        description: 'One of the glintstone sorceries of the Academy of Raya Lucaria. Creates a magical greathammer and slams it down. Allows one follow-up attack. Drawn from the scholarly conspectus of Haima, the adjudicator of the academy, this sorcery employs might as a means to quell conflict.',
        officialKobyRating: 'A tier, looks cool and does a lot of damage, but easy to dodge',
        type: 'Sorcery',
        class: 'Glintstone Sorcery',
        damageType: 'Magic',
        requiredMemory: '1',
        whereToFind: 'Can be found in the chest at the top of the Converted Fringe Tower in the Liurnia of the Lakes region. It requires the Erudition gesture to unlock:',
        fpCost: '22',
        requirements: {
            int: '25',
            fai: '0',
            arc: '0'
        }
    },
    {
        name: 'Comet Azur',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/comet_azur_sorcery_elden_ring_wiki_guide_200px.png',
        description: 'Legendary sorcery devised by Azur, primeval sorcerer. Fires a tremendous comet in a torrent akin to the distant starry expanse, the place said to be the origin of glintstone. Hold to continue releasing the sorcerys power. When Azur glimpsed into the primeval current, he saw darkness. He was left both bewitched and fearful of the abyss.',
        officialKobyRating: 'B tier, it absolutely slaps in PVE because of the damage it does but its pretty booty in PVP because it renders you unable to move, it is super slow and it is super easy to dodge',
        type: 'Sorcery',
        class: 'Primeval Sorcery',
        damageType: 'Magic',
        requiredMemory: '3',
        whereToFind: 'Hermit Village in Mt. Gelmir: Acquired from Primeval Sorcerer Azur sitting near the cliffs in the northeast. ',
        fpCost: '40 (per tick)',
        requirements: {
            int: '60',
            fai: '0',
            arc: '0'
        }
    },
    {
        name: 'Stars Of Ruin',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stars_of_ruin_sorcery_elden_ring_wiki_guide_200px.png',
        description: 'Legendary sorcery devised by Lusat, primeval sorcerers. Fires twelve dark shooting stars that pursue the target. This sorcery can be cast while in motion. Charging increases potency. When Lusat glimpsed into the primeval current, he beheld the final moments of a great star cluster, and upon seeing it, he too was broken.',
        officialKobyRating: 'F tier, if you use this in PVP, you are scum of the earth',
        type: 'Sorcery',
        class: 'Primeval Sorcery',
        damageType: 'Magic',
        requiredMemory: '1',
        whereToFind: 'Caelid: Given by Master Lusat when interacted with inside the Sellia Hideaway behind an arcane ward in the second pit. Requires the Sellian Sealbreaker to get through arcane ward (Acquired during Sorceress Sellen Questline).',
        fpCost: '32',
        requirements: {
            int: '43',
            fai: '0',
            arc: '0'
        }
    },
    {
        name: 'Rannis Dark Moon',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rannis_dark_moon_sorcery_elden_ring_wiki_guide_200px.png',
        description: 'Legendary sorcery associated with the Carian queen. Uses the caster as a vessel to incarnate a cold, dark moon, then sends it floating toward foes. The dark moon dispels all sorcery that touches it, and temporarily reduces magic damage negation for those it strikes. This moon was encountered by a young Ranni, led by the hand of her mother, Rennala. What she beheld was cold, dark and veiled in occult mystery.',
        officialKobyRating: 'D tier, probably one of the coolest spells in the game but the risk of the slow casting time and the reward of mediocre damage makes this spell not very good',
        type: 'Sorcery',
        class: 'Full Moon Sorcery',
        damageType: 'Magic (with frostbite buildup)',
        requiredMemory: '2',
        whereToFind: 'Chelonas Rise: Found in a chest at the top of the tower after unlocking the seal.',
        fpCost: '57',
        requirements: {
            int: '68',
            fai: '0',
            arc: '0'
        }
    },
    {
        name: 'Briars Of Punishment',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/briars_of_punishment_sorcery_elden_ring_wiki_guide_200px.png',
        description: 'An aberrant sorcery discovered by exiled criminals. Theirs are the sorceries most reviled by the academy. Wounds the caster with thorns of punishment, sending a trail of bloodthorns running over the ground to impale enemies from below. This sorcery can be cast repeatedly. The guilty, their eyes gouged by thorns, lived in eternal darkness. There, they discovered the blood star.',
        officialKobyRating: 'B tier, ive actually never used this spell but it has blood loss buildup so thats cool.',
        type: 'Sorcery',
        class: 'Aberrant Sorcery',
        damageType: 'Magic (with blood loss buildup)',
        requiredMemory: '1',
        whereToFind: 'Can be found at the leftmost dead tree next to three Thorn Sorcerers just before the long stone bridge with the Golem Archer at the end in the Mountaintops of the Giants region.',
        fpCost: '9',
        requirements: {
            int: '0',
            fai: '21',
            arc: '0'
        }
    },
    {
        name: 'Meteorite Of Astel',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/meteorite_of_astel_sorcery_elden_ring_wiki_guide_200px.png',
        description: 'One of the glintstone sorceries that manipulates gravitational forces. Summons a void that emits a hail of meteorites. Hold to continue the effect. A manifestation of the power with which Astel leveled the Eternal City.',
        officialKobyRating: 'B tier, very good in PVE with high damage but like comet azure, slow and easy to dodge in PVP',
        type: 'Sorcery',
        class: 'Gravity Sorcery',
        damageType: 'Physical and Magic',
        requiredMemory: '2',
        whereToFind: 'Consecrated Snowfield: Dropped by Astel, Stars of Darkness, found within Yelough Anix Tunnel.',
        fpCost: '60 (per tick)',
        requirements: {
            int: '55',
            fai: '0',
            arc: '0'
        }
    },
    {
        name: 'Night Shard',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/night_shard_icon-sorcery_elden_ring_wiki_guide_200px.png',
        description: 'One of the night sorceries of Sellia, Town of Sorcery. Swiftly fires a semi-invisible projectile. This sorcery can be used without delay after performing another action. The Sellian sorcerers were assassins, and it is said that they often hunted their fellows.',
        officialKobyRating: 'A tier, extremely easy to buff damage to maximize damage and low fp cost. Like most sorceries, it is annoying in PVP',
        type: 'Sorcery',
        class: 'Night Sorceriess',
        damageType: 'Magic',
        requiredMemory: '1',
        whereToFind: 'Can be purchased from Gowry for 4,000 Runes after completing his quest line.',
        fpCost: '7',
        requirements: {
            int: '18',
            fai: '0',
            arc: '0'
        }
    },
    {
        name: 'Starlight',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/starlight_sorcery_elden_ring_wiki_guide_200px.png',
        description: 'One of the glintstone sorceries of the Academy of Raya Lucaria. Creates a small, floating star light that illuminates surroundings. This sorcery can be cast while in motion. Granted to sorcerers who depart from the academy to embark on journeys. Even during the blackest nights, sojourns underground, or imprisonment in gaol, the stars are never far from a sorcerers side.',
        officialKobyRating: 'F tier, this spell is literally exactly like a lantern but it costs fp to use and goes out after awhile. dont waste a memory slot or fp and just buy yourself a lantern',
        type: 'Sorcery',
        class: 'Glintstone Sorcery',
        damageType: 'none',
        requiredMemory: '1',
        whereToFind: 'Starlight can be learned from Thops at the Church of Irith for 2500 Runes. ',
        fpCost: '9',
        requirements: {
            int: '15',
            fai: '0',
            arc: '0'
        }
    },
    {
        name: 'Carian Slicer',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_slicer_sorcery_elden_ring_wiki_guide_200px.png',
        description: 'One of the sorceries of the Carian royal family. Conjures a magic sword and delivers a swift sweeping slash. This sorcery can be used without delay after performing another action. Even among the Carian sword sorceries, this is a notably effective technique.',
        officialKobyRating: 'S tier, probably one of the best PVE spells in the game. Very buffable, super fast and chain castable for loads of damage. In PVP, however, if you use this, i know you think youre cool for using a magic sword from your staff. youre annoying. Be a man and use a real sword',
        type: 'Sorcery',
        class: 'Carian Sorcery',
        damageType: 'Magic',
        requiredMemory: '1',
        whereToFind: 'After giving the Royal House Scroll to Miriel Pastor of Vows, Sorceress Sellen, or Preceptor Seluvis, the spell can be purchased for 1,500 Runes.',
        fpCost: '4',
        requirements: {
            int: '14',
            fai: '0',
            arc: '0'
        }
    },

    {
        name: 'O, Flame!',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/o_flame_incantation_elden_ring_wiki_guide_200px.png',
        description: 'Incantation of the Fire Monks. Momentarily sparks roaring flame from the casters hand. Charging enhances potency. The Giants Flame still smolders upon the distant northern mountaintop, and the Fire Monks are its guardians.',
        officialKobyRating: 'S tier, This is my favourite incantation for PVE. its fast, chargable, and does fire damage which makes this spell extremely buffable along with fire damage being one of the most common weaknesses. Also string in PVP but the casting time is too slow for how much range it has',
        type: 'Incantation',
        class: 'Fire Monk Incantation',
        damageType: 'Fire',
        requiredMemory: '1',
        whereToFind: 'Purchase from Brother Corhyn or Miriel, Pastor of Vows after giving either the Fire Monks Prayerbook',
        fpCost: '16',
        requirements: {
            int: '0',
            fai: '16',
            arc: '0'
        }
    },
    {
        name: 'Burn O Flame!',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/burn_o_flame_incantation_elden_ring_wiki_guide_200px.png',
        description: 'One of the incantations that draws directly from the power of the Fire Giants. Raises a series of flame pillars around the caster. Charging further increases the number of flame pillars. The Fire Giants borrowed from the power of a fell god, and still they were defeated. Yet their failure released them from their solitary curse: to serve as keepers of the Flame for eternity.',
        officialKobyRating: 'A tier, great in PVE but also a bit situational. Just like O, Flame! it is super buffable. In PVP this spell is very funny because it shoots flame pillars up from the ground and flings players into the air, doing massive damage. the AOE is very large as well so it makes getting out of range of the pillars very difficult',
        type: 'Incantation',
        class: 'Fire Giant Incantation',
        damageType: 'Fire',
        requiredMemory: '1',
        whereToFind: 'Trade Remembrance of the Fire Giant with Enia at Roundtable Hold.',
        fpCost: '26',
        requirements: {
            int: '0',
            fai: '27',
            arc: '0'
        }
    },
    {
        name: 'Giantaflame Take Thee',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/giantsflame_take_thee_incantation_elden_ring_wiki_guide_200px.png',
        description: 'One of the incantations that draws directly from the power of the Fire Giants. Hurls a massive ball of raging fire. Charging enhances potency and causes the ball of fire to explode. There is no record of this incantation in common prayerbooks. Only a select few prelates know of its existence.',
        officialKobyRating: 'S tier, its basically a mini nuke. Need i say more?',
        type: 'Incantation',
        class: 'Fire Giant Incactation',
        damageType: 'Fire',
        requiredMemory: '2',
        whereToFind: 'Purchase from Brother Corhyn or Miriel, Pastor of Vows for 13,000 Runes after giving them the Giants Prayerbook.',
        fpCost: '30',
        requirements: {
            int: '0',
            fai: '30',
            arc: '0'
        }
    },
    {
        name: 'Stone Of Gurranq',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/stone_of_gurranq_incantation_elden_ring_wiki_guide_200px.png',
        description: 'Superior incantation taught by Gurranq, the Beast Clergyman. Hurls a boulder before the caster. This incantation can be cast repeatedly. Long ago, Gurranq was a beast of such terrifying ferocity that his former name meant "Death of the Demigods."',
        officialKobyRating: 'B tier, mmmm rock, yes. i throw rock. Big stone',
        type: 'Incantation',
        class: 'Beastial Incantation',
        damageType: 'Physical',
        requiredMemory: '1',
        whereToFind: 'Bestial Sanctum: Reward from Gurranq, Beast Clergyman after giving him the 6th Deathroot.',
        fpCost: '15',
        requirements: {
            int: '0',
            fai: '13',
            arc: '0'
        }
    },
    {
        name: 'The Flame Of Frenzy',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/the_flame_of_frenzy_incantation_elden_ring_wiki_guide_200px.png',
        description: 'Incantation originating from the maddening Three Fingers. Causes the yellow flame of frenzy to burst forth from the casters eyes. Charging increases the range of the burst. The flame of frenzy deals damage and causes buildup of madness. This incantation also causes buildup of madness in the caster, and is only effective against Tarnished.',
        officialKobyRating: 'B tier, very good spell that is chargable and does fire damage with a drawback of the madness buildup when used. If a schizophrenic could cast a spell, this is what it would look like.',
        type: 'Incantation',
        class: 'Frenzied Flame Incantation',
        damageType: 'Fire (with madness buildup)',
        requiredMemory: '1',
        whereToFind: 'Callu Baptismal Church in the Weeping Peninsula. Found on a corpse by a pillar on the left side of the church.',
        fpCost: '16',
        requirements: {
            int: '0',
            fai: '16',
            arc: '0'
        }
    },
    {
        name: 'Frenzied Burst',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/frenzied_burst_incantation_elden_ring_wiki_guide_200px.png',
        description: 'Incantations originating from the maddening Three Fingers. Releases concentrated blasts of the yellow flame of frenzy from the casters eyes. Charging enhances potency, enabling the blasts to penetrate the enemys guard. In times past, every single person who attempted to control the flame of frenzy succumbed to madness after a desperate internal struggle. This incantation is testament to a meager victory.',
        officialKobyRating: 'A tier, longest ranged spell in the game and is super buffable. Good Luck Hitting someone with this in PVP, it is quite slow and easy to dodge',
        type: 'Incantation',
        class: 'Frenzied Flame Incantation',
        damageType: 'Fire (with madness buildup)',
        requiredMemory: '1',
        whereToFind: 'Dropped by a Teardrop Scarab in the Liurnia of the Lakes region, South of the Church of Inhibition near some frenzied rats',
        fpCost: '24',
        requirements: {
            int: '0',
            fai: '22',
            arc: '0'
        }
    },
    {
        name: 'Inescapeble Frenzy',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/inescapable_frenzy_incantation_elden_ring_wiki_guide_200px.png',
        description: 'Causes the yellow flame of frenzy to blaze from the casters eyes. The caster then latches onto foes, spreading the madness. This incantation also causes buildup of madness in the caster, and is only effective against Tarnished. To gaze into one anothers eyes is truly the most intimate form of human contact.',
        officialKobyRating: 'D tier, its not F tier because grab attacks are funny in PVP but it is ranked so low because it only works on human enemies which are probably one of the the least abundant enemies in the game so its usage is very very limited',
        type: 'Incantation',
        class: 'Frenzied Flame Incantation',
        damageType: 'Fire (with madness buildup)',
        requiredMemory: '1',
        whereToFind: 'After making your way past Subterranean Shunning-Grounds and defeating Mohg, The Omen, attack the altar at the front of the boss room. It should lower revealing a new area. Continue through here until you are forced to platform downwards using stone coffins as platforms. Near the bottom you will see a corpse that has Inescapable Frenzy on it.',
        fpCost: '22',
        requirements: {
            int: '0',
            fai: '21',
            arc: '0'
        }
    },
    {
        name: 'Flame, Grant Me Strength',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/flame_grant_me%20strength_incantation_elden_ring_wiki_guide_200px.png',
        description: 'Superior incantation of the Fire Monks. Creates an invigorating fire within that enhances physical and fire-affinity attack power. This incantation does not burn the caster, and so it is considered forbidden by the guardians of the Flame.',
        officialKobyRating: 'S tier, buffs physical and fire damage by 20%. Very very strong in all scenarios',
        type: 'Incantation',
        class: 'Fire Monk Incantation',
        damageType: 'none',
        requiredMemory: '1',
        whereToFind: 'Found behind Fort Gael, on a body between two Flame Chariots.',
        fpCost: '28',
        requirements: {
            int: '0',
            fai: '15',
            arc: '0'
        }
    },
    {
        name: 'Barrier Of Gold',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/barrier_of_gold_incantation_elden_ring_wiki_guide_200px.png',
        description: 'One of the incantations of Erdtree Worship. Greatly increases magic damage negation for the caster and nearby allies. Hold to continue praying and delay activation. This incantation was used by the champions of the Erdtree in the First and the Second Liurnian Wars, during which the red-haired Radagon joined the heroes ranks',
        officialKobyRating: 'S tier, the ultimate counter to magic users in PVP. Reduces magic damage taken by 60%',
        type: 'Incantation',
        class: 'Erdtree Incantation',
        damageType: 'none',
        requiredMemory: '1',
        whereToFind: 'Leyndell, Royal Capital: Dropped by an invisible Teardrop Scarab. Can be found after heading down the stairs and taking the elevator, right after the fight with Godfrey, First Elden Lord (Golden Shade). ',
        fpCost: '30',
        requirements: {
            int: '0',
            fai: '24',
            arc: '0'
        }
    },
    {
        name: 'Wrath Of Gold',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/wrath%20of%20gold_incantation_elden_ring_wiki_guide_200px.png',
        description: 'Superior Erdtree Worship incantation. Produces a golden shockwave that knocks back nearby foes. Charging increases the size of the shockwave. This incantation was discovered when the Elden Ring was shattered, and it was feared as a sign of the Erdtrees wrath.',
        officialKobyRating: 'B tier, it does a lot of holy damage and casts very quick aith a large AOE. However, it suffers from a massive fp cost. it is funny to use in PVP because it does a lot of damage and launches them away from you',
        type: 'Incantation',
        class: 'Erdtree Incantation',
        damageType: 'Holy',
        requiredMemory: '1',
        whereToFind: 'Found in the southernmost section of Woodfolk Ruins. Its the part directly northeast of Altus Tunnel. Among the enemies, there is a staircase that goes down and leads to a chest that contains this Incantation.',
        fpCost: '40',
        requirements: {
            int: '0',
            fai: '32',
            arc: '0'
        }
    }
            
];

module.exports = Spells