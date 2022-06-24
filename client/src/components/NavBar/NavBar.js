import React from "react";
import '../NavBar/NavBar.css'
import Button from "../Button/Button";

export default function NavBar(props){
    return(
        <div className={'NavBarContainer'}>
            <Button btnName={'AVOCADO HOME'} btnStyle={'Home'}/>
        </div>
    )
}