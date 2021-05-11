const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Collection extends Model {}

Collection.init(
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
        },
        condition:{
            type: DataTypes.INTEGER

        },
    
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'user',
                key: 'id'
            }
        },
      
        

        












    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'collection',
    }
    
)
module.exports = Collection;