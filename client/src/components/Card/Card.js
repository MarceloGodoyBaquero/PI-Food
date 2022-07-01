import React from 'react'
import './Card.css'
import {Link} from "react-router-dom";

export default function Card(props) {
  const {title, image, diets} = props
  const defImage = 'https://www.recetasnestle.com.co/themes/custom/cult_amp/sem-imagem.png'
  
  
  return (
    <Link to={`/recipe/details/${props.id}`}>
      <div className={'CardContainer'}>
        <div className={'CardImage'}>
          <img className={'Image'} src={image ? image : defImage} alt={title}/>
        </div>
        <div className={'ImageFooter'}>
          <h3 className={'CardTitle'}> {title} </h3>
          <div className={'CardTags'}>
            <ul>
              {diets.map((d, index) => (
                <li className={'CardList'} key={index}>
                  {d.name}
                </li>))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  )
}