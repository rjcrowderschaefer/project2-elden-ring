const mongoose = require('../../config/connection');

const keepsakesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true,
        },

        type: {
            type: String,
            required: [true],
        },

        description: {
            type: String,
        },

        effect: {
            type: String,
        },

        img: {
            type: String,
        }

    }
);

const Keepsakes = mongoose.model('keepsakes', keepsakesSchema);

module.exports = Keepsakes
