import {GET_DIETS, GET_RECIPES, POST_RECIPE, GET_RECIPE_DETAIL, SEARCH_RECIPES} from "../actions";

const initialState = {
    Diets: [],
    Recipes: [],
    RecipeCreation: [],
    RecipeInfo: [],
    RecipesSearch: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_DIETS:
            return {
                ...state,
                Diets: action.payload
            }
        case GET_RECIPES:
            return {
                ...state,
                Recipes: action.payload
            }
        case POST_RECIPE:
            return {
                ...state,
                RecipeCreation: action.payload
            }
        case SEARCH_RECIPES:
            return{
                ...state,
                Recipes: action.payload
            }
        case GET_RECIPE_DETAIL:
            return {
                ...state,
                RecipeInfo: action.payload
            }
        default:
            return state
    }
}