const {Router} = require('express');
const {getRecipes, getRecipesByName, getRecipesById, postRecipe}= require('../controllers/recipes')

const router = Router();

router.get('/', getRecipes);
router.get('/search', getRecipesByName)
router.get('/:id', getRecipesById)
router.post('/addRecipe', postRecipe)

module.exports = router;