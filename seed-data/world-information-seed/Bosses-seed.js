
// -----------------------------------------------
// use image 1 for cover image in the index page!!
// -----------------------------------------------
const Bosses = [
    {
        name: 'Godrick The Grafted',
        img1: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_grafted_elden_ring_wiki_guide_200px.png',
        img2: 'https://i.ytimg.com/vi/HjJr1aX438Y/maxresdefault.jpg',
        img3: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godrick_the_grafted_bosses_elden_ring_wiki_600px.jpg',
        description: 'Godrick the Grafted is the ruler of Stormveil Castle, and is one of the first demigods and shardbearers that players can fight. He is a descendant of Godfrey and thus born of the golden lineage, but Gideon and Kenneth Haight believe him to be weak and unworthy to rule. Much of Godricks power comes from the arms and legs of soldiers hes grafted onto himself, and especially the dragon head grafted onto his left arm during the second phase of his fight. His knights and soldiers wear armor that bears emblems of the golden lineage: a two-headed war-axe and the beast regent, Serosh.',
        officalKobyRating: 'B tier, cool fight but very easy and his attacks are very telegraphed. Also from a lore point of view he is quite a scummy and pathetic character',
        strongVS: 'Holy',
        weakTo: 'Standard, Slash, Strike, Pierce',
        health: '6,080 HP',
        damageType: 'Standard, Fire',
        location: 'Stormveil Castle',
        drops: 'Godricks Great Rune, Rememberance of the Grafted',
        quote: '"I command thee, kneel! I am the lord of all that is golden!"'
    },
    {
        name: 'Rennala Carian Queen Of The Full Moon',
        img1: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_full_moon_queen_elden_ring_wiki_guide_200px.png',
        img2: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rennala_queen_of_the_full_moon_bosses_elden_ring_wiki_600px.jpg',
        img3: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rennala-3-elden-ring-wiki-guide.jpg',
        description: 'Rennala, Queen of the Full Moon is a Legend Boss in Elden Ring. Though not a demigod, Rennala is one of the shardbearers who resides in the Academy of Raya Lucaria. Rennala is a powerful sorceress, head of the Carian Royal family, and erstwhile leader of the Academy. Rennala is an optional boss, and doesnt need to be defeated in order to advance in Elden Ring. However, she is a shardbearer, and two of the four available shardbearers must be defeated before entering Leyndell, Royal Capital. In addition, she must be defeated to achieve a certain ending. Once defeated, Rennala becomes a friendly NPC who can be used to reassign your characters stats.',
        officalKobyRating: 'B tier, very very cool boss but suffers from having a gimmick first phase which is very cool and interesting at first but then becomes a chore to get through to the second phase',
        strongVS: 'Magic and all status affects',
        weakTo: 'Standard, Slash, Pierce',
        health: 'Phase 1 has 3,493 HP and phase 2 has 4,097 HP',
        damageType: 'Standard, Magic',
        location: 'Raya Lucaria Academy',
        drops: 'Great Rune Of The Unborn, Rememberance of the Full Moon Queen',
        quote: 'Hush, little culver. Ill soon birth thee anew, a sweeting fresh and pure…'
    },
    {
        name: 'Starscourage Radahn',
        img1: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_starscourge_elden_ring_wiki_guide_200px.png',
        img2: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/radahn_enemies_elden_ring_wiki_600px.jpg',
        img3: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/download-12-1.jpg',
        description: 'Starscourge Radahn is a Legend Boss in Elden Ring. Starscourge Radahn is heralded as one of the mightiest living demigods, having fought Malenia the Severed to a standstill during the war of the Shattering. However, his resulting affliction with the Scarlet Rot caused him to be driven to insanity, crippling him and reducing him to a state of feral rage. He is located in Caelid, where he can be accessed from Redmane Castle after activating the Radahn Festival by progressing far enough in Rannis questline, or activating any site of grace in Altus Plateau.',
        officalKobyRating: 'S tier, this is one of the best bosses in the game. His backstory is very cool, sad, but also a bit funny',
        strongVS: 'Holy, Sleep',
        weakTo: 'Pierce',
        health: '9,572 HP',
        damageType: 'Standard, Pierce, Magic',
        location: 'Redmane Castle',
        drops: 'Radahns Great Rune, Rememberance of the Starscourage',
        quote: 'Radahn does not talk'
    },
    {
        name: 'Morgott, The Omen King',
        img1: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_omen_king_elden_ring_wiki_guide_200px.png',
        img2: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/morgott-omen-king-3-elden-ring-wiki-guide.jpg',
        img3: 'https://cdn.donmai.us/original/56/6c/566cc0a822641db7388d99cbc1c9f165.jpg',
        description: 'Morgott, The Omen King, also known as Morgott the Grace Given, is a Demigod Boss in Elden Ring. Morgott is the true identity of Margit, the Fell Omen, and the self-proclaimed "Last of All Kings". Although he and his twin brother Mohg were imprisoned deep in the Subterranean Shunning-Grounds for being born as Omen royalty, Morgott still loved the Golden Order and defended the capital when his fellow demigods invaded during the Shattering. This is not an optional boss as players must defeat him to advance in Elden Ring.',
        officalKobyRating: 'C tier, very cool boss but he is just kind of annoying',
        strongVS: 'Holy, Sleep',
        weakTo: 'Slash, Lightning',
        health: '10,399',
        damageType: 'Slash, Pierce, Holy, Fire, blood loss buildup',
        location: 'Lyndell, Royal Capital',
        drops: 'Morgotts Great Rune',
        quote: ' Have it writ upon thy meagre grave: "Felled by King Morgott! Last of all kings.'
    },
    {
        name: 'Rykard, Lord Of Blasphemy',
        img1: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_blasphemous_elden_ring_wiki_guide_200px.png',
        img2: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rykard_lord_of_blasphemy_bosses_elden_ring_wiki_600px.jpg',
        img3: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/elden-ring/f/f8/20220226224209_1.jpg',
        description: 'God-Devouring Serpent and Rykard, Lord of Blasphemy is a two-phase Demigod Boss in Elden Ring. The God-Devouring Serpent is a massive coiled serpent found at the Volcano Manor in Mt. Gelmir, and Rykard, Lord of Blasphemy is its true form thats revealed after the first phase is defeated. When Rykard offered himself up to the serpent in a pursuit of immortality, most of his followers turned on him and sought to bring him down with the Serpent-Hunter.',
        officalKobyRating: 'A tier, argueably the best gimmick boss from software has made',
        strongVS: 'Fire',
        weakTo: 'Standard, Slash, Pierce, Frostbite',
        health: '89,613 HP',
        damageType: 'Standard, Pierce, Fire',
        location: 'Volcano Manor',
        drops: 'Rykards Great Rune, Rememberance of the Blasphemous',
        quote: 'Join the Serpent King, as family... Together, we will devour the very gods!'
    },
    {
        name: 'Mohg, Lord Of Blood',
        img1: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_blood_lord_item_elden_ring_wiki_guide_200px.png',
        img2: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mohg_the_omen_bosses_elden_ring_wiki_600px.jpg',
        img3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbfspU72lsIwuiamA1rghIp6CRdHV76W5gA&usqp=CAU',
        description: 'Mohg, Lord of Blood is a Demigod Boss in Elden Ring. This Omen demigod specializes in blood magic. Unlike his twin Morgott, Mohg fully embraced his accursed Omen blood and was able to use it to wield bloodflame magic after encountering the Formless Mother. Though he himself is not an Empyrean, he hopes to rise up to king consort by raising Miquella up to godhood and becoming his consort.',
        officalKobyRating: 'D tier, very cool visually but the gameplay of the fight is very cringe and he heals a lot of hp when he gets to half health',
        strongVS: 'Fire',
        weakTo: 'Standard, Slash, Strike, Pierce, Bleed',
        health: '18,389 HP',
        damageType: 'Standard, Pierce, Fire',
        location: 'Mohgwyn Palace',
        drops: 'Mohgs Great Rune, Rememberance of the Blood Lord',
        quote: 'Welcome, honored guest. To the birthplace of our Dynasty!'
    },
    {
        name: 'Malenia, Blade Ov Miquella',
        img1: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_rot_goddess_elden_ring_wiki_guide_200px.png',
        img2: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/malenia,-blade-of-miquella.jpg',
        img3: 'https://www.ggrecon.com/media/tp4orxl0/elden-ring-malenia-boss-1.jpg?mode=crop&width=682&quality=80&format=webp',
        description: 'Malenia, Blade of Miquella and Malenia, Goddess of Rot is two-phase a Demigod Boss in Elden Ring. Shes the twin of Miquella, the most powerful of the Empyreans, and gained renown for her legendary battle against Starscourge Radahn during the Shattering, in which she unleashed the power of the Scarlet Rot and reduced Caelid to ruins.',
        officalKobyRating: 'S tier, best and also hardest boss in any from software game.',
        strongVS: 'Poison, Rot, Holy',
        weakTo: 'Fire, Frostbite, Bleed',
        health: '33,251',
        damageType: 'Slash, Standard, Pierce, Rot',
        location: 'Elphael, Brace of the Haligtree',
        drops: 'Malenias Great Rune, Rememberance of the Rot Goddess',
        quote: '...Heed my words. I am Malenia. Blade of Miquella. And I have never known defeat.'
    },
    {
        name: 'Lichdragon Fortissax ',
        img1: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_lichdragon_elden_ring_wiki_guide_200px.png',
        img2: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/fortissax_bosses_elden_ring_wiki_600px.jpg',
        img3: 'data:image/jpeg;base64,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',
        description: 'Lichdragon Fortissax is a Legend Boss in Elden Ring. This massive four-winged black dragon wields powerful lightning attacks and is found in Deeproot Depths. During the War of the Ancient Dragons, where the forces of Leyndell battled against the ancient dragons, Godwyn befriended Fortissax. After his death, Fortissax struggled to stave off the death blight that afflicted Godwyn, and was later corrupted by it. This is an optional boss, and doesnt need to be defeated in order to advance in Elden Ring. However, it must be defeated to achieve a certain ending.',
        officalKobyRating: 'C tier, just another aincent dragon fight, nothing too special about it other than the death blight buildup',
        strongVS: 'Lightning, Holy',
        weakTo: 'Pierce',
        health: '12,903 HP',
        damageType: 'Standard, Fire, Lightning, Death Blight',
        location: 'Deeproot Depths',
        drops: 'Rememberance of the Lichdragon',
        quote: 'After Godwyn the Golden became the Prince of Death, the ancient dragon fought long and hard against the Death within its companion. Alas, victory was never achieved and its only reward was corruption.'
    },
    {
        name: 'Maliketh, Marikas Black Blade',
        img1: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_black_blade_elden_ring_wiki_guide_200px.png',
        img2: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/maliketh-the-black-blade-4k.jpg',
        img3: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/beast-clergyman-4k.jpg',
        description: 'Beast Clergyman and Maliketh, The Black Blade is a two-phase Legend Boss in Elden Ring. The Beast Clergyman is found at the end of Crumbling Farum Azula and is revealed to be Maliketh, the Black Blade once you deal enough damage to him. Similar to how Blaidd is to Ranni, Maliketh is Queen Marikas shadow-bound beast. He was tasked to guard the Rune of Death, but his failure to do so led to the Night of the Black Knives. In order for this to never happen again, he imbued the rune into his very flesh.',
        officalKobyRating: 'A tier, very cool fight, the first phase is a bit annoying but the second phase is very cool.',
        strongVS: 'Holy, Sleep',
        weakTo: 'Standard, Slash, Strike, Pierce',
        health: '10,620 HP',
        damageType: 'Standard, Slash, Magic, Pierce, Holy',
        location: 'Crumbling Farum Azula',
        drops: 'Rememberance of the Black Blade',
        quote: 'Cower before Maliketh, Marikas Black Blade.'
    },
    {
        name: 'Astel, Naturalborn Of The Void',
        img1: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_naturalborn_elden_ring_wiki_guide_200px.png',
        img2: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/astel-naturalborn-of-the-void-1-elden-ring-wiki-guide.jpg',
        img3: 'https://files.cults3d.com/uploaders/14854341/illustration-file/0cea31d3-3600-4f2a-ac4d-8fb5f5e067a0/Untitled-1.jpg',
        description: 'Astel, Naturalborn of the Void is a Legend Boss in Elden Ring. This strange alien lifeform is comprised of many-colored star debris which landed in the Lands Between long ago, and is found in the Grand Cloister. Astel destroyed one of the Eternal Cities and wiped out their sky. This is an optional boss, as players dont need to defeat it in order to advance in Elden Ring. However, it must be defeated to achieve a certain ending.',
        officalKobyRating: 'D tier, very cool looking fight but the gameplay is very slow and boring',
        strongVS: 'Magic, Fire, Lightning, Holy',
        weakTo: 'Standard, Slash, Strike, Pierce',
        health: '11,170 HP',
        damageType: 'Standard, Magic',
        location: 'Somewhere?',
        drops: 'Rememberance of the Naturalborn',
        quote: 'A malformed star born in the flightless void far away. Once destroyed an Eternal City and took away their sky. A falling star of ill omen.'
    },
    {
        name: '',
        img1: '',
        img2: '',
        img3: '',
        description: '',
        officalKobyRating: '',
        strongVS: '',
        weakTo: '',
        health: '',
        damageType: '',
        location: '',
        drops: '',
        quote: ''
    },
    {
        name: '',
        img1: '',
        img2: '',
        img3: '',
        description: '',
        officalKobyRating: '',
        strongVS: '',
        weakTo: '',
        health: '',
        damageType: '',
        location: '',
        drops: '',
        quote: ''
    },
    {
        name: '',
        img1: '',
        img2: '',
        img3: '',
        description: '',
        officalKobyRating: '',
        strongVS: '',
        weakTo: '',
        health: '',
        damageType: '',
        location: '',
        drops: '',
        quote: ''
    },
    {
        name: '',
        img1: '',
        img2: '',
        img3: '',
        description: '',
        officalKobyRating: '',
        strongVS: '',
        weakTo: '',
        health: '',
        damageType: '',
        location: '',
        drops: '',
        quote: ''
    },
    {
        name: '',
        img1: '',
        img2: '',
        img3: '',
        description: '',
        officalKobyRating: '',
        strongVS: '',
        weakTo: '',
        health: '',
        damageType: '',
        location: '',
        drops: '',
        quote: ''
    }
]

module.exports = Bosses;