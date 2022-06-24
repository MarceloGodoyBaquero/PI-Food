import React from "react";
import './CardViewer.css'
import Card from "../Card/Card";
import {useSelector} from "react-redux";

export default function CardViewer() {
    const RecipesList = useSelector(state => state.Recipes)
    const RecipesMap = RecipesList.map(e => <Card
        key={e.id}
        title={e.title}
        image={e.image}
        diets={e.diets}
    />)

    return (<div>
            <div className={'CardViewerContainer'}>
                <div className={'Grid'}>
                    {RecipesMap}
                </div>
            </div>
        </div>)
}
