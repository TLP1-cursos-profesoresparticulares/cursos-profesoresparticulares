const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('educarse', 'root', '', {

    host: 'localhost',
    dialect: 'mysql',

});


module.exports = {
    sequelize,
    DataTypes,
    Model
}
