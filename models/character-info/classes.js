const mongoose = require('../../config/connection');

const classesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        soulLevel: {
            type: String,
        },

        description: {
            type: String,
        },

        img: {
            type: String,
        },

        stats: {
            vigor: String,
            mind: String,
            endurance: String,
            strength: String,
            dex: String,
            int: String,
            fai: String,
            arc: String,
        },

        weapons: {
            weapon1: String,
            weapon2: String,
            Weapon3: String,
        },

        spells: {
            spell1: String,
            spell2: String,
        },

        armor: {
            head: String,
            chest: String,
            hands: String,
            legs: String,
        }

    }
);

const Classes = mongoose.model('classes', classesSchema);

module.exports = Classes