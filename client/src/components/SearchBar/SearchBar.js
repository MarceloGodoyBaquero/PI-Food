import React, {useState} from "react";
import Button from "../Button/Button";
import './SearchBar.css'
import {useDispatch} from "react-redux";
import {searchRecipes} from "../../redux/actions";

export default function SearchBar() {
  
  const dispatch = useDispatch();
  
  const [search, setSearch] = useState('');
  
  function titleToUpCase(str) {
    let strToArr = str.toLowerCase().split(' ')
    let lowToUp = strToArr.map(p => p.charAt(0).toUpperCase() + p.slice(1))
    return lowToUp.join(' ');
  }
  
  const handleChange = (e) => {
    e.preventDefault()
    setSearch(titleToUpCase(e.target.value));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(search.includes(' ', 0)) {
      setSearch('')
    return alert('The search Term cant initialize with a space')
    }
    
    if(search.match(/^[!@#$%?/><,.:;'"^&*()_=+]+$/)) {
      setSearch('')
      return alert('The search Term cant contain special characters')
    }
    
    if(!search.length) {
      setSearch('')
      return alert('Please enter a search term')
    }
    
    dispatch(searchRecipes(search));
    setSearch('')
  }
  
  return (
    <div className={'BarContainer'}>
      <form onSubmit={(e) => handleSubmit(e)} className={'SearchBarInputContainer'}>
        <input
          name={'search'}
          value={search}
          onChange={(e) => handleChange(e)}
          
          className={'SearchBarInput'}
          type={'search'}
          placeholder={'Keyword'}
        />
        
        <Button btnType={'submit'} btnName={'Search'} btnStyle={'Search'}/>
      
      </form>
      
      <div className={'SearchBarButtonContainer'}>
        <Button btnType={'button'} btnName={'Add A New Recipe +'} btnStyle={'Create'} />
      </div>
    </div>
  )
}