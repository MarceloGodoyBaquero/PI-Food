import React, {useEffect} from "react";
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";
import PageContainer from "../PageContainer/PageContainer";
import FilterOrder from "../FilterOrder/FilterOrder";
import {getRecipes} from "../../redux/actions";
import {useDispatch} from "react-redux";

export default function Home() {
  
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false)
  
  useEffect(() => {
    dispatch(getRecipes())
    setTimeout(() => {
      setLoading(true)
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
  return (
    <div>
      <SearchBar/>
      <FilterOrder/>
      {!loading && <p className={'HomeLoading'}>Loading Recipe Data...</p>}
      {loading && <PageContainer/>}
    </div>
  )
};