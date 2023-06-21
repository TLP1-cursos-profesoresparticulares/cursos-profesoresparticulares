const { sequelize, DataTypes } = require('../database/connection');

const User = sequelize.define('users',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
  name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
},
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
          args: true,
          messge: 'El email ya existe'
      },
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false
  },
  createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
  }
}, {
  // Other model options go here
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  tableName: 'user'
});

User.sync()
module.exports = User;