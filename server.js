const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const methodOveride = require('method-override');
const characterInformationController = require('./controllers/characterInformation');
const equipmentMagicController = require('./controllers/equipmentMagic');
// const bossesController = require('./controllers/bosses');
// const creaturesEnemiesController = require('./controllers/creaturesEnemies');
// const legacyDungeonsController = require('./controllers/legacyDungeons');
// const npcsController = require('./controllers/npcs');
// const statusEffectsController = require('./controllers/statusEffects');
// const spellsController = require('./controllers/spells');
// const weaponsController = require('./controllers/weapons');
// const worldInformationController = require('./controllers/worldInformation');



require('dotenv').config();
const connectionString = process.env.MONGO_DB_URI;

console.log(connectionString);





app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOveride('_method'));

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.use('/character_information', characterInformationController);

app.use('/equipment_magic', equipmentMagicController);
// app.use('/equipment_magic/weapons', weaponsController);
// app.use('/equipment_magic/spells', spellsController)

// app.use('/world_information', worldInformationController);
// app.use('/world_information/bosses', bossesController);
// app.use('/world_information/npcs', npcsController);
// app.use('/world_information/legacy_dungeons', legacyDungeonsController);
// app.use('/world_information/creatures_enemies', creaturesEnemiesController)


app.listen(PORT, () => {
    console.log(`💻 📡 🔭 Server is listening on PORT ${PORT} 👂 👋 💪`)
});