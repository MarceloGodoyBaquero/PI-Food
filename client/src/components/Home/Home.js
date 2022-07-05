import React, {useEffect} from "react";
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
import PageContainer from "../PageContainer/PageContainer";
import FilterOrder from "../FilterOrder/FilterOrder";
import {useDispatch, useSelector} from "react-redux";
import {getRecipes} from "../../redux/actions/HttpActions";

export default function Home() {
  
  const dispatch = useDispatch();
  const RecipesFil = useSelector(state => state.RecipesFilter)
  
  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch]);
  
  return (
    <div>
      <SearchBar/>
      <FilterOrder/>
      {RecipesFil.length === 0 && <p className={'HomeLoading'}>Loading Recipe Data...</p>}
      {RecipesFil && <PageContainer/>}
    </div>
  )
};