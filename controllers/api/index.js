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

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recordsRoutes = require('./recordsRoutes');
const collectionRoutes = require('./collectionRoutes');

router.use('/users', userRoutes);
router.use('/records', recordsRoutes);
router.use('/collectionRoutes', collectionRoutes);

module.exports = router;