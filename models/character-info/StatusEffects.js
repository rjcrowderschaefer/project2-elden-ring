const mongoose = require('../../config/connection');

const statusEffectsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        softcap: {
            type: String,
        },

        img: {
            type: String
        },

        description: {
            type: String
        }
    }
);

const statusEffects = mongoose.model('statusEffects', statusEffectsSchema);

module.exports = statusEffects
