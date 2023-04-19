const express = require('express');
const router = express.Router();

const EquipmentAndMagic = require('../models/equipment-and-magic/EquipmentAndMagic');
const equipmentAndMagicInfo = require('../seed-data/equipment-and-magic-seed/Equipment-and-magic-seed');
const DamageTypes = require('../models/equipment-and-magic/DamageTypes');
const damageTypesInfo = require('../seed-data/equipment-and-magic-seed/DamageTypes-seed');
const Talismans = require('../models/equipment-and-magic/talismans');
const talismansInfo = require('../seed-data/equipment-and-magic-seed/Talismans-seed');
const Spells = require('../models/equipment-and-magic/spells');
const spellsInfo = require('../seed-data/equipment-and-magic-seed/Spells-seed');

router.get('', async (req, res, next) => {
    try {
        // await EquipmentAndMagic.deleteMany({});
        // await EquipmentAndMagic.insertMany(equipmentAndMagicInfo);
        res.render('equipmentMagic/index.ejs', {equipmentAndMagicInfo});
    } catch(err) {
        console.log(err);
        next();
    }
})

// Damage Types routes

router.get('/Damage_Types', async (req, res, next) => {
    try {
        // await DamageTypes.deleteMany({});
        // const newDamageTypesInfo = await DamageTypes.insertMany(damageTypesInfo);
        const damageTypes = await DamageTypes.find();
        res.render('damageTypes/index.ejs', {damageTypesInfo: damageTypes});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Damage_Types/new', (req, res) => {
    res.render('damageTypes/new')
});

router.get('/Damage_Types/:name', async (req, res, next) => {
    try {
        const myDamageTypeInfo = await DamageTypes.findOne({name: req.params.name});
        res.render('damageTypes/show', {myDamageTypeInfo})
    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('/Damage_Types', async (req, res, next) => {
    try {
        let finalDamageType = {
            name: req.body.name,
            effectiveAgainst: req.body.effectiveAgainst,
            ineffectiveAgainst: req.body.ineffectiveAgainst,
            notes: req.body.notes,
            img: req.body.img,
        }
        const newDamageType = await DamageTypes.create({name: req.body.name});
        res.redirect('/equipment_magic/Damage_Types');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Damage_Types/:name/edit', async (req, res, next) => {
    try {
        const damageTypeToBeEdited = await DamageTypes.findOne({name: req.params.name});
        res.render('damageTypes/edit', {damageTypeToBeEdited});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/Damage_Types/:name', async (req, res, next) => {
    try {
        const damageTypeId = await DamageTypes.findOne({name: req.params.name});
        const updatedDamageType = await DamageTypes.findByIdAndUpdate(damageTypeId._id, req.body);
        res.redirect(`/equipment_magic/Damage_Types/${req.body.name}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Damage_Types/:name/delete', async (req, res, next) => {
    try {
        const damageTypeToBeDeleted = await DamageTypes.findOne({name: req.params.name});
        res.render('damageTypes/delete', {damageTypeToBeDeleted});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/Damage_Types/:name', async (req, res, name) => {
    try {
        const damageTypeId = await DamageTypes.findOne({name: req.params.name});
        const deletedDamageType = await DamageTypes.findByIdAndDelete(damageTypeId._id, req.body);
        res.redirect(`/equipment_magic/Damage_Types`);
    } catch(err) {
        console.log(err);
        next();
    }
})

// Talismans routes

router.get('/Talismans', async (req, res, next) => {
    try {
        // await Talismans.deleteMany({});
        // const newTalismansInfo = await Talismans.insertMany(talismansInfo);
        const talismans = await Talismans.find();
        res.render('talismans/index.ejs', {talismansInfo: talismans});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Talismans/new', (req, res) => {
    res.render('talismans/new')
});

router.get('/Talismans/:name', async (req, res, next) => {
    try {
        const myTalismansInfo = await Talismans.findOne({name: req.params.name});
        res.render('talismans/show', {myTalismansInfo});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('/Talismans', async (req, res, next) => {
    try {
        let finalTalisman = {
            name: req.body.name,
            img: req.body.img,
            weight: req.body.weight,
            description: req.body.description,
            effect: req.body.effect,
            upgradedVersion: req.body.upgradedVersion,
            whereToFind: {
                regular: req.body.regular,
                plusOne: req.body.plusOne,
                plusTwo: req.body.plusTwo,
            }
        };
        const newTalisman = await Talismans.create({name: req.body.name});
        res.redirect('/equipment_magic/Talismans');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Talismans/:name/edit', async (req, res, next) => {
    try {
        const talismanToBeEdited = await Talismans.findOne({name: req.params.name});
        res.render('talismans/edit', {talismanToBeEdited});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/Talismans/:name', async (req, res, next) => {
    try {
        const talismansId = await Talismans.findOne({name: req.params.name});
        const updatedTalisman = await Talismans.findByIdAndUpdate(talismansId._id, req.body);
        res.redirect(`/equipment_magic/Talismans/${req.body.name}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Talismans/:name/:delete', async (req, res, next) => {
    try {
        const talismanToBeDeleted = await Talismans.findOne({name: req.params.name});
        res.render('talismans/delete', {talismanToBeDeleted});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/Talismans/:name', async (req, res, next) => {
    try {
        const talismanId = await Talismans.findOne({name: req.params.name});
        const deletedTalisman = await Talismans.findByIdAndDelete(talismanId._id, req.body);
        res.redirect(`/equipment_magic/Talismans`);
    } catch(err) {
        console.log(err);
        next();
    }
})

// Spells routes

router.get('/Spells', async (req, res, next) => {
    try {
        // await Spells.deleteMany({});
        // const newSpellsInfo = await Spells.insertMany(spellsInfo);
        const spells = await Spells.find();
        res.render(`spells/index.ejs`, {spellsInfo});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Spells/new', (req, res) => {
    res.render('spells/new')
});

router.get('/Spells/:name', async (req, res, next) => {
    try {
        const mySpellsInfo = await Spells.findOne({name: req.params.name});
        res.render('spells/show', {mySpellsInfo});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('/Spells', async (req, res, next) => {
    try {
        let finalSpell = {
            name: req.body.name,
            img: req.body.img,
            description: req.body.description,
            officialKobyRating: req.body.officialKobyRating,
            type: req.body.type,
            class: req.body.class,
            damageType: req.body.damageType,
            requiredMemory: req.body.requiredMemory,
            whereToFind: req.body.whereToFind,
            fpCost: req.body.fpCost,
            requirements: {
                int: req.body.int,
                fai: req.body.fai,
                arc: req.body.arc,
            }
        };
        const newSpell = await Spells.create({name: req.body.name});
        res.redirect('/equipment_magic/Spells');
    } catch(err) {
        console.log(err);
        next();
    }
})

// Weapons routes


module.exports = router;
