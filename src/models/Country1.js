const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Country1 = sequelize.define('country1', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Country1;