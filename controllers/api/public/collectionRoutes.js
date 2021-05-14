const router = require('express').Router();

const { Collection, Record } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products


  
  Collection.findAll(
    {
      include: {
        model: Record,
        attributes: ['artist_id', 'title', 'format', 'year', 'catno', 'country', 'thumb', 'condition']

      }
    })
    .then(CollectionData => {
      if(!CollectionData) {
        res.status(404).json({message: 'No categories found'});
        return;
      }
      res.json(CollectionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
   

 
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Collection.findOne({
    where:{
      id: req.params.id,
    },
    include:{
      model: Collection,
      attributes:  ['user_id']
    }
  })
  .then(CatData => {
    if(!CatData) {
      res.status(404).json({message: 'No categories found'});
      return;
    }
    res.json(CatData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
 
});

router.post('/', (req, res) => {
  // create a new category
  Collection.create({
    category_name: req.body.collection_id
  })
  .then(CollectionData=> res.json(CollectionData))
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Collection.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(CollectionData => {
      if (!CollectionData) {
        res.status(404).json({message:'No category found with this id'});
        return;
      }
      res.json(CatData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  
  

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(CollectionData=>{
    if(!CollectionData){
      res.status(404).json({ message: 'No Category found with that ID.' });
      return;
    }
    res.json(CollectionData);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
 
});

module.exports = router;