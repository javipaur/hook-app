import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'


export const FormWithCustomHook = () => {

  //estado
  const [formvalues, handlerInputChange] = useForm({
        nombre:'',
        correo:'',
        clave:''
    });  

    const {nombre,correo,clave} =formvalues;

    useEffect(()=>{
        console.log('Email Cambió');
    },[correo]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formvalues);
    }


  return (
    <form onSubmit={handleSubmit}>
    <h1>FormWithCustomHook</h1>
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
    <div className='form-grup'>
        <input 
        type="password" 
        name="clave"
        className='form-control'
        placeholder='***'
        value={clave}
        onChange={handlerInputChange}/>
    </div>

    <button type='submit' className='btn btn-primary'>Guardar</button>


    </form>
  )
}
