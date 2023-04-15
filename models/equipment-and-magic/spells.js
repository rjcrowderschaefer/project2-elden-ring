const mongoose = require('../../config/connection');

const spellsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        img: {
            type: String,
        },
        
        description: {
            type: String,
        },

        officalKobyRating: {
            type: String
        },

        effect: {
            type: String
        },

        type: {
            type: String
        },

       class: {
            type: String
        },

        requiredMemory: {
            type: String
        },

        requirements: {
            str: String,
            dex: String,
            int: String,
            fai: String,
            arc: String,
        },

    }
);

const Spells = mongoose.model('spells', spellsSchema);

module.exports = Spells