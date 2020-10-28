const Sequelize = require('sequelize');

module.exports =  new Sequelize('new_database','root','1234', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
