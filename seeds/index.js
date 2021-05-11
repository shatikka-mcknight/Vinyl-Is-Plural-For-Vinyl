const seedRecord = require('./record-seeds');
const seedUsers = require('./user-seeds');
const seedCollection = require('./collection-seeds');

const sequelize = require('../config/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
  await seedRecord();
    console.log('\n----- POSTS SEEDED -----\n');

  await seedCollection();
    console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();