const express = require('express');
const router = express.Router();

const CharacterInformation = require('../models/character-info/CharacterInfo');
const characterInfo = require('../seed-data/character-info-seed/CharacterInfo-seed');
const Classes = require('../models/character-info/classes');
const classesInfo = require('../seed-data/character-info-seed/Classes-seed');
const Keepsakes = require('../models/character-info/keepsakes');
const keepsakesInfo = require('../seed-data/character-info-seed/Keepsakes-seed');
const Stats = require('../models/character-info/stats');
const statsInfo = require('../seed-data/character-info-seed/Stats-seed');
const StatusEffects = require('../models/character-info/StatusEffects');
const statusEffectsInfo = require('../seed-data/character-info-seed/StatusEffects-seed');

router.get('', async (req, res, next) => {
    try {
        await CharacterInformation.deleteMany({});
        await CharacterInformation.insertMany(characterInfo);
        res.render('characterInformation/index.ejs', {characterInfo});
    } catch(err) {
        console.log(err);
        next();
    }
})

// Classes routes

router.get('/Classes', async (req, res, next) => {
    try {
        await Classes.deleteMany({});
        const newClassesInfo = await Classes.insertMany(classesInfo);
        res.render('classes/index.ejs', {classesInfo: newClassesInfo});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Classes/:name', async (req, res, next) => {
    try {
        const myClassesInfo = await Classes.findOne({name: req.params.name});
        // console.log(myClassesInfo);
        res.render('classes/show', {myClassesInfo})
    } catch(err) {
        console.log(err);
        next();
    }
})

// Keepsakes routes

router.get('/Keepsakes', async (req, res, next) => {
    try {
        await Keepsakes.deleteMany({});
        const newKeepsakesInfo = await Keepsakes.insertMany(keepsakesInfo);
        res.render('keepsakes/index.ejs', {keepsakesInfo: newKeepsakesInfo});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Keepsakes/:name', async (req, res, next) => {
    try {
        const myKeepsakesInfo = await Keepsakes.findOne({name: req.params.name});
        // console.log(myKeepsakesInfo);
        res.render('keepsakes/show', {myKeepsakesInfo})
    } catch(err) {
        console.log(err);
        next();
    }
})

// Stats routes

router.get('/Stats', async (req, res, next) => {
    try {
        await Stats.deleteMany({});
        const newStatsInfo = await Stats.insertMany(statsInfo);
        res.render('stats/index.ejs', {statsInfo: newStatsInfo});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Status_Effects/:name', async (req, res, next) => {
    try {
        const myStatusEffectsInfo = await StatusEffects.findOne({name: req.params.name});
        // console.log(myStatusEffectsInfo);
        res.render('statusEffects/show', {myStatusEffectsInfo})
    } catch(err) {
        console.log(err);
        next();
    }
})

// Status Effects routes

router.get('/Status_Effects', async (req, res, next) => {
    try {
        await StatusEffects.deleteMany({});
        const newStatusEffectsInfo = await StatusEffects.insertMany(statusEffectsInfo);
        res.render('statusEffects/index.ejs', {statusEffectsInfo: newStatusEffectsInfo});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Stats/:name', async (req, res, next) => {
    try {
        const myStatsInfo = await Stats.findOne({name: req.params.name});
        // console.log(myStatsInfo);
        res.render('stats/show', {myStatsInfo})
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;