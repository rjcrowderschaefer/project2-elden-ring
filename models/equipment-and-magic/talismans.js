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

<<<<<<< HEAD
const Talismans = mongoose.model('Talismans', talismansSchema);
=======
const Talismans = mongoose.model('talismans', talismansSchema);
>>>>>>> 5e9bc4f350fa6b7cc2a008018f858c80e840d59f

module.exports = Talismans
