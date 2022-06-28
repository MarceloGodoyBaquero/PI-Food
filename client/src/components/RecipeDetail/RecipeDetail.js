import React, {useEffect} from "react";
import {getRecipeDetail} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

export default function RecipeDetail({match}){
    const dispatch = useDispatch();
    const {RecipeInfo} = useSelector(state => state)
    const {title, summary, image, healthScore, diets, analyzedInstructions} = RecipeInfo
    const defImage = 'https://www.recetasnestle.com.co/themes/custom/cult_amp/sem-imagem.png'

    useEffect(() => {
        dispatch(getRecipeDetail(match.params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    let itsLoaded = false;
    let instructions = '';

    if(diets && analyzedInstructions){
        itsLoaded = true

        if(analyzedInstructions.length === 0){
            instructions = <p>the author did not include steps in this recipe :(</p>
        } else{

            if(analyzedInstructions[0].hasOwnProperty('steps')) {
                instructions = analyzedInstructions[0].steps.map(i => <p key={i.number}>Step
                    number {i.number}: {i.step}</p>)
            } else {
                instructions = <p>Steps: {analyzedInstructions[0]}</p>
            }
        }
    }

    return(
        <div>
            {!itsLoaded &&<p>Loading Recipe Data...</p>}
            {itsLoaded && (
                <div>
                <h1>{title}</h1>
                    <h2>Health Score</h2>
                <p>{healthScore ? healthScore : 'Not specified by the recipe author'}</p>
                <img src={image ? image : defImage} alt={title}/>
                    <h2>Summary</h2>
                <p dangerouslySetInnerHTML={{__html: summary}}/>
                    <h2>Diets</h2>
                    {!diets.length ? <p>the author didnt include diet types in this recipe :( </p> : diets.map((d, index) => <p key={index}>{d.name}</p>)}
                    <h2>Instructions</h2>
                    {instructions}
                </div>
            )}
        </div>
    )

}

