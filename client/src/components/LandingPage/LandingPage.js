// Pagina inicial: deben armar una landing page con
//      Alguna imagen de fondo representativa al proyecto
//      Botón para ingresar al home (Ruta principal)

import Button from '../Button/Button'
import '../LandingPage/LandingPage.css'
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getDiets} from '../../redux/actions'


export default function LandingPage(){
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getDiets())

    },[dispatch])

    return(
        <div className={'LandingPage'}>
            <div className={'LandingTextContainer'}>
                <h1 className={'LandingTitle'}>
                    WELCOME TO  <b>AV<span className={'Resaltado'}>O</span>CADO</b>
                </h1>
                <h2 className={'LandingSubtitle'}>
                    Your Online Recipes Book
                </h2>
                <Button btnName={'Lets Cook!'} btnStyle={'Landing'}/>
            </div>
        </div>
    )
}