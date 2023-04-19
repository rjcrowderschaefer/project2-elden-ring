const express = require('express');
const router = express.Router();

const EquipmentAndMagic = require('../models/equipment-and-magic/EquipmentAndMagic');
const equipmentAndMagicInfo = require('../seed-data/equipment-and-magic-seed/Equipment-and-magic-seed');
const DamageTypes = require('../models/equipment-and-magic/DamageTypes');
const damageTypesInfo = require('../seed-data/equipment-and-magic-seed/DamageTypes-seed');
const Talismans = require('../models/equipment-and-magic/talismans');
const talismansInfo = require('../seed-data/equipment-and-magic-seed/Talismans-seed');

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

// Weapons routes


module.exports = router;