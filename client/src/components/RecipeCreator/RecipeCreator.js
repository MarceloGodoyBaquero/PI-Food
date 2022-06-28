import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDiets, postRecipe} from "../../redux/actions";
import Button from "../Button/Button";
import './RecipeCreator.css';


export default function RecipeCreator(){

    const dispatch = useDispatch()
    const DietsList = useSelector(state => state.Diets)

    useEffect(() => {
        dispatch(getDiets())
    },[dispatch])

    const [input, setInput] = useState({
        healthScore: 0,
        title: '',
        image: '',
        summary: '',
        diets: [],
        analyzedInstructions: [],
    })

    const DietsMapping = DietsList.map(d =>
        <div key={d.id}>
            <label key={d.id}>
                <input
                    onChange={(e) => {
                        if(e.target.checked){
                            setInput({...input, diets: [...input.diets, e.target.value]})
                        }
                        else{
                            setInput({...input, diets: input.diets.filter(diet => diet !== e.target.value)})
                        }
                    }}
                    type={"checkbox"}
                    key={d.id}
                    name={'diets'}
                    value={d.id}/>
                {d.name}
            </label>
        </div>)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.title.includes('-')){
            alert('The Title cant contain -')
        }
        if(!input.title || !input.summary){
            alert('Please fill in title and summary fields')
        } else {
            window.confirm(`Recipe ${input.title} was created!`)
            dispatch(postRecipe(input))
            setInput({
                healthScore: 0,
                title: '',
                image: '',
                summary: '',
                diets: [],
                analyzedInstructions: [],
            })
        }
    }

    return(
        <div className={'recipeCreator'}>

            <div className={'titleContainer'}>
                <h1>LETS UPLOAD YOUR RECIPE!</h1>
            </div>

            <form className={'formContainer'} onSubmit={(e) => handleSubmit(e)}>
                <p className={'formMessage'}> Fields marked with <span className={'asterisk'}>*</span> are required</p>
                <div className={'inputContainer'}>
                    <label className={'inputLabel'}>Title<span className={'asterisk'}>*</span> </label>

                    <input
                        onChange={(e) => setInput({...input, title: e.target.value})}
                        className={'inputField'}
                        type={'text'}
                        name={'title'}
                        value={input.title}
                        placeholder={'Enter the Recipe title'}
                    />
                </div>

                <div className={'inputContainer'}>
                    <label className={'inputLabel'}>Health Score</label>

                    <input
                        onChange={(e) => setInput({...input, healthScore: e.target.value})}
                        className={'inputField'}
                        type={'number'}
                        name={'healthScore'}
                        value={input.healthScore}
                        placeholder={'Enter the Health Score'}
                        min="0" max="100"
                    />
                </div>

                <div className={'inputContainer'}>
                    <label className={'inputLabel'}>Image URL</label>

                    <input
                        onChange={(e) => setInput({...input, image: e.target.value})}
                        className={'inputField'}
                        type={'url'}
                        name={'image'}
                        value={input.image}
                        placeholder={'Enter the image url'}/>
                </div>

                <div className={'inputContainer'}>
                    <label  className={'inputLabel'}>Summary<span className={'asterisk'}>*</span> </label>

                    <textarea
                        onChange={(e) => setInput({...input, summary: e.target.value})}
                        className={'inputField'}
                        name={'summary'}
                        value={input.summary}
                        placeholder={'Describe your recipe!'}
                    />
                </div>

                <div className={'inputContainer'}>
                    <label className={'inputLabel'}>Diet type/s</label>
                    {DietsMapping}
                </div>

                <div className={'inputContainer'}>
                    <label className={'inputLabel'}>Instructions</label>

                    <textarea
                        onChange={(e) => setInput({...input, analyzedInstructions: [e.target.value]})}
                        className={'inputField'}
                        name={'analyzedInstruction'}
                        value={input.analyzedInstructions}
                        placeholder={'Describe your recipe!'}/>
                </div>
                <Button btnType={'submit'} btnName={'Create'} btnStyle={'Create'}/>
            </form>
        </div>
    )
}






































