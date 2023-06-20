const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: [{ model: Product, as: 'products' }],
  });
  return res.status(200).json(categories);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const { id } = req.params;
  const foundCategory = await Category.findByPk(id, {
    include: [{ model: Product, as: 'products' }],
  });
  if (!foundCategory)
    return res.status(404).json({ message: `No Category with id ${id}` });

  return res.status(200).json(foundCategory.get({ plain: true }));
});

router.post('/', async (req, res) => {
  // create a new category
  const { category_name } = req.body;
  const category = await Category.create({ category_name });
  if (!category)
    return res.status(500).json({ message: 'Something went Wrong' });
  res.status(200).json({ message: '✅ Category Created!', category });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const { id } = req.params;
  const { category_name } = req.body;
  const category = Category.update({ category_name }, { where: { id } });
  if (!category)
    return res.status(400).json({
      message: `❌ Nothing was updated category with id(${id}) Must not exist`,
    });

  res.status(200).json({ message: '✅ category Updated!' });
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const { id } = req.params;
  const deletedCategory = await Category.destroy({
    where: { id },
  });
  if (!deletedCategory)
    return res.status(400).json({
      message: `❌ Nothing was deleted category with id(${id}) Must not exist`,
    });

  res.status(200).json({ message: '✅ category Deleted!' });
});

module.exports = router;
