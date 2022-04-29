import { useEffect, useState } from "react";

export const useFetch = (url) => {

const [estado, setEstado] = useState(
    {
    data:null,
    loading:true,
    error:null
}
);

useEffect(() => {
//Por cada recuperacion display login
    setEstado({
        loading:true,
        error:null,
        data:null
    })

  fetch(url)
    .then(resp=>resp.json())
    .then(data=>{

    setEstado({
        loading:false,
        error:null,
        data

    })
  });
  return () => {
    
  }
}, [url])

return estado;

    
}
