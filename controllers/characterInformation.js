const express = require('express');
const router = express.Router();

const CharacterInformation = require('../models/character-info/CharacterInfo');
const characterInfo = require('../seed-data/character-info-seed/CharacterInfo-seed');
const Classes = require('../models/character-info/classes');
const classesInfo = require('../seed-data/character-info-seed/Classes-seed');

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
        console.log(myClassesInfo);
        res.render('classes/show', {myClassesInfo})
    } catch(err) {
        console.log(err);
        next();
    }
})



module.exports = router;