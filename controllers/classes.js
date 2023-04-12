const express = require('express');
const router = express.Router();

const Classes = require('../models/character-info/classes');
const classesInfo = require('../seed-data/character-info-seed/Classes-seed');

router.get('', async (req, res, next) => {
    try {
        await Classes.deleteMany({});
        await Classes.insertMany(classesInfo);
        res.render('classes/index.ejs', {classesInfo});
    } catch(err) {
        console.log(err);
        next();
    }
})


module.exports = router;