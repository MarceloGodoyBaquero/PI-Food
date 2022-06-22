const {Recipe, Diet} = require("../db");
const {Op} = require("sequelize");
const axios = require("axios");
const { MY_APY_KEY } = process.env

dbResultMaper = async (respuesta) => {
    return await respuesta.map(e => {return {
        id: e.id,
        healthScore: e.healthScore,
        title: e.title,
        image: e.image,
        summary: e.summary,
        analyzedInstructions: e.analyzedInstructions,
        diets: e.diets.map(d => {return {
            name: d.name
        }})
    }})
}

apiResultMaper = async (respuesta) => {
   return await respuesta.map(e => {return {
        id: e.id,
        healthScore: e.healthScore,
        title: e.title,
        image: e.image,
        summary: e.summary,
        analyzedInstructions: e.analyzedInstructions,
        diets: e.diets.map(d => {return {
            name: d
        }})
    }})

}

dbSearch = async (param) => {
    if(param.includes('-', 23)) {
        const result = await Recipe.findOne({where: {id: param}, include: Diet})
        return dbResultMaper([result])
    }
    const resultado = await Recipe.findAll({where: {title: {[Op.like]: `%${param}%`}}, include: Diet})
    return dbResultMaper(resultado)
}

apiWordSearch = async (param) => {
        const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${MY_APY_KEY}&addRecipeInformation=true&query=${param}`)
        return apiResultMaper(result.data.results)
}

apiIdSearch = async (id) => {
        const result = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${MY_APY_KEY}`)
        return apiResultMaper([result.data])
}

concatenator = (arr1, arr2) => {
   return  arr1.concat(arr2)
}

module.exports = {
    dbResultMaper,
    dbSearch,
    apiWordSearch,
    concatenator,
    apiIdSearch,
}