import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './styles.css';
import { useForm } from '../../hooks/useForm';



const init=()=>{
   return JSON.parse(localStorage.getItem('todos'))|| [];
}


export const TodoApp = () => {

    //Generamos el reducer
    const [todos, dispatch] = useReducer(todoReducer, [],init);

    //Capturamso los eventos del formulario
    const [{ description }, handlerInputChange, reset] = useForm({
        description: ''
    });


    //Grabamos en el locla storage usando un UseFECT
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    

    const handleToggle= (todoId) =>{
       
        dispatch({
            type:'toggle',
            payload:todoId
        })


    }


    const handlerDelete = (todoId) =>{
      console.log('todo Id'+todoId);
    //Creamos la Accion 
    const borrarTodo = {
        type: 'delete',
        payload: todoId
    }
    //Enviamos la accion al reducer
    dispatch(borrarTodo);
    }

    console.log(description);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        //Creamos la Accion 
        const añadirTodo = {
            type: 'add',
            payload: newTodo
        }
        //Enviamos la accion al reducer
        dispatch(añadirTodo);
        reset();



    }


    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li key={i}
                                    className='list-group-item'>
                                    <p className={`${todo.done&& 'complete'}`}
                                    onClick={()=>handleToggle(todo.id)}
                                    
                                    >{i + 1}.{todo.desc}</p>
                                    <button 
                                    className='btn btn-danger'
                                    onClick={()=>handlerDelete(todo.id)}
                                    >borrar</button>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className='col-5'>
                    <h4>Agregar Todo</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input type='text'
                            name='description'
                            className='form-control'
                            placeholder='Aprender..'
                            value={description}
                            onChange={handlerInputChange}
                            autoComplete='off'></input>

                        <button
                            type='submit'

                            className='btn btn-primary mt-1 btn-block'>Agregar</button>
                    </form>
                </div>
            </div>
        </>

    )
}
