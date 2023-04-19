const express = require('express');
const router = express.Router();

const EquipmentAndMagic = require('../models/equipment-and-magic/EquipmentAndMagic');
const equipmentAndMagicInfo = require('../seed-data/equipment-and-magic-seed/Equipment-and-magic-seed');
const DamageTypes = require('../models/equipment-and-magic/DamageTypes');
const damageTypesInfo = require('../seed-data/equipment-and-magic-seed/DamageTypes-seed');

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

// Spells routes

// Weapons routes


module.exports = router;