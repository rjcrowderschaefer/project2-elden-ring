require('../config/connection');

module.exports = {
    Bosses: require('./world-information/Bosses'),
    CharacterInformation: require('./character-info/CharacterInfo'),
    Classes: require('./character-info/Classes'),
    CreaturesEnemies: require('./world-information/Enemies'),
    DamageTypes: require('./equipment-and-magic/DamageTypes'),
    EquipmentMagic: require('./EquipmentAndMagic'),
    Keepsakes: require('./character-info/Keepsakes'),
    LegacyDungeons: require ('./world-information/LegacyDungeons'),
    Npcs: require('./world-information/Npcs'),
    Stats: require('./character-info/Stats'),
    StatusEffects: require ('./StatusEffects'),
    Talismans: require ('./equipment-and-magic/Talismans'),
    Upgrades: require('./equipment-and-magic/Upgrades'),
    Weapons: require('./equipment-and-magic/Weapons'),
    WorldInformation: require('./WorldInformation'),
}