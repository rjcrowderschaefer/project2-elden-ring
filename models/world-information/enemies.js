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
<<<<<<< HEAD

        damageType: {
            type: String
        },

=======
        
>>>>>>> 5e9bc4f350fa6b7cc2a008018f858c80e840d59f
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
