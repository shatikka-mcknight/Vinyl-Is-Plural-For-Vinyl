const router = require('express').Router();
const { Collection, Record } = require('../model');

// GET all galleries for homepage
router.get('/', async (req, res) => {
   res.render('welcome');

    });

    module.exports = router;