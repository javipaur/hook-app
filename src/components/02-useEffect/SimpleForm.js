import React, { useEffect, useState } from 'react'
import './effects.css'
import { Mensaje } from './Mensaje';

export const SimpleForm = () => {

  //estado
  const [estadoFormulario, setestadoFormulario] = useState({
        nombre:'',
        correo:''
    });  

    const {nombre,correo} =estadoFormulario;

  useEffect(()=>{
    //console.log('hey!');
  },[]);

  useEffect(()=>{
   // console.log('estadoFormulario cambio!');
  },[estadoFormulario]);

  useEffect(()=>{
    //console.log('estadoFormulario cambio!');
  },[correo]);

  const handlerInputChange = ({target}) =>{
       setestadoFormulario({
        ...estadoFormulario,
        [target.name]: target.value
        });
  }

  return (
    <>
    <h1>Formulario Simple</h1>
    <hr/>
    <div className='form-grup'>
        <input 
        type="text" 
        name="nombre"
        className='form-control'
        placeholder='Tu nombre'
        autoComplete='off'
        value={nombre}
        onChange={handlerInputChange}/>
    </div>
    <div className='form-grup'>
        <input 
        type="text" 
        name="correo"
        className='form-control'
        placeholder='email@email.com'
        autoComplete='off'
        value={correo}
        onChange={handlerInputChange}/>
    </div>

    {(nombre === '123' ) && <Mensaje/>}
    </>
  )
}
