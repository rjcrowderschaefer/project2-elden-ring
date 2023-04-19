const mongoose = require('../../config/connection');

const damageTypesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        effectiveAgainst: {
            type: String,
        },

        ineffectiveAgainst: {
            type: String
        },

        notes: {
            type: String
        }
    }
);

const DamageTypes = mongoose.model('damagetypes', damageTypesSchema);

module.exports = DamageTypes
