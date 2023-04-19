const mongoose = require('../../config/connection');

const spellsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            // unique: true
        },

        img: {
            type: String,
        },
        
        description: {
            type: String,
        },

        officialKobyRating: {
            type: String,
        },

        type: {
            type: String,
        },

        class: {
            type: String,
        },

        damageType: {
            type: String,
        },
        
        requiredMemory: {
            type: String,
        },

        whereToFind: {
            type: String,
        },

        fpCost: {
            type: String,
        },

        requirements: {
            int: String,
            fai: String,
            arc: String,
        },

    }
);

const Spells = mongoose.model('spells', spellsSchema);

module.exports = Spells