// Ruta principal: debe contener

// Input de búsqueda para encontrar recetas por nombre

// Área donde se verá el listado de recetas. Deberá mostrar su:
// Imagen
// Nombre
// Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
// Botones/Opciones para filtrar por por tipo de dieta
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por health score (nivel de comida saludable).
// Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.

import React, {useEffect} from "react";
import SearchBar from "../SearchBar/SearchBar";
import CardViewer from "../CardViewer/CardViewer";
import {getRecipes} from "../../redux/actions";
import {useDispatch} from "react-redux";

export default function Home(props){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes())

    },[dispatch])


    dispatch(getRecipes())
    return(
        <div>
            <SearchBar/>
            <CardViewer/>
        </div>
    )
}