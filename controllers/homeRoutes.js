const router = require('express').Router();
// const { Collection, User } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     // Get all collections and JOIN with user data
//     // res.render('welcome')
//     const projectData = await User.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     projectData.map((collection) => collection.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('welcome', { 
//       collection, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/collection/:id', async (req, res) => {
//   try {
//     const collectionData = await Collection.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const collections = collectionData.get({ plain: true });

//     res.render('collection', {
//       ...collections,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/login', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Collection }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/search');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;




const { Collection, Record } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
   res.render('welcome');


    
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
   
});

    module.exports = router;
