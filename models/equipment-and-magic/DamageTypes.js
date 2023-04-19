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
<<<<<<< HEAD
=======
        },
        img: {
            type: String
>>>>>>> 5e9bc4f350fa6b7cc2a008018f858c80e840d59f
        }
    }
);

const DamageTypes = mongoose.model('damagetypes', damageTypesSchema);

module.exports = DamageTypes
