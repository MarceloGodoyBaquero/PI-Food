import React, {useState} from "react";
import './CardViewer.css'
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import {useSelector} from "react-redux";


export default function PageContainer() {
  //pagination
  
  const {RecipesFilter} = useSelector(state => state)
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);
  
  
  const indexOfLastRecipe = currentPage * recipesPerPage;
  
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  
  const currentRecipes = RecipesFilter.slice(indexOfFirstRecipe, indexOfLastRecipe)
  
  const paginate = pageNumber => setCurrentPage(pageNumber);
  //end pagination
  
  return (
    <div>
      <div className='App-bg'>
        <div className={'App-body'}>
          {currentRecipes.map((e, index) => (
            <Card
              key={index}
              id={e.id}
              title={e.title}
              image={e.image}
              diets={e.diets}
            />
          ))}
        </div>
      </div>
      <div className="pagination">
        <Pagination recipesPerPage={recipesPerPage} totalRecipes={RecipesFilter.length} paginate={paginate}/>
      </div>
    </div>
  
  );
}

