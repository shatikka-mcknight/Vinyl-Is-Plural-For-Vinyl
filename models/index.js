const User = require('./User');
const Record = require('./Record');
const Collection = require('./Collection');

User.hasOne(Collection, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

// User.hasOne(Collection);
Collection.belongsTo(User, {
    foreignKey: 'id'
});


module.exports = {
    User,
    Record,
    Collection

};