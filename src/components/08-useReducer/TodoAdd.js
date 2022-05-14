import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    //Estado del formulario
    //Capturamso los eventos del formulario
    const [{ description }, handlerInputChange, reset] = useForm({
        description: ''
    });

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
        
        //Enviamos la accion al reducer
        handleAddTodo(newTodo);
        reset();

    }



    return (
        <>
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
        </>
    )
}
