import React, {useEffect} from "react";
import {getRecipeDetail} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import './RecipeDetail.css'

export default function RecipeDetail({match}) {
    const dispatch = useDispatch();
    const {RecipeInfo} = useSelector(state => state)
    const {title, summary, image, healthScore, diets, analyzedInstructions} = RecipeInfo
    const defImage = 'https://www.recetasnestle.com.co/themes/custom/cult_amp/sem-imagem.png'

    let itsLoaded = false;

    useEffect(() => {
        dispatch(getRecipeDetail(match.params.id))
        itsLoaded = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let instructions = '';

    if (diets && analyzedInstructions) {
        itsLoaded = true

        if (analyzedInstructions.length === 0) {
            instructions = <p>the author did not include steps in this recipe :(</p>
        } else {

            if (analyzedInstructions[0].hasOwnProperty('steps')) {
                instructions = analyzedInstructions[0].steps.map(i => <p className={'RecipeStepsItems'} key={i.number}>
                    Step number {i.number}: {i.step}</p>)
            } else {
                instructions = <p className={'RecipeSummaryText'}>Steps: {analyzedInstructions[0]}</p>
            }
        }
    }

    return (
        <div className={'RecipeBackground'}>
            {!itsLoaded && <p className={'RecipeLoader'}>Loading Recipe Data...</p>}
            {itsLoaded && (
                <div className={'RecipeContainer'}>
                    <div className={'RecipeHeader'}>
                        <h1 className={'RecipeTitle'}>{title}</h1>
                        <h2>Health Score / </h2>
                        <p>{healthScore ? healthScore : 'Not specified by the recipe author'}</p>
                    </div>
                    <div className={'RecipeImageContainer'}>
                        <img className={'RecipeImage'} src={image ? image : defImage} alt={title}/>
                    </div>
                    <h2 className={'RecipeSubTitle'}>Summary</h2>
                    <p className={'RecipeSummaryText'} dangerouslySetInnerHTML={{__html: summary}}/>
                    <h2 className={'RecipeSubTitle'}>Diets</h2>
                    <div className={'RecipeDietTags'}>
                        {!diets.length ?
                            <p>the author didnt include diet types in this recipe :( </p> : diets.map((d, index) =>
                                <p className={'RecipeDietItems'}
                                key={index}>{d.name}
                                </p>)}
                    </div>
                    <h2 className={'RecipeSubTitle'}>Instructions</h2>
                    {instructions}
                </div>
            )}
        </div>
    )

}

