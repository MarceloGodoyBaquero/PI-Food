const {Recipe, Diet} = require('../db')
const {apiWordSearch, dbSearch, concatenator, apiIdSearch} = require("../services/services");

const getRecipes = async (req, res) => {
  try {
    const searchApi = await apiWordSearch()
    const searchDb = await dbSearch()
    
    if (!searchDb.length) {
      if (!searchApi.length) {
        res.status(404).json({Error: 'there was an error getting the recipes'})
      }
      res.send(searchApi)
    } else {
      res.status(200).send(concatenator(searchDb, searchApi))
    }
    
  } catch (e) {

    res.send(e)
  }
}

const getRecipesByName = async (req, res) => {
  try {
    const {title} = req.query
    
    const searchApi = await apiWordSearch(title)
    const searchDb = await dbSearch(title)
    
    if (!searchDb.length) {
      if (!searchApi.length) {
        return res.status(404).json({Error: 'there is no recipe with that search term'})
      }
      return res.send(searchApi)
    } else {
      return res.status(200).send(concatenator(searchDb, searchApi))
    }
    
  } catch (e) {
    res.send({Error: 'there was an error getting the recipes'})
  }
}

const getRecipesById = async (req, res) => {
  const {id} = req.params
  try {
    if (id.includes('-')) {
      const respuesta = await dbSearch(id)
      return res.status(200).send(respuesta)
    } else {
      const respuesta = await apiIdSearch(id)
      return res.status(200).send(respuesta[0])
    }
  } catch (e) {
    return res.status(404).send({Error: 'there is no recipe whit that id'})
  }
}

const postRecipe = async (req, res) => {
  const {healthScore, title, image, summary, diets, analyzedInstructions} = req.body
  try {
    //inserto la receta en la db
    const newRecipe = await Recipe.create({
      healthScore,
      title,
      image,
      summary,
      diets,
      analyzedInstructions
    })
    await newRecipe.addDiets(diets, {through: 'Recipe_diet'}) //agrega las dietas a la receta es un mixin
    const Recipes_diets = await Recipe.findOne({
      where: {
        title: req.body.title
      }, include: Diet
    })
    // devuelvo la b??squeda
    
    res.status(201).send(Recipes_diets)
    
  } catch (e) {
    res.send({Error: 'there was an error posting the recipe'})
  }
}


module.exports = {
  getRecipes,
  getRecipesByName,
  getRecipesById,
  postRecipe
}