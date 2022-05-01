import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import'./FocusScreen.css';

export const RealExampleRef = () => {

    const [mostrar, setmostrar] = useState(false);


  return (
    <div>
        <h1>RealExampleRef</h1>
        <hr/>
        {mostrar && <MultipleCustomHooks/>}

        <button
        className="btn btn-primary mt-5"
        onClick={ ()=>{setmostrar(!mostrar)
        }}
        >Ocultar</button>
    </div>
  )
}
