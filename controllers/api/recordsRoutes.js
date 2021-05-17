const router = require('express').Router();
const { Collection, Record, User } = require('../../models');
//add record to DB
router.post('/record/add', async (req, res) => {
    try {
        const dbRecordData = await Record.create({
            artist_id: req.body.artist_id,
            title: req.body.title,
            format: req.body.format,
            year: req.body.year,
            catno: req.body.catno,
            country: req.body.country,
            thumb: req.body.thumb,
            condition: req.body.condition,
            price: req.body.price,
        });
        res.status(200).json(dbRecordData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//delete record from DB
router.delete('/record/delete/:id', async (req, res) => {
    try {
        const dbRecordData = await Record.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
        });
        if (!dbRecordData) {
        res.status(404).json({ message: 'No record found with this id!' });
        return;
        }
        res.status(200).json({ message: 'Record successfully deleted!'});
    } catch (err) {
        res.status(500).json(err);
    }
    });
//search for record by ID
router.get('/record/search/:id', async (req,res) => {
    try {
        const dbRecordData = await Record.findbyPK(req.params.id);
        const record = dbRecordData.get( {plain: true});
        res.status(200).json(record);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//search for records by Artist
router.get('/record/search/:artist_id', async (req,res) => {
    try {
        const dbRecordData = await Record.findAll({
            where: {
                artist_id: req.params.artist_id
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
        }),
        const records = dbRecordData.map((record) =>
        record.get({ plain: true })
        );
        res.status(200).json(records);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//search for records by TITLE
router.get('/record/search/:title', async (req,res) => {
    try {
        const dbRecordData = await Record.findAll({
            where: {
                title: req.params.title
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
        }),
        const records = dbRecordData.map((record) =>
        record.get({ plain: true })
        );
        res.status(200).json(records);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//search for records by CONDITION
router.get('/record/search/:condition', async (req,res) => {
    try {
        const dbRecordData = await Record.findAll({
            where: {
                condition: req.params.condition
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
        }),
        const records = dbRecordData.map((record) =>
        record.get({ plain: true })
        );
        res.status(200).json(records);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;