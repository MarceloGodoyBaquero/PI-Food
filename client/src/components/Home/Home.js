import React, {useEffect} from "react";
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
import PageContainer from "../PageContainer/PageContainer";
import FilterOrder from "../FilterOrder/FilterOrder";
import {getRecipes} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

export default function Home() {
  
  const dispatch = useDispatch();
  
  const Recipes = useSelector(state => state.RecipesFilter)
  
  
  useEffect(() => {
    dispatch(getRecipes())
      // setTimeout(() => {
      //   setLoading(true)
      // }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div>
      <SearchBar/>
      <FilterOrder/>
      {Recipes.length === 0 && <p className={'HomeLoading'}>Loading Recipe Data...</p>}
      {Recipes && <PageContainer/>}
    </div>
  )
};