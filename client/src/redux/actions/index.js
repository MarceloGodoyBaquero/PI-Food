export const GET_DIETS = 'GET_DIETS'
export const GET_RECIPES = 'GET_RECIPES'

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