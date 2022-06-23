const axios = require('axios')
const { Diet } = require('../db')
const { MY_APY_KEY } = process.env

getDiets = async (req, res) => {
    try {

        const respuesta = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${MY_APY_KEY}&addRecipeInformation=true&number=100`);

        const busqueda = respuesta.data.results.flatMap(receta => receta.diets)


        let resultadoFinal = [... new Set (busqueda)] // que no se repitan mas
        console.log(resultadoFinal)
        // let diets = resultadoFinal.map((diet) => { return { name: diet}})
        //
        // console.log(diets)



        // HACER CON FINDALL y bulk create para reemplzar el FOR DE ABAJO

        // const dietsFromDb = await Diets.findAll()
        // if (dietsFromDb.length === 0) {
        //     await Type.bulkCreate(diets)
        // }

        for (let i = 0; i < resultadoFinal.length; i++) {
            await Diet.findOrCreate({ // Diet.bulkCreate
                where:{
                    name: resultadoFinal[i]
                }
            })
        }


        const dietSearch = await Diet.findAll()

        return res.status(201).send(dietSearch)

    }catch (e){
        res.send('hubo un error recopilando los tipos de dietas')
    }
}

module.exports = {
    getDiets,
}