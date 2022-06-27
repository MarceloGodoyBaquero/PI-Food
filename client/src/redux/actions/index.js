export const GET_DIETS = 'GET_DIETS'
export const GET_RECIPES = 'GET_RECIPES'
export const POST_RECIPE = 'POST_RECIPE'

export function getDiets(){
    return async (dispatch) => {
        const response = await fetch('http://localhost:3001/diets');
        const data = await response.json();
        dispatch({type: GET_DIETS, payload:data})
        console.log(data)
    }
}

export function getRecipes(){
    return async(dispatch) => {
        const response = await fetch('http://localhost:3001/recipes');
        const data = await response.json();
        dispatch({type: GET_RECIPES, payload:data})
        console.log(data)
    }
}

export function postRecipe(recipe){
    return async(dispatch) => {
        const response = await fetch('http://localhost:3001/recipes/addRecipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        });
        const data = await response.json();
        dispatch({type: POST_RECIPE, payload:data})
        console.log(data)
    }
}