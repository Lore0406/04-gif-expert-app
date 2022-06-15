import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {
  
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  // los useEffect no pueden ser "async" xq esperán algo sincrono
  // pero se puede utilizar la función .then 
  useEffect(() => {

    getGifs( category )
      .then( imgs =>{

        setTimeout( () =>{
           console.log(imgs)
          setState({
            data:imgs,
            loading: false
          });
        }, 500 );

      })


  }, [ category ])  

  // setTimeout(() => {
  //   setState({
  //       data: [1,2,3,4,5,6,7],
  //       loading: false
  //   });
  // }, 3000);

  return state; // es un array de data con loading en true  

}
