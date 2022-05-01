import React from 'react'
//Con la funcion Memo regresamso la funcion memorizada del componente si sus properties cambian.
export const Small = React.memo(
  ({value}) => {

  console.log('Me volvi a llamar :(');

  return (
    <small> {value}</small>
  )
}
);
