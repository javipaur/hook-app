import React, { useRef } from 'react';
import'./FocusScreen.css';


export const FocusScreen = () => {


  const inputref = useRef()
  //console.log(ref)


  const handleClick=()=>{

    //document.querySelector('input').select();
    inputref.current.select();
    console.log(inputref);
  }

  return (
    <>
      <h1>
        FocusScreen
        </h1>
        <hr/>

        <input 
        ref={inputref}
        className='form-control'
        placeholder='su nombre'/>


        <button
        onClick={handleClick} 
        className='bnt btn-outline-primary mt-5'>Focus</button>
    </>
  )
}
