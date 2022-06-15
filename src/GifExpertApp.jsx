import { useState } from "react";
// importamos el componente 
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    // const categories = ['Osos', 'Gatos', 'Malositos'];
    const [categories, setCategories] = useState(['Gatos']);


    // Se maneja en el componente AddCategory 
    // const handleAdd = () =>{
    //     // con spread
    //     setCategories ([...categories, 'Ranitas']);

    //     // o con un callback 
    //     //  setCategories (categories => ['Squirels', ...categories]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* setCategories is required en las props del componente AddCategory */}
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* Se maneja en el componente AddCategory  */}
            {/* <button onClick={ handleAdd }>Add Category</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={ category } 
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}
export default GifExpertApp;
