const LegacyDungeons = [
    {
        name: 'Stormveil Castle',
        description: 'Stormveil Castle is a Legacy Dungeon in Elden Ring. A castle that lies on the cliffs of Stormhill, a stronghold of Godrick the Grafted. Be wary of this location since there are hordes of soldiers and hostile creatures that will stop anything and anyone who tries to infiltrate the area. Players entering Stormveil Castle should beware that its a challenging dungeon with groups of numerous enemies with traps and ballistas as well as mini-bosses. This area does not allow riding.',
        img1: 'data:image/jpeg;base64,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',
        img2: 'https://cdn.holdtoreset.com/wp-content/uploads/2022/02/25144944/elden-ring-shabiri-grapes-location1.jpg',
        bosses: 'Gracted Scion, Lion Guardian, Ulcerated Tree Spirit, Godrick The Grafted',
        NPCs: 'Gatekeeper Gustoc, Sorcerer Rogier, Nipheli Loux, Kenneth Haight',
    }
]
module.exports = LegacyDungeons;