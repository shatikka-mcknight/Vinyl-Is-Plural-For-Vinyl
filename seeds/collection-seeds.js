const { Collection } = require ('../models');
const sequelize= require ('../config/connection');

const collectionData = [
    {
        id: 1,
        collection_id: 1
      
    },
    // {
    //     collection_id: 1
    // }
    
]

const seedCollection = async () => {
    await sequelize.sync({force: true})
    Collection.bulkCreate(collectionData);
}
module.exports = seedCollection;
seedCollection();