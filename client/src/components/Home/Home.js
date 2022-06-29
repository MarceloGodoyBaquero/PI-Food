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
import PageContainer from "../CardViewer/PageContainer";
import {getRecipes} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

export default function Home(props){

    const dispatch = useDispatch();
    const {Recipes} = useSelector(state => state)

    useEffect(() => {
        dispatch(getRecipes())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    let itsLoaded = false;

    if(Recipes){
        itsLoaded = true
    }

    return(
        <div>
            <SearchBar/>
            {!itsLoaded &&<p>Loading Recipe Data...</p>}
            {itsLoaded && (
                <PageContainer/>
            )}

        </div>
    )
}