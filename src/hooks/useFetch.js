import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {

const isMontado=useRef(true);

const [estado, setEstado] = useState(
    {
    data:null,
    loading:true,
    error:null
}
);

useEffect(()=>{
  return ()=>{
    isMontado.current=false;
  }
});


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
     // if( isMontado.current){
        setEstado({
            loading:false,
            error:null,
            data

        });
     // }
  });
  return () => {
    
  }
}, [url])

return estado;

    
}
