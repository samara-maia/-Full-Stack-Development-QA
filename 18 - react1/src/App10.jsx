import React, {useState, useEffect} from "react";

export function App10(){

  const [name, setName] = useState(localStorage.getItem('name'))

  useEffect(()=>{
    localStorage.setItem('name',name)
  }, [name])
  
  return(
    <>
    <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    </>
  )
}

