import React, {useEffect} from "react";
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
import PageContainer from "../CardViewer/PageContainer";
import FilterOrder from "../FilterOrder/FilterOrder";
import {getRecipes} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

export default function Home() {
  
  const dispatch = useDispatch();
  const {Recipes} = useSelector(state => state);
  let itsLoaded = false;
  
  useEffect(() => {
    dispatch(getRecipes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (Recipes) itsLoaded = true;
  
  return (
    <div>
      <SearchBar/>
      <FilterOrder/>
      {!itsLoaded && <p className={'HomeLoading'}>Loading Recipe Data...</p>}
      {itsLoaded && <PageContainer/>}
    </div>
  )
};