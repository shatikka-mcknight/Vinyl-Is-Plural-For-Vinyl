const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Record extends Model {}

Record.init(
    {
        artist_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
          
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        format:{
            type: DataTypes.STRING,
            allowNull: false
        },
        year:{
            type: DataTypes.STRING,
            allowNull: false
        },
        catno:{
            type: DataTypes.STRING,
            allowNull: false

        },

        country:{
            type: DataTypes.STRING,
            allowNull: false

        },
        thumb:{
            type: DataTypes.STRING,
            allowNull: false
        },
        condition: {
            type: DataTypes.INTEGER
        },
        collection_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'collection',
            key: 'collection_id'


        }
    },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'record',

    }
)
module.exports= Record;