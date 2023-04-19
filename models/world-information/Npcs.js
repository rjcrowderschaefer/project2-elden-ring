const mongoose = require('../../config/connection');

const npcsSchema = new mongoose.Schema(
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

        location: {
            type: String
        },

        role: {
            type: String
        },
    }
);

const NPCs = mongoose.model('npcs', npcsSchema);

module.exports = NPCs