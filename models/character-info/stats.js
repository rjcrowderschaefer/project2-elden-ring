const mongoose = require('../../config/connection');

const statsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        softcap: {
            type: String,
        },

        img: {
            type: String
        },

        description: {
            type: String
        }
    }
);

const stats = mongoose.model('stats', statsSchema);

module.exports = stats
