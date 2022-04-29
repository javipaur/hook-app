import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import'./counter.css';


export const CounterWithCustomHook = () => {

   const {estado,incrementar,decrementar,reset}= useCounter(100);

  return (
    <>
    <h1>Counter with Hook: {estado}</h1>
    <hr/>
    <button onClick={()=>incrementar(2)} className='btn'> +1</button>
    <button onClick={()=>decrementar(2)} className='btn'>-1</button>
    <button onClick={reset} className='btn'>Reset</button>
    </>
  )
}
