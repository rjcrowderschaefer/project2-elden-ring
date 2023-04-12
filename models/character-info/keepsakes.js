const mongoose = require('../../config/connection');

const keepsakesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        type: {
            type: String,
            required: [true],
            unique: true
        },

        description: {
            type: String
        },

        effect: {
            type: String
        },

        img: {
            type: String
        }

    }
);

const keepsakes = mongoose.model('keepsakes', keepsakesSchema);

module.exports = keepsakes
