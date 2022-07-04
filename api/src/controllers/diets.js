const axios = require('axios')
const {Diet} = require('../db')
const {MY_APY_KEY} = process.env


const getDiets = async (req, res) => {
  try {
    
    const dietsFinder = await Diet.findAll()
    
    if (!dietsFinder.length) {
      const respuesta = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${MY_APY_KEY}&addRecipeInformation=true&number=100`);
      const filtradoDietas = respuesta.data.results.flatMap(receta => receta.diets)
      let filtradoUnicos = [...new Set(filtradoDietas)]
      let mapeoObjetos = filtradoUnicos.map((diet) => {
        return {name: diet}
      })
      await Diet.bulkCreate(mapeoObjetos)
      const busqueda = await Diet.findAll()
      return res.status(201).send(busqueda)
    }
    return res.status(201).send(dietsFinder)
    
  } catch (e) {
    res.send('there was an error getting the diet types')
  }
}

module.exports = {
  getDiets,
}
