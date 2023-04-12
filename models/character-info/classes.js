const mongoose = require('../../config/connection');

const classesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true],
            unique: true
        },

        soulLevel : {
            type: String
        },

        description : {
            type :String
        },

        img: {
            type: String,
        },

        stats : {
            type: String
        },

        weapons : {
            type: String
        },

        spells : {
            type: String,
        },

        armor : {
            type:String
        }

    }
);

const Classes = mongoose.model('classes', classesSchema);

module.exports = Classes