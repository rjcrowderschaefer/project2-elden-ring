const mongoose = require('../../config/connection');

const characterInformationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        img: {
            type: String,
        }

    }
);

const CharacterInformation = mongoose.model('characterinformation', characterInformationSchema);

module.exports = CharacterInformation

