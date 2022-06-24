import React from "react";
import Button from "../Button/Button";
import './SearchBar.css'

export default function SearchBar(params) {
    return(
        <div className={'SearchBarContainer'}>
            <div className={'SearchBarInputContainer'}>
                <input className={'SearchBarInput'} type={'text'} placeholder={'Keyword'}/>
                <Button btnName={'Search'} btnStyle={'Search'}/>
            </div>
            <div className={'SearchBarButtonContainer'} >
                <Button btnName={'Add A New Recipe +'} btnStyle={'Create'}/>
            </div>
        </div>
    )
}