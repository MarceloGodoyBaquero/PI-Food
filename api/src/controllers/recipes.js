const axios = require('axios').default
const {Recipe, Diet} = require('../db')
const {Op} = require("sequelize");
const { MY_APY_KEY } = process.env

getRecipesByName = async (req, res, next) => {
    const {name} = req.query

    try {
        const respuestaSpoonacular = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${MY_APY_KEY}&query=${name}&number=5220`);
        const respuestaPostgres = await Recipe.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}`
                }
            }
        })
        if(!respuestaPostgres.length){
            res.send(respuestaSpoonacular.data.results)

        }
        if(respuestaPostgres){
            res.send(respuestaPostgres)
        }

        res.send('No hay recetas con esa palabra')

    } catch (e) {
        next(e)
    }
}

getRecipesById = async (req, res) => {
    const {id} = req.params

    try {

        const respuestaPostgres = await Recipe.findByPk(id)

        const respuestaSpoonacular = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${MY_APY_KEY}`)

        if(respuestaPostgres){
            await res.send(respuestaPostgres)

        }

        if(respuestaSpoonacular){
            await res.send(respuestaSpoonacular.data)
        }

    } catch (e) {
        res.send('Hubo un error')
        console.log(e)
    }
}

postRecipe = async (req, res) => {
    const {healthScore, title, image, summary, diets, steps} = req.body
    try {
        const nRecipe = await Recipe.create({
            healthScore,
            title,
            image,
            summary,
            diets,
            steps
        })

        for(let i = 0; i < diets.length; i++) {
            await nRecipe.addDiet(diets[i], {through: 'Recipe_diet'})
        }

        const Recipes_diets = await Recipe.findOne({
            where: {
                title: req.body.title
            },
            include: Diet
        })

        res.json(Recipes_diets)

    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

module.exports = {
    getRecipesByName,
    getRecipesById,
    postRecipe
}
