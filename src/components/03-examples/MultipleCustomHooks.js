import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './MultipleCustomHooks.css'


export const MultipleCustomHooks = () => {

  const {counter,incrementar}=useCounter(1);

  const {loading,data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  
  const {author,quote }=!!data && data[0]


  return (
    <div>
        <h1>BreakingBad quotes</h1>
        <hr/>
        {
        loading
        ?
        (
          <div className='alert alert-info text-center'>
          loading....
        </div>
        )
        :
        (
          <blockquote className='blockquote text-right'>
          <p className='mb-0'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
        )
      }

      <button 
      onClick={incrementar}
      className='btn btn-primary'>Siguiente quote</button>

    </div>
  )
}
