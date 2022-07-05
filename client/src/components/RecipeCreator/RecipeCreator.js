import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDiets, postRecipe} from "../../redux/actions/HttpActions";
import Button from "../Button/Button";
import './RecipeCreator.css';


export default function RecipeCreator() {
  
  const dispatch = useDispatch()
  const {Diets} = useSelector(state => state)
  
  function titleToUpCase(str) {
    let strToArr = str.toLowerCase().split(' ')
    let lowToUp = strToArr.map(p => p.charAt(0).toUpperCase() + p.slice(1))
    return lowToUp.join(' ');
  }
  
  useEffect(() => {
    if(!Diets.length){
      dispatch(getDiets())
    }
  }, [dispatch, Diets.length])
  
  const [input, setInput] = useState({
    healthScore: 0, title: '', image: '', summary: '', diets: [], analyzedInstructions: [],
  })
  
  const DietsMapping = Diets.map(d => <div key={d.id}>
    <label key={d.id}>
      <input
        onChange={(e) => {
          if (e.target.checked) {
            setInput({...input, diets: [...input.diets, e.target.value]})
          } else {
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
    
    if (input.title.includes('-') || input.title.includes(' ', 0)) {
      setInput({...input, title: ''})
      return alert('The Title cant contain - or inicialice with a space')
    }
  
    if(input.title.match(/^[!@#$%^&*]+$/)) {
      setInput({...input, title: ''})
      return alert('The search Term cant contain special characters')
    }
  
    if (input.summary.includes(' ', 0)) {
      setInput({...input, summary: ''})
      return alert('The Summary cant inicialice with a space')
    }
    
    if (!input.title || !input.summary) {
     return alert('Please fill in title and summary fields')
    }
  
    if (input.healthScore < 0 || input.healthScore > 100) {
     return alert('Health Score must be between 0 and 100')
    }
    
    else {
      window.confirm(`Recipe ${input.title} was created!`)
      dispatch(postRecipe(input))
      setInput({
        healthScore: 0, title: '', image: '', summary: '', diets: [], analyzedInstructions: [],
      })
    }
  }
  
  return (<div className={'recipeCreator'}>
      
      <h1 className={'FormTitle'}>Lets Create A Recipe!</h1>
      
      <form className={'formContainer'} onSubmit={(e) => handleSubmit(e)}>
        <p className={'FormMessage'}> Fields marked with <span className={'asterisk'}>*</span> are required</p>
        <div className={'inputContainer'}>
          <label className={'inputLabel'}>Title<span className={'asterisk'}>*</span> </label>
          
          <input
            onChange={(e) => setInput({...input, title: titleToUpCase(e.target.value)})}
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
          <label className={'inputLabel'}>Summary<span className={'asterisk'}>*</span> </label>
          
          <textarea
            onChange={(e) => setInput({...input, summary: e.target.value})}
            className={'inputField'}
            name={'summary'}
            value={input.summary}
            placeholder={'Describe your recipe!'}
          />
        </div>
        
        <div className={'inputDietContainer'}>
          <label className={'inputLabel'}>Diet type/s</label>
          <div className={'inputDietSubContainer'}>
            {DietsMapping}
          </div>
        
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
    </div>)
}






































