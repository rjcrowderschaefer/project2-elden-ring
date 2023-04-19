const mongoose = require('../../config/connection');

const legacyDungeonsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        description: {
            type: String
        },

        img1: {
            type: String
        },

        img2: {
            type: String
        },

        bosses: {
            type: String
        },

        NPCs: {
            type: String
        },
        
    }
);

const LegacyDungeons = mongoose.model('legacyDungeons', legacyDungeonsSchema);

module.exports = LegacyDungeons