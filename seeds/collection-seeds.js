const { Collection } = require ('../models');

const collectionData = [
    {
        
    }
    
]

const seedCollection = () => Collection.bulkCreate(collectionData);
module.exports = seedCollection;