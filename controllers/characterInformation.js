const express = require('express');
const router = express.Router();

const CharacterInformation = require('../models/character-info/CharacterInfo');
const characterInfo = require('../seed-data/character-info-seed/CharacterInfo-seed');

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

// not doing additional routes for this index page and given that we will hard code the four categories on the index.ejs page for Character Info

module.exports = router;