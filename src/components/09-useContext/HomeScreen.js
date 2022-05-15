import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

  const {user} = useContext(UserContext)

  return (
    <>
    <div className='container'>
      <div className='row'></div>
    </div>
    <h4>HomeScreen</h4>
    <hr/>
    <pre className='container'>
      {JSON.stringify(user,null,3)}
    </pre>
    </>
  )
}
