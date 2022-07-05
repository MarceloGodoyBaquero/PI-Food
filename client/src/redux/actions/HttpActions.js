export const GET_DIETS = 'GET_DIETS'
export const GET_RECIPES = 'GET_RECIPES'
export const POST_RECIPE = 'POST_RECIPE'
export const SEARCH_RECIPES = 'SEARCH_RECIPES'
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL'
export const FILL_BACKUP = 'FILL_BACKUP'

export function getDiets() {
  return async (dispatch) => {
    await fetch('http://localhost:3001/diets')
      .then(response => response.json())
      .then(data => dispatch({type: GET_DIETS, payload: data}))
  }
}

export function getRecipes() {
  return async (dispatch) => {
    await fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then(data => dispatch({type: GET_RECIPES, payload: data}))
  }
}

export function postRecipe(recipe) {
  return async (dispatch) => {
    await fetch('http://localhost:3001/recipes/addRecipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
      .then(response => response.json())
      .then(data => dispatch({type: POST_RECIPE, payload: data}))
  }
}

export function getRecipeDetail(id) {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/recipes/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.code === 402) {
          return alert('There is no more points to use the api')
        }
        if (data.Error) {
          alert('that id dont exist, but you can try this recipe')
          fetch('http://localhost:3001/recipes/716426')
            .then(response => response.json())
            .then(data => {
              return dispatch({type: GET_RECIPE_DETAIL, payload: data})
            })
        }
        return dispatch({type: GET_RECIPE_DETAIL, payload: data})
      })
  }
}

export function searchRecipes(title) {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/recipes/search?title=${title}`)
      .then(response => response.json())
      .then(
        data => {
          if (data.code === 402) {
            return alert('There is no more points to use the api')
          }
          if (data.Error) {
            alert('There is no recipe with that search term ')
            return dispatch({type: FILL_BACKUP})
          }
          return dispatch({type: SEARCH_RECIPES, payload: data})
        }
      )
  }
}












