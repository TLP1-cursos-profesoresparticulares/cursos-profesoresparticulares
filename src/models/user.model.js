const { sequelize, DataTypes } = require('../database/connection');

const User = sequelize.define('users',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: { type: DataTypes.STRING},
  surname: { type: DataTypes.STRING},
  email: { type: DataTypes.STRING},
  password: { type: DataTypes.STRING},
});


module.exports = User;