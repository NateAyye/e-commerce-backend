const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include: [{ model: Product, through: ProductTag, as: 'products' }],
  });
  return res.status(200).json(tags);
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
  const { tag_name } = req.body;
  const tag = await Tag.create({ tag_name });
  if (!tag) return res.status(500).json({ message: 'Something went Wrong' });
  res.status(200).json({ message: '✅ Tag Created!', tag });
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const { id } = req.params;
  const { tag_name } = req.body;
  const tag = await Tag.update({ tag_name }, { where: { id } });
  if (!tag)
    return res.status(400).json({
      message: `❌ Nothing was updated tag with id(${id}) Must not exist`,
    });

  res.status(200).json({ message: '✅ tag Updated!' });
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const { id } = req.params;
  const deletedTag = await Tag.destroy({
    where: { id },
  });
  if (!deletedTag)
    return res.status(400).json({
      message: `❌ Nothing was deleted tag with id(${id}) Must not exist`,
    });

  res.status(200).json({ message: '✅ tag Deleted!' });
});

module.exports = router;
