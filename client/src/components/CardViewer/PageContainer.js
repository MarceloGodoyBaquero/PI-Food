import React from "react";
import './CardViewer.css'
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import {useSelector} from "react-redux";


export default function PageContainer() {
    //pagination
    const [currentPage, setCurrentPage] = React.useState(1);
    const [recipesPerPage] = React.useState(9);

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

    const {Recipes} = useSelector(state => state)

    const currentRecipes = Recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

    const paginate = pageNumber => setCurrentPage(pageNumber);
    //end pagination

    return (
        <div>
            <div className='CardViewerContainer'>
                <div className={'Grid'}>
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
                <Pagination recipesPerPage={recipesPerPage} totalRecipes={Recipes.length} paginate={paginate}/>
            </div>
        </div>
    );
}

