const router = require('express').Router();
const { Collection, Record, User } = require('../../models');

//ADD to collection
router.post('/collection/add/', async (req, res) => {
    try {
        const dbRecordData = await Record.update({collection_id: req.collection_id}, {
            where: {
                catno: req.catno
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
 
//GET all members of a collection
router.get('/collection/:id', async (req, res) => {
    try {
        const dbCollectionData = await Record.findAll({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Record,
                    attributes: [
                        'artist_id', 
                        'title',
                        'format',
                        'year',
                        'catno',
                        'country',
                        'thumb',
                        'condition'

                    ],
                },
            ],
        });
        const records = dbCollectionData.map((record) => 
            record.get({ plain: true})
        );
        res.render('user-profile', {
            records,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;