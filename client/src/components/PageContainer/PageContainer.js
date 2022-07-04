import React, {useState} from "react";
import './CardViewer.css'
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import {useSelector} from "react-redux";


export default function PageContainer() {
  
  const {RecipesFilter} = useSelector(state => state)
  const [currentPage, setCurrentPage] = useState(1); //pag actual siempre es la 1
  const [recipesPerPage] = useState(9);// cant de recetas por pag
  
  const indexOfLastRecipe = currentPage * recipesPerPage; //indice del ultimo elemento de la pag actual (9, 18, 27, 36, 45, 54, 63, 72, 81)
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; //indice del primer elemento de la pag actual (0, 9, 18, 27, 36, 45, 54, 63, 72)
  const currentRecipes = RecipesFilter.slice(indexOfFirstRecipe, indexOfLastRecipe) //recetas de la pag actual (9, 18, 27, 36, 45, 54, 63, 72, 81)
  const paginate = (pageNumber) => setCurrentPage(pageNumber); //funcion para cambiar de pag y actualizar el state de currentPage y currentRecipes
  
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
        <Pagination
          currentPage = {currentPage}
          recipesPerPage={recipesPerPage}
          totalRecipes={RecipesFilter.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

