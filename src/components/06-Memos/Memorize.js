import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { Small } from './Small';


export const Memorize = () => {

    const {counter,incrementar} = useCounter(10);

    const [show, setshow] = useState(true)

  return (
    <div>
        <h1>Memorize <Small value={counter}/></h1>
        <hr/>
        <button 
        onClick={incrementar}
        className='btn btn-primary'>+1</button>

        <button 
        onClick={()=>setshow(!show)}
        className='btn btn-outline-primary ml-3'>Mostrar / Ocultar {JSON.stringify(show)}</button>


        </div>
  )
}
