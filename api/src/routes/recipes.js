const {Router} = require('express');
const {getRecipesByName, getRecipesById, postRecipe}= require('../controllers/recipes')

const router = Router();

router.get('/:id', getRecipesById)
router.get('/', getRecipesByName)
router.post('/', postRecipe)

module.exports = router;