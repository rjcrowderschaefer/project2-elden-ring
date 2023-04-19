const Stats = [
    {
        name: 'Vigor',
        softCap: '60',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNPlZb0ViWKqrWRNuRoKrXZu1Nji3fNjTZQ&usqp=CAU',
        description: 'Attribute governing HP. Also affects fire resistance and Immunity stat.'
    },
    {
        name: 'Mind',
        softCap: '60',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVe97Yc3sdMQLZq_UvZA-7BPNca6nkU7wbA&usqp=CAU',
        description: 'Attribute governing FP. Also affects the Focus stat.'
    },
    {
        name: 'Endurnace',
        softCap: '50',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mptdO-wO51Rezmg0R436Bu8L66ulgXwzag&usqp=CAU',
<<<<<<< HEAD
        discription: 'Attribute governing Stamina. Also affects Robustness. Determines how heavy your equipment can be, a.k.a. Equip Load.'
=======
        description: 'Attribute governing Stamina. Also affects Robustness. Determines how heavy your equipment can be, a.k.a. Equip Load.'
>>>>>>> 5e9bc4f350fa6b7cc2a008018f858c80e840d59f
    },
    {
        name: 'Strength',
        softCap: '80',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK980mkD_5b7KgRL4SrGfjvLupYq5S3CtDOg&usqp=CAU',
        description: 'Attribute required to wield heavy armaments. Influences player physical/strike/slash/pierce defense and provides Attack Power scaling for weapons that utilize the stat.'
    },
    {
        name: 'Dexterity',
        softCap: '80',
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/prosthesis-wearer_heriloom_talisman_elden_ring_wiki_guide_200px.png',
        description: 'Attribute required to wield advanced armaments. Also boosts attack power of dexterity-scaling armaments, reduces casting time of Spells, softens fall damage, and makes it harder to be knocked off your horse'
    },
    {
        name: 'Intelligence',
        softCap: '80',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrpv4pS0R5heseb-Gh5UcZC7qnuE6tgTz4Q&usqp=CAU',
        description: 'Attribute required to perform glintstone sorceries. Also boosts the power of intelligence-scaling Sorceries and improves Magic Resistance. Influences player magic defense and provides AP scaling for weapons that utilize the stat.'
    },
    {
        name: 'faith',
        softCap: '80',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowFi0MCOjxQclRgFlBrxLdodt8-8zVzJbOw&usqp=CAU',
        description: 'Attribute required to perform sacred Incantations. Also boosts the power of faith-scaling Incantations.'
    },
    {
        name: 'Arcane',
        softCap: '80',
        img: 'data:image/jpeg;base64,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',
        description: 'Influences player holy defense and death resistance, provides AP scaling for weapons that utilize the stat, and provides scaling for poison, bleed, sleep, and madness buildup.'
    }
];

module.exports = Stats;