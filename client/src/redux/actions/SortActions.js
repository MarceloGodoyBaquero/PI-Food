export const ORDER_RECIPES = 'ORDER_RECIPES';

export const orderRecipes = (order) => (dispatch, getState) => {
  
  let recipeOrder = getState().RecipesFilter.slice();
  
  if(order === "Default") {
    let recipes = getState().Recipes.slice();
    dispatch({
      type: ORDER_RECIPES,
      payload: recipes
    })
  }
  
  if (order === "ascName") {
    const result = recipeOrder.slice().sort((a, b) => a.title.localeCompare(b.title))
    return dispatch({type: ORDER_RECIPES, payload: result});
  }
  
  if (order === "descName") {
    const result = recipeOrder.slice().sort((a, b) => b.title.localeCompare(a.title))
    return dispatch({type: ORDER_RECIPES, payload: result});
  }
  
  if (order === "ascHealthScore") {
    const result = recipeOrder.slice().sort((a, b) => a.healthScore - b.healthScore)
    return dispatch({type: ORDER_RECIPES, payload: result});
  }
  
  if (order === "descHealthScore") {
    const result = recipeOrder.slice().sort((a, b) => b.healthScore - a.healthScore)
    return dispatch({type: ORDER_RECIPES, payload: result});
  }
}