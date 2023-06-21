const { sequelize, DataTypes } = require('../database/connection');
const User = require('./user.model');

const Typeuser = sequelize.define('typeUser',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING
    },
});

Typeuser.hasMany(User, {
    foreignKey: 'typeUserId',
    sourceKey: 'id'
})

User.belongsTo(Typeuser, {
    foreignKey: 'typeUserId',
    targetKey: 'id'
})

Typeuser.sync();

module.exports = Typeuser;