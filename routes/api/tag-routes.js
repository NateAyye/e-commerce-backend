const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: [{ model: Product, through: ProductTag, as: 'products' }],
  });
  return res.status(200).json({ tags });
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const { id } = req.params;
  const foundTag = await Tag.findByPk(id, {
    include: [{ model: Product, through: ProductTag, as: 'products' }],
  });
  if (!foundTag)
    return res.status(404).json({ message: `No Tag with id (${id})` });

  return res.status(200).json(foundTag.get({ plain: true }));
});

router.post('/', async (req, res) => {
  // create a new tag
  const { tagName } = req.params;
  const tag = await Tag.create({ tag_name: tagName });
  console.log(tag);
  if (!tag) return res.status(500).json({ message: 'Something went Wrong' });
  res.status(200).json({ message: '✅ Tag Created!', tag });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
