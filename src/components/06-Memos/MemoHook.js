import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';




export const MemoHook = () => {

    const {counter,incrementar} = useCounter(5000);
    const [show, setshow] = useState(true);



   const memoProcesoPesado= useMemo(() => procesoPesado(counter), [counter])


  return (
    <div>
        <h1>MemoHook</h1>
        <h3>Memorize <small>{counter}  </small></h3>
        <hr/>

        <p>{procesoPesado(counter)}</p>

        <button 
        onClick={incrementar}
        className='btn btn-primary'>+1</button>

        <button 
        onClick={()=>setshow(!show)}
        className='btn btn-outline-primary ml-3'>Mostrar / Ocultar {JSON.stringify(show)}</button>


        </div>
  )
}
