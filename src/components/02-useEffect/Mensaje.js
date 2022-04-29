import React, { useEffect, useState } from 'react'

export const Mensaje = () => {

    const [coords, setCoords] = useState({
        x:0,
        y:0})

    const {x,y} =coords;

    useEffect(() => {

        const mouseMove=(e)=>{
         const coords={x:e.x,y:e.y}
          //console.log(coords);
            setCoords(coords);
        //console.log(':D');     
        }

    window.addEventListener('mousemove',mouseMove);


      return () => {
        window.removeEventListener('mousemove',mouseMove)  
        console.log('Componente Desmontado')
      }
    }, []);
    

  return (
    <><h3>Eres Genial!</h3>
    <p>x:{x}</p>
    <p>y:{y}</p>
    </>
  )
}
