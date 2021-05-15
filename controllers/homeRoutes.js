const router = require('express').Router();
const { Collection, Record } = require('../model');

// GET all galleries for homepage
router.get('/', async (req, res) => {
   res.render('welcome');

});
    
// router.get('/', async (req, res) => {
//    res.render('user-profile');

// });
    
// router.get('/', async (req, res) => {
//    res.render('account-creation');

// });
    
// router.get('/', async (req, res) => {
//    res.render('album-listing');

//     });

// router.get('/', async (req, res) => {
//       res.render('selling');
   
// });

    module.exports = router;