
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDiets} from "../../redux/actions";
import {orderRecipes} from "../../redux/actions/SortActions";
import {filterRecipes} from "../../redux/actions/FilterActions";

export default function SearchBar() {
  const {Diets} = useSelector(state => state);
  const {RecipesFilter} = useSelector(state => state);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch])
  
  const diets = Diets.map(diet => {
    return <option key={diet.id} value={diet.name}>{diet.name}</option>
  })
  
  function onChangeHandlerSort(e) {
    e.preventDefault();
    dispatch(orderRecipes(e.target.value));
  }
  
  function onChangeHandlerFilter(e) {
    e.preventDefault();
      dispatch(filterRecipes(e.target.value));
    console.log('Filter',RecipesFilter)
  }
  
  
  return (
    <div>
      
      <select name="Order" id="Order" onChange={(e) => {onChangeHandlerSort(e)}}>
        <optgroup label="Reset">
        <option value={"Default"}>Order by (Default)</option>
        </optgroup>
        <optgroup label="Name">
          <option value="ascName">Ascending (A-Z) ↑</option>
          <option value="descName">Descending (Z-A) ↓</option>
        </optgroup>
        <optgroup label="Health Score">
          <option value="ascHealthScore">From Lower-Higher ↑</option>
          <option value="descHealthScore">From Higher-Lower ↓</option>
        </optgroup>
      </select>
      
      <select name="Filter" id="Filter" onChange={(e) => {onChangeHandlerFilter(e)}}>
        <option value="Filter by">Filter by Diet</option>
        <optgroup label="Type">
          <option value="Default">All</option>
          {diets}
        </optgroup>
      </select>
    
    </div>
  )
}