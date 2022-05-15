import React, { useContext } from 'react'
import { UserContext } from './UserContext';


export const AboutScreen = () => {

  const {user,setUser} = useContext(UserContext);

  const handlerClick=()=>{
    setUser({});
  }

  return (
    <div>
        <h4>AboutScreen</h4>
        <hr/>
        <pre>
          {JSON.stringify(user,null,3)}
        </pre>
        <button className='btn btn-warning'
        onClick={handlerClick}>Logout</button>
        </div>
  )
}
