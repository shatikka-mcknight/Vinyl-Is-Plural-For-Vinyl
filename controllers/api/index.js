const Collection = require('./Collection');
const Record = require('./Record.js');
const User = require('./User.js');

Collection.hasMany(Record, {
    foreignKey: 'barcode'
});

Collection.belongsto(User, {
    foreignKey: 'id',
});

module.exports = {Collection, Record, User};
