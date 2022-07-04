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
    console.log(e)
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
        res.status(404).json({Error: 'there is no recipe whit that search term'})
      }
      res.send(searchApi)
    } else {
      res.status(200).send(concatenator(searchDb, searchApi))
    }
    
  } catch (e) {
    console.log(e)
    res.send(e)
  }
}

const getRecipesById = async (req, res) => {
  const {id} = req.params
  try {
    if (id.includes('-')) {
      const respuesta = await dbSearch(id)
      res.status(200).send(respuesta)
    } else {
      const respuesta = await apiIdSearch(id)
      res.status(200).send(respuesta[0])
    }
  } catch (e) {
    console.log(e)
    res.status(404).send({Error: 'there is no recipe whit that id'})
  }
}

const postRecipe = async (req, res) => {
  const {healthScore, title, image, summary, diets, analyzedInstructions} = req.body
  console.log(req.body)
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
    // devuelvo la búsqueda
    
    res.status(201).send(Recipes_diets)
    
  } catch (e) {
    res.send(e)
  }
}


module.exports = {
  getRecipes,
  getRecipesByName,
  getRecipesById,
  postRecipe
}