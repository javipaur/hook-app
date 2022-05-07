import React,{nemo} from 'react'

export const ShowIncrement = nemo(({incrementar}) => {

    console.log('Me volvi a generar .(');

  return (
    <>
    <button 
    className='btn btn-primary'
    onClick={()=>{
        incrementar(5)
    }}
    >incrementar</button>
    </>
  )
})
