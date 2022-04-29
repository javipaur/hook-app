import { useState } from "react"

export const useForm = (estadoInicial={}) => {
    //Estado
    const [formvalues, setestadoFormulario] = useState(estadoInicial);


        const handlerInputChange = ({target}) =>{

            setestadoFormulario({
             ...formvalues,
             [target.name]: target.value
             });
       }

   return [formvalues,handlerInputChange]; 
}
