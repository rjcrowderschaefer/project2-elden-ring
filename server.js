const express = require('express');
const app = exporess();
const PORT = 4000;
const methodOveride = require('method-override');
const bossesController = require('./controllers/bosses');
const characterInformationController = require('./controllers/characterInformation');
const classesController = require('./controllers/classes');
const creaturesEnemiesController = require('./controllers/creaturesEnemies');
const damageTypesController = require('./controllers/damageTypes');
const equipmentMagicController = require('./controllers/equipmentMagic');
const keepsakesController = require('./controllers/keepsakes');
const legacyDungeonsController = require('./controllers/legacyDungeons');
const npcsController = require('./controllers/npcs');
const statsController = require('./controllers/stats');
const statusEffectsController = require('./controllers/statusEffects');
const talismansController = require('./controllers/talismans');
const upgradesController = require('./controllers/upgrades');
const weaponsController = require('./controllers/weapons');
const worldInformationController = require('./controllers/worldInformation');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOveride('_method'));

app.get('/', (req, res) => {
    res.render('home.ejs')
})



app.listen(PORT, () => {
    console.log(`💻 📡 🔭 Server is listening on PORT ${PORT} 👂 👋 💪`)
});