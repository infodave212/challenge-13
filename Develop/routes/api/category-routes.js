const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//http://localhost:3001/api/categories/
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // Add Book as a second model to JOIN with
      include: [{ model: Product}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/categories/1
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  router.get('/', async (req, res) => {
    try {
      const categoryData = await Product.findAll({
        // Add Book as a second model to JOIN with
        include: [{ model: Product }],
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});
//http://localhost:3001/api/categories
router.post('/', (req, res) => {
  // create a new category
});
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // Add Book as a second model to JOIN with
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//http://localhost:3001/api/categories/2
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // Add Book as a second model to JOIN with
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//http://localhost:3001/api/categories/3
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // Add Book as a second model to JOIN with
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
