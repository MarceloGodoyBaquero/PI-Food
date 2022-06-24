import {GET_DIETS, GET_RECIPES} from "../actions";

const initialState = {
    Diets:[],
    Recipes:[],
    RecipeCreation:[],
    RecipeInfo: [],
    RecipesSearch:[]
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case GET_DIETS:
            return{
                ...state,
                Diets: action.payload
            }
        case GET_RECIPES:
            return{
                ...state,
                Recipes: action.payload
            }
        default:
            return state
    }
}