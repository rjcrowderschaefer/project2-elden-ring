const mongoose = require('../../config/connection');

const equipmentAndMagicSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        urlName: {
            type: String,
            required: [true],
        },

        img: {
            type: String,
        }
    }
);

const EquipmentAndMagic = mongoose.model('equipmenandtmagic', equipmentAndMagicSchema);

module.exports = EquipmentAndMagic
