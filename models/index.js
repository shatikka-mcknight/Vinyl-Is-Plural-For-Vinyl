const User = require('./User');
const Record = require('./Record');
const Collection = require('./Collection');

User.hasMany(Collection, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Collection.belongsTo(User, {
    foreignKey: 'id'
});

module.exports = {
    User,
    Record,
    Collection

};