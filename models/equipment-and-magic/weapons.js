const mongoose = require('../../config/connection');

const weaponsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        type: {
            type: String,
        },

        img: {
            type: String,
        },

        description: {
            type: String,
        },

        weigth: {
            type: String,
        },

        location: {
            type: String,
        },

        ashOfWar: {
            type: String,
        },

        attack: {
            phy: String,
            mag: String,
            fire: String,
            light: String,
            holy: String,
            crit: String,
        },

        gaurd: {
            phy: String,
            mag: String,
            fire: String,
            light: String,
            holy: String,
            boost: String,
        },
        requirements: {
            str: String,
            dexr: String,
            int: String,
            fai: String,
            arc: String,
        },

        scaling: {
            str: String,
            dexr: String,
            int: String,
            fai: String,
            arc: String,
        },

        

    }
);

const Weapons = mongoose.model('weapons', weaponsSchema);

module.exports = Weapons