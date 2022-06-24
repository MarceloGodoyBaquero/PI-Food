import React from "react";
import '../Button/Button.css'
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getRecipes} from '../../redux/actions'

export default function Button(props) {

    const {btnName, btnStyle} = props

    const history = useHistory()
    const dispatch = useDispatch()

    function clickHandler(tipo) {
        if(tipo === 'Landing'){
            history.push('/home')
            dispatch(getRecipes())
        }
        if(tipo === 'Create'){
            history.push('/recipe/create')
        }
        if(tipo === 'Home'){
            history.push('/home')
            dispatch(getRecipes())
        }
    }

    return (
        <div>
            <button onClick={() => clickHandler(btnStyle)} className={btnStyle}>
                {btnName}
            </button>
        </div>
    )
}
