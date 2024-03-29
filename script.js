const sequelize = require('./sequelizeConfig');
const models = require('./models'); // Import your Sequelize models

sequelize.sync({ force: false }) // Set force to true if you want to drop tables on every sync
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });