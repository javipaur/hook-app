import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    //Estado
    const [contador,setContador]=useState({
        counter1:10,
        counter2:20
    });

    const {counter1,counter2}=contador;

    //console.log(contador);

  return (
    <>
    {/* <h1>Counter {contador}</h1> */}
    <h1>Counter {counter1}</h1>
    <h1>Counter {counter2}</h1>
    <hr/>
    <button 
    className='btn btn-primary ' 
    onClick={()=>{
       setContador({
            ...contador,
            counter1:counter1+1,
            counter2:counter2+2
       });
    }}>
        +1
    </button>
    </>
  )
}
