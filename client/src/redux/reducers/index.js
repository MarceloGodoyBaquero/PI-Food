import {GET_DIETS, GET_RECIPES, POST_RECIPE, GET_RECIPE_DETAIL, SEARCH_RECIPES, FILL_BACKUP} from "../actions";
import {ORDER_RECIPES} from "../actions/SortActions";
import {FILTER_RECIPES} from "../actions/FilterActions";

const initialState = {
    Diets: [],
    Recipes: [],
    RecipeCreation: [],
    RecipeInfo: [],
    RecipesFilter: [],
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
                Recipes: action.payload,
                RecipesFilter: action.payload
            }
        case POST_RECIPE:
            return {
                ...state,
                RecipeCreation: action.payload
            }
        case SEARCH_RECIPES:
            return{
                ...state,
                RecipesFilter: action.payload
            }
        case FILL_BACKUP:
            return{
                ...state,
                RecipesFilter: state.Recipes
            }
        case GET_RECIPE_DETAIL:
            return {
                ...state,
                RecipeInfo: action.payload
            }
            case ORDER_RECIPES:
            return {
                ...state,
                RecipesFilter: action.payload
            }
        case FILTER_RECIPES:
            return {
                ...state,
                RecipesFilter: action.payload
            }
        default:
            return state
    }
}