import Button from '../Button/Button'
import './LandingPage.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDiets, getRecipes} from '../../redux/actions/HttpActions'

export default function LandingPage() {
  
  const {Diets, RecipesFilter} = useSelector(state => state)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(!Diets.length) {
      dispatch(getDiets())
    }
    if(!RecipesFilter.length) {
      dispatch(getRecipes())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])
  
  return (
    <div className={'LandingPage'}>
      <div className={'LandingTextContainer'}>
        <h1 className={'LandingTitle'}>
          WELCOME TO <b>AV<span className={'Resaltado'}>O</span>CADO</b>
        </h1>
        <h2 className={'LandingSubtitle'}>
          Your Online Recipes Book
        </h2>
        <Button btnType={'button'} btnName={'Lets Cook!'} btnStyle={'Landing'}/>
      </div>
    </div>
  )
}
