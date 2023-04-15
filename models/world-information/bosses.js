const mongoose = require('../../config/connection');

const bossesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        img1: {
            type: String
        },

        img2: {
            type: String
        },

        img3: {
            type: String
        },

        description: {
            type: String
        },

        officalKobyRating: {
            type: String
        },

        strongVS: {
            type: String
        },

        weakTo: {
            type: String
        },

        health: {
            type: String
        },

        damageType: {
            type: String
        },

        location: {
            type: String
        },

        drops: {
            type: String
        },

        quote: {
            type: String
        }
    }
);

const Bosses = mongoose.model('bosses', bossesSchema);

module.exports = Bosses
