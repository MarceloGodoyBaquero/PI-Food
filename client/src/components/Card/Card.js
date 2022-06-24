import React from 'react'

export default function Card(props) {
    const {title, image, diets} = props
    const dietsMap = diets.map(d => <p id={d.name} > {d.name} </p>)
    return(
        <div className={'CardContainer'}>
            <div className={'CardImage'}>
                <img src={image} alt={title}/>
            </div>
            <div className={'ImageFooter'}>
                <h3> {title} </h3>
                <div className={'CardTags'}>
                    {dietsMap}
                </div>
            </div>
        </div>
    )
}