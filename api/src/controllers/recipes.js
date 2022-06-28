const {Recipe, Diet} = require('../db')
const {apiWordSearch, dbSearch, concatenator, apiIdSearch} = require("../services/services");

getRecipes = async (req,res) => {
    try {
        const searchApi = await apiWordSearch()
        const searchDb = await dbSearch()

        if(!searchDb.length){
            if(!searchApi.length){
                res.status(404).json({Error: 'no se encontró nada con ese palabra'})
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

getRecipesByName = async (req, res) => {
    try {
        const {name} = req.query

        const searchApi = await apiWordSearch(name)
        const searchDb = await dbSearch(name)

        if(!searchDb.length){
            if(!searchApi.length){
                res.status(404).json({Error: 'no se encontró nada con ese palabra'})
            }
            res.send(searchApi)
        } else {
            res.status(200).send(concatenator(searchDb, searchApi))
        }

    }   catch (e) {
        console.log(e)
        res.send(e)
    }
}

getRecipesById = async (req, res) => {
    const {id} = req.params
    try {
        if(id.includes('-')){
            const respuesta = await dbSearch(id)
            res.status(200).send(respuesta)
        } else {
            const respuesta = await apiIdSearch(id)
            res.status(200).send(respuesta[0])
        }
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

postRecipe = async (req, res) => {
    const {healthScore, title, image, summary, diets, analyzedInstructions} = req.body
    console.log(req.body)
    try {
        //inserto la receta en la db
        const nRecipe = await Recipe.create({
            healthScore,
            title,
            image,
            summary,
            diets,
            analyzedInstructions
        })
        //recorro el array de dietas y por cada valor id asocio la Recipe y Diet, en Recipe_diet
        for(let i = 0; i < diets.length; i++) {
            await nRecipe.addDiet(diets[i], {through: 'Recipe_diet'}) // mixings de las relaciones
        }
        // busco la receta y le incluyo la tabla Diet para poder ver las asociaciones correctamente.
        const Recipes_diets = await Recipe.findOne({
            where: {
                title: req.body.title
            },
            include: Diet
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