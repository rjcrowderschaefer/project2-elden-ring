const mongoose = require('../../config/connection');

const statusEffectsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        img: {
            type: String
        },

        description: {
            type: String
        }
    }
);

const StatusEffects = mongoose.model('statusEffects', statusEffectsSchema);

module.exports = StatusEffects
