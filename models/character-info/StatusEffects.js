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

<<<<<<< HEAD
const StatusEffects = mongoose.model('statusEffects', statusEffectsSchema);
=======
const StatusEffects = mongoose.model('statuseffects', statusEffectsSchema);
>>>>>>> 2be2a81f371522266c0da710b8a991d8c9e1ccff

module.exports = StatusEffects
