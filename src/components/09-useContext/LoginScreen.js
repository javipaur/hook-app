import { Button } from 'bootstrap';
import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  //Obtener la referencia del contexto
  const {setUser} = useContext(UserContext);

  return (
    <div>
    <h4>LoginScreen</h4>
    <hr/>
    <button
    //Seteamso el objeto
    onClick={()=>setUser({
      id:123,
      name:'javi'

    })}
    className='btn btn-primary'>Login</button>
    </div>
  )
}
