const express = require('express');
const router = express.Router();

const { CharacterInformation } = require('../models');

router.get('', (req, res) => {
    res.render('characterInformation/index.ejs', {CharacterInformation})
})

module.exports = router;

