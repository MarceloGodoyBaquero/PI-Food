import React from "react";
import '../Button/Button.css'
import {Link, useHistory} from "react-router-dom";


export default function Button(props) {

    const {btnName, btnStyle, btnType} = props

    const history = useHistory()

    function clickHandler(tipo) {
        if (tipo === 'Landing') {
            history.push('/home')
        }
        if (tipo === 'Create') {
            history.push('/recipe/create')
        }
        if (tipo === 'Home') {
            history.push('/home')
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

