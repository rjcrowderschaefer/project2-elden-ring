const CreaturesAndEnemies = [
    {
        name: 'Crucible Knight',
        img: 'data:image/jpeg;base64,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',
        description: 'Crucible Knight is a Field Boss in Elden Ring. These heavily-armored warriors take patience and practice to defeat. This is an optional boss as players dont need to defeat it to advance in Elden Ring. Other Crucible Knights appear in the Crucible Knight and Misbegotten Warrior, Taniths Knight, Crucible Knight Ordovis, and Crucible Knight Siluria boss fights. Two  Crucible Knight spirits can also be summoned by the Spirit-Caller Snail boss of the the Roads End Catacombs. 16 Crucible Knights in total can be fought throughout the Lands Between, though two of them have evidently died and can only be fought post mortem in spirit form.',
        damageType: 'Standard, Strike, Pierce, Holy',
        whereToFind: 'Pretty much everywhere',
        weakTo: 'Fire, Lightning',
        strongVS: 'All status affects',
    },
    {
        name: '',
        img: '',
        description: '',
        damageType: '',
        whereToFind: '',
        weakTo: '',
        strongVS: ''
    },
    {
        name: '',
        img: '',
        description: '',
        damageType: '',
        whereToFind: '',
        weakTo: '',
        strongVS: ''
    },
    {
        name: '',
        img: '',
        description: '',
        damageType: '',
        whereToFind: '',
        weakTo: '',
        strongVS: ''
    },
    {
        name: '',
        img: '',
        description: '',
        damageType: '',
        whereToFind: '',
        weakTo: '',
        strongVS: ''
    },
    {
        name: '',
        img: '',
        description: '',
        damageType: '',
        whereToFind: '',
        weakTo: '',
        strongVS: ''
    },
    {
        name: '',
        img: '',
        description: '',
        damageType: '',
        whereToFind: '',
        weakTo: '',
        strongVS: ''
    },
    {
        name: '',
        img: '',
        description: '',
        damageType: '',
        whereToFind: '',
        weakTo: '',
        strongVS: ''
    },
    {
        name: '',
        img: '',
        description: '',
        damageType: '',
        whereToFind: '',
        weakTo: '',
        strongVS: ''
    },
    {
        name: '',
        img: '',
        description: '',
        damageType: '',
        whereToFind: '',
        weakTo: '',
        strongVS: ''
    }
]
module.exports = CreaturesAndEnemies;