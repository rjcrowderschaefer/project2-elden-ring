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

        stats: {
            vigor: String,
            mind: String,
            endurance: String,
            strength: String,
            dex: String,
            int: String,
            fai: String,
            arc: String,
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

const classes = mongoose.model('classes', classesSchema);

module.exports = Classes