// import { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
 import { GifGridItem } from './GifGridItem';
// import { useEffect } from "react";

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    // renombramos el data como iamges
   const { data: images, loading } = useFetchGifs(category);
   
   console.log( loading );


    // ejemplo de renderización infinita con useState
    // const [ count, setCount ] = useState(0)

    // const [images, setImages] = useState([]);

    // renderización del código una sola vez
    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages( imgs ));

    // }, [ category ]) 
    
    // ya que le enviamos un array/lista vacio de dependencias 
    // si le mandamos la categoria es por el warning ya que en
    // ciertas apliaciones podemos querer que se dispare otra vez el 
    // useEffect por un cambio de categoría por ejemplo

    // useEffect(() => {
    //     console.log("caca");
    // }, []) // el useEffect solo se dispara una única vez 



    return (
        <>
            <h3 className="card animate__animated animate__fadeIn"> {category} </h3>

            {loading && <p className="card animate__animated animate__flash">Loading...</p>}

            <div className='card-grid'> 

                {  
                    //  desestructuramos la información de las imagenes
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

                {/* ejemplo de renderización infinita con useState */}
             {/* <h3> {count} </h3>
            <button onClick={() => setCount(count + 1)}></button> */} 

            </div>
        </>
    )
}
 