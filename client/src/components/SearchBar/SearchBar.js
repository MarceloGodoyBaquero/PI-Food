import React from "react";
import Button from "../Button/Button";
import './SearchBar.css'

export default function SearchBar(params) {
    return(
        <div className={'SearchBarContainer'}>
            <div className={'SearchBarInputContainer'}>
                <input className={'SearchBarInput'} type={'search'} placeholder={'Keyword'}/>
                <Button btnType={'submit'} btnName={'Search'} btnStyle={'Search'}/>
            </div>
            <div className={'SearchBarButtonContainer'} >
                <Button btnType={'button'} btnName={'Add A New Recipe +'} btnStyle={'Create'}/>
            </div>
        </div>
    )
}