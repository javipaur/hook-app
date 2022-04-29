import { useState } from "react"

export const useCounter = (estadoInicial=10) => {
 
    //Estado
    const [counter, setCounter] = useState(estadoInicial);


    const incrementar= ()=>{
        setCounter(counter+1)
    }

    const decrementar= ()=>{
        setCounter(counter-1)
    }
    const reset= ()=>{
        setCounter(estadoInicial)
    }

    return{
        counter,
        incrementar,
        decrementar,
        reset
    };
}
