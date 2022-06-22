const axios = require('axios')
const { Diet } = require('../db')
const { MY_APY_KEY } = process.env

getDiets = async (req, res) => {
    try {
        //realiza la busqueda de dietas en la api de spoonacular
        const respuesta = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${MY_APY_KEY}&addRecipeInformation=true&number=100`);
        //mapea todos los resultados en un array
        const busqueda = respuesta.data.results.flatMap(r => r.diets)
        // los filtra para que no se repitan
        let resultadoFinal = [... new Set (busqueda)]

        //itera el Set y por cada elemento crear una entrada en la db
        for (let i = 0; i < resultadoFinal.length; i++) {
            await Diet.findOrCreate({
                where:{
                    name: resultadoFinal[i]
                }
            })
        }
        //busca las dietas insertadas en la db
        const dietSearch = await Diet.findAll()
        //responder con el resultado de la busqueda
        res.status(201).send(dietSearch)

    }catch (e){
        res.send('hubo un error recopilando los tipos de dietas').json(e)
    }
}

module.exports = {
    getDiets,
}