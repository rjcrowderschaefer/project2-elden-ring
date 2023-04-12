const express = require('express');
const router = express.Router();

const CharacterInformation = require('../models/character-info/CharacterInfo');
const characterInfo = require('../seed-data/character-info-seed/CharacterInfo-seed');

router.get('', async (req, res, next) => {
    try {
        await CharacterInformation.deleteMany({});
        await CharacterInformation.insertMany(characterInfo);
        res.redirect('/character_information');
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;