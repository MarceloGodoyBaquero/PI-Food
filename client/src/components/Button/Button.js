import React from "react";
import '../Button/Button.css'
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getRecipes} from "../../redux/actions";

export default function Button(props) {

    const {btnName, btnStyle, btnType} = props

    const dispatch = useDispatch();

    const history = useHistory()

    function clickHandler(tipo) {
        if (tipo === 'Landing') {
            history.push('/home')
            dispatch(getRecipes())
        }
        if (tipo === 'Create') {
            history.push('/recipe/create')
        }
        if (tipo === 'Home') {
            history.push('/home')
            dispatch(getRecipes())
        }
    }

    return (
        <div>
            <button type={btnType} onClick={() => clickHandler(btnStyle)} className={btnStyle}>
                {btnName}
            </button>
        </div>
    )
}

