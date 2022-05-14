import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';



const init=()=>{
   return JSON.parse(localStorage.getItem('todos'))|| [];
}


export const TodoApp = () => {

    //Generamos el reducer
    const [todos, dispatch] = useReducer(todoReducer, [],init);

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
    const handleAddTodo=(newTodo)=>{
            dispatch({
                type: 'add',
                payload: newTodo
            });
    }

    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    {/* TodoList todo  */}
                    <TodoList 
                    todos={todos}
                    handleToggle={handleToggle}
                    handlerDelete={handlerDelete}
                    />
                    

                </div>
                <div className='col-5'>
                    <TodoAdd handleAddTodo={handleAddTodo}></TodoAdd>
                </div>
            </div>
        </>

    )
}
