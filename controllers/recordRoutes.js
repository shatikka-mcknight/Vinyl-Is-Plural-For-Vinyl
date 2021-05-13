const router = require('express').Router();
const { Collection, Record, User } = require('../models');


router.post('/record/add', async (req, res) => {
    try {
        const dbRecordData = await Record.create({
            artist_id: req.body.artist_id,
            title: req.body.title,
            format: req.body.format,
            year: req.body.year,
            barcode: req.body.barcode,
            country: req.body.country,
            thumb: req.body.thumb,
            condition: req.body.condition,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

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
        res.status(200).json(dbRecordData);
    } catch (err) {
        res.status(500).json(err);
    }
    });

