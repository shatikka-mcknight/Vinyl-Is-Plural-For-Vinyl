const User = require('./User');
const Record = require('./Record');
const Collection = require('./Collection');

User.hasMany(Collection, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Collection.belongsTo(User,{
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Record,
    Collection

};