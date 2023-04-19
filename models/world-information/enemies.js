const mongoose = require('../../config/connection');

const enemiesSchema = new mongoose.Schema(
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
        },

        damageType: {
            type: String
        },

        whereToFind: {
            type: String
        },

        weakTo: {
            type: String
        },

        strongVs: {
            type: String
        },
    }
);

const Enemies = mongoose.model('enemies', enemiesSchema);

module.exports = Enemies
