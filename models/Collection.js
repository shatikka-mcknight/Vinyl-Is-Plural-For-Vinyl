const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Collection extends Model {}

Collection.init(
    {
        
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'user',
                key: 'id'
            }
        },
        
       collection_id:{
           type: DataTypes.INTEGER,
           allowNull: false,
           autoIncrement: true,
           references:{
               model: 'record',
               key: 'catno'
               
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