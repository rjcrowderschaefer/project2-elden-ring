const mongoose = require('../../config/connection');

const talismansSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true,
        },

        img: {
            type: String,
        },

        weight: {
            type: String,
        },

        description: {
            type: String,
        },

        effect: {
            type: String,
        },

        upgradedVersions: {
            type: String,
        },

        whereToFind: {
            regular: String,
            plusOne: String,
            plusTwo: String,
        },

    }
);

const Talismans = mongoose.model('talismans', talismansSchema);

module.exports = Talismans
