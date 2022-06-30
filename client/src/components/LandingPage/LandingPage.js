import Button from '../Button/Button'
import '../LandingPage/LandingPage.css'
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getDiets, getRecipes} from '../../redux/actions'


export default function LandingPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDiets()) //guardo las dietas en estado global
        dispatch(getRecipes()) // guard las recetas en estado global
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div className={'LandingPage'}>
            <div className={'LandingTextContainer'}>
                <h1 className={'LandingTitle'}>
                    WELCOME TO  <b>AV<span className={'Resaltado'}>O</span>CADO</b>
                </h1>
                <h2 className={'LandingSubtitle'}>
                    Your Online Recipes Book
                </h2>
                <Button btnType={'button'} btnName={'Lets Cook!'} btnStyle={'Landing'}/>
            </div>
        </div>
    )
}