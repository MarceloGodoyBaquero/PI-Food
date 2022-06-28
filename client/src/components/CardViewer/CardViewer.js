import React from "react";
import './CardViewer.css'
import Card from "../Card/Card";
import {useSelector} from "react-redux";

export default function CardViewer(props) {
    //pagination
    const [currentPage, setCurrentPage] = React.useState(1);
    const [recipesPerPage] = React.useState(9);

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

    const currentRecipes = useSelector(state => state.Recipes.slice(indexOfFirstRecipe, indexOfLastRecipe));

    const paginate = pageNumber => setCurrentPage(pageNumber);
    //end pagination

    return (
        <div >
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

                <button onClick={() => paginate(currentPage - 1)}>Previous</button>
                <button onClick={() => paginate(currentPage + 1)}>Next</button>
            </div>
        </div>
    );
}

