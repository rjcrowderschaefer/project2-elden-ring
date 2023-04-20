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
        // await CharacterInformation.deleteMany({});
        // await CharacterInformation.insertMany(characterInfo);
        res.render('characterInformation/index.ejs', {characterInfo});
    } catch(err) {
        console.log(err);
        next();
    }
})

// Classes routes

router.get('/Classes', async (req, res, next) => {
    try {
        // await Classes.deleteMany({});
        // const newClassesInfo = await Classes.insertMany(classesInfo);
        const classes = await Classes.find();
        res.render('classes/index.ejs', {classesInfo: classes});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Classes/new', (req, res) => {
    res.render('classes/new')
});

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

router.post('/Classes', async (req, res, next) => {
    try {
        let finalClass = {
            name: req.body.name,
            soulLevel: req.body.soulLevel,
            description: req.body.description,
            img: req.body.img,
            stats: {
                vigor: req.body.vigor,
                mind: req.body.mind,
                endurance: req.body.endurance,
                strength: req.body.strength,
                dex: req.body.dex,
                int: req.body.int,
                fai: req.body.fai,
                arc: req.body.arc,
            },
            weapons: {
                weapon1: req.body.weapon1,
                weapon2: req.body.weapon2,
                weapon3: req.body.weapon3,
            },
            spells: {
                spell1: req.body.spell1,
                spell2: req.body.spell2,
            },
            armor: {
                head: req.body.head,
                chest: req.body.chest,
                hands: req.body.hands,
                legs: req.body.legs,
            }
        };
        const newClass = await Classes.create(finalClass);
        // console.log(req.body);
        // console.log(newClass);
        res.redirect('/character_information/Classes');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Classes/:name/edit', async (req, res, next) => {
    try {
        const classToBeEdited = await Classes.findOne({name: req.params.name});
        // console.log(classToBeEdited);
        res.render('classes/edit', {classToBeEdited});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/Classes/:name', async (req, res, next) => {
    try {
        const classId = await Classes.findOne({name: req.params.name});
        // console.log(classId[0]._id);
        const updatedClass = await Classes.findByIdAndUpdate(classId._id, req.body);
        // console.log(req.body);
        res.redirect(`/character_information/Classes/${req.body.name}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Classes/:name/delete', async (req, res, next) => {
    try {
        const classToBeDeleted = await Classes.findOne({name: req.params.name});
        res.render('classes/delete', {classToBeDeleted});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/Classes/:name', async (req, res, next) => {
    try {
        const classId = await Classes.findOne({name: req.params.name});
        const deletedClass = await Classes.findByIdAndDelete(classId._id, req.body);
        console.log(deletedClass)
        res.redirect(`/character_information/Classes`);
    } catch(err) {
        console.log(err);
        next();
    }
})

// Keepsakes routes

router.get('/Keepsakes', async (req, res, next) => {
    try {
        // await Keepsakes.deleteMany({});
        // const newKeepsakesInfo = await Keepsakes.insertMany(keepsakesInfo);
        const keepsakes = await Keepsakes.find();
        res.render('keepsakes/index.ejs', {keepsakesInfo: keepsakes});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Keepsakes/new', (req, res) => {
    res.render('keepsakes/new')
});

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

router.post('/Keepsakes', async (req, res, next) => {
    try {
       let finalKeepsakes = {
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        effect: req.body.effect,
        img: req.body.img,
       };
        const newKeepsake = await Keepsakes.create(finalKeepsakes);
        res.redirect('/character_information/Keepsakes');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Keepsakes/:name/edit', async (req, res, next) => {
    try {
        const keepsakeToBeEdited = await Keepsakes.findOne({name: req.params.name});
        res.render('keepsakes/edit', {keepsakeToBeEdited});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/Keepsakes/:name', async (req, res, next) => {
    try {
        const keepsakeId = await Keepsakes.findOne({name: req.params.name});
        const updatedKeepsake = await Keepsakes.findByIdAndUpdate(keepsakeId._id, req.body);
        res.redirect(`/character_information/Keepsakes/${req.body.name}`);
    } catch(err) {
        console.log(err);
        next();
    }
}) 

router.get('/Keepsakes/:name/delete', async (req, res, next) => {
    try {
        const keepsakeToBeDeleted = await Keepsakes.findOne({name: req.params.name});
        res.render('keepsakes/delete', {keepsakeToBeDeleted});
    } catch(err) {
        console.log(err);
        next();
    }
})


router.delete('/Keepsakes/:name', async (req, res, next) => {
    try {
        const keepsakeId = await Keepsakes.findOne({name: req.params.name});
        const deletedKeepsake = await Keepsakes.findByIdAndDelete(keepsakeId._id, req.body);
        res.redirect(`/character_information/Keepsakes`);
    } catch(err) {
        console.log(err);
        next();
    }
})

// Stats routes

router.get('/Stats', async (req, res, next) => {
    try {
        // await Stats.deleteMany({});
        // const newStatsInfo = await Stats.insertMany(statsInfo);
        const stats = await Stats.find();
        res.render('stats/index.ejs', {statsInfo: stats});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Stats/new', (req, res) => {
    res.render('stats/new')
});

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

router.post('/Stats', async (req, res, next) => {
    try {
        let finalStats = {
            name: req.body.name,
            softCap: req.body.softCap,
            img: req.body.img,
            description: req.body.description,
        };
        const newStat = await Stats.create(finalStats);
        res.redirect('/character_information/Stats');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Stats/:name/edit', async (req, res, next) => {
    try {
        const statToBeEdited = await Stats.findOne({name: req.params.name});
        res.render('stats/edit', {statToBeEdited});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/Stats/:name', async (req, res, next) => {
    try {
        const statId = await Stats.findOne({name: req.params.name});
        const updatedStat = await Stats.findByIdAndUpdate(statId._id, req.body);
        res.redirect(`/character_information/Stats/${req.body.name}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Stats/:name/delete', async (req, res, next) => {
    try {
        const statToBeDeleted = await Stats.findOne({name: req.params.name});
        res.render('stats/delete', {statToBeDeleted});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/Stats/:name', async (req, res, next) => {
    try {
        const statId = await Stats.findOne({name: req.params.name});
        const deletedStat = await Stats.findByIdAndDelete(statId._id, req.body);
        res.redirect(`/character_information/Stats`);
    } catch(err) {
        console.log(err);
        next();
    }
})

// Status Effects routes

router.get('/Status_Effects', async (req, res, next) => {
    try {
        // await StatusEffects.deleteMany({});
        // const newStatusEffectsInfo = await StatusEffects.insertMany(statusEffectsInfo);
        const statusEffects = await StatusEffects.find();
        res.render('statusEffects/index.ejs', {statusEffectsInfo: statusEffects});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Status_Effects/new', (req, res) => {
    res.render('statusEffects/new')
});

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

router.post('/Status_Effects', async (req, res, next) => {
    try {
        let finalStatusEffects = {
            name: req.body.name,
            img: req.body.img,
            description: req.body.description,
        };
        const newStatusEffect = await StatusEffects.create (finalStatusEffects);
        res.redirect('/character_information/Status_Effects');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Status_Effects/:name/edit', async (req, res, next) => {
    try {
        const statusEffectToBeEdited = await StatusEffects.findOne({name: req.params.name});
        res.render('statusEffects/edit', {statusEffectToBeEdited});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/Status_Effects/:name', async (req, res, next) => {
    try {
        const statusEffectId = await StatusEffects.findOne({name: req.params.name});
        const updatedStatusEffect = await StatusEffects.findByIdAndUpdate(statusEffectId._id, req.body);
        res.redirect(`/character_information/Status_Effects/${req.body.name}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/Status_Effects/:name/delete', async (req, res, next) => {
    try {
        const statusEffectToBeDeleted = await StatusEffects.findOne({name: req.params.name});
        res.render('statusEffects/delete', {statusEffectToBeDeleted});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/Status_Effects/:name', async (req, res, next) => {
    try {
        const statusEffectId = await StatusEffects.findOne({name: req.params.name});
        const statusEffectToBeDeleted = await StatusEffects.findByIdAndDelete(statusEffectId._id, req.body);
        res.redirect(`/character_information/Status_Effects`);
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;