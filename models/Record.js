const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Record extends Model {}

Record.init(
    {
        artist_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        format:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        year:{
            type: DataTypes.STRING,
            allowNull: false
        },
        barcode:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false

        },

        country:{
            type: DataTypes.STRING,
            allowNull: false

        },
        thumb:{
            type: DataTypes.STRING,
            allowNull: false
        }





       





    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'record',

    }
)
module.exports= Record;