const mongoose = require('../../config/connection');

const worldInformationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        img: {
            type: String
        },
    }
);

const WorldInformation = mongoose.model('worldInformation', worldInformationSchema);

module.exports = WorldInformation