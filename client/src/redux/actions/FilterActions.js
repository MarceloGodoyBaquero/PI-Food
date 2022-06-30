export const FILTER_RECIPES = 'FILTER_RECIPES';

export const filterRecipes = (filter) => (dispatch, getState) => {
  console.log(filter);
  if(filter === "Default") {
    let recipes = getState().Recipes.slice(); // devuelvo una copia de Recipes, para no modificar el state
    return dispatch({
      type: FILTER_RECIPES,
      payload: recipes
    })
  }
  else {
    const recipeFilter = getState().Recipes.slice(); // devuelvo una copia de Recipes, para no modificar el state
    const result = recipeFilter.filter(recipe => recipe.diets.some(diet => diet.name === filter));
    return dispatch({type: FILTER_RECIPES, payload: result})
  }
}