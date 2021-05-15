const Collection = require('../../models/Collection');
const Record = require('../../models/Record');
const User = require('../../models/User');

Collection.hasMany(Record, {
    foreignKey: 'catno'
});

Collection.belongsTo(User, {
    foreignKey: 'id',
});

module.exports = {Collection, Record, User};
