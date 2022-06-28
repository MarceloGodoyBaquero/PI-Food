import React from 'react'
import './Card.css'
import {Link} from "react-router-dom";

export default function Card(props) {
    const {title, image, diets} = props
    const defImage = 'https://www.recetasnestle.com.co/themes/custom/cult_amp/sem-imagem.png'


    return(

        <div className={'CardContainer'}>
            <Link to={`/recipe/details/${props.id}`}>
            <div className={'CardImage'}>
                <img src={image ? image : defImage} alt={title}/>
            </div>
            <div className={'ImageFooter'}>
                <h3 className={'CardTitle'}> {title} </h3>
                <div className={'CardTags'}>
                    {diets.map((d, index) => (
                        <span key={index}>
                            <p>
                                {d.name}
                            </p>
                        </span>))}
                </div>
            </div>
            </Link>
        </div>

    )
}