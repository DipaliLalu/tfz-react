import React, { useEffect, useState } from 'react'

export default function FetchAPI() {
  const [apiData,setApiData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState('');
  const data=async ()=>{
    // api.then(response=>response.json()).then(data=>{setApiData(data);setLoading(false)})
    
    try{
      const api=await fetch('https://jsonplaceholder.typicode.com/todos');
      const res=await api.json();
      setApiData(res);
      setLoading(false);
    }catch(error){
      setError(error);
      setLoading(false);
    }

  }
  useEffect(()=>{
    data();    
  },[])
  
  if(loading){
    return <h1>Loading...</h1>
  }
  if(error){
    return  <h1>{error.message}</h1> 
  }
  return (
    <div className='mt-5'>
      <h2>API Data</h2>
      {apiData.map((curEle)=>{
        return <li key={curEle.id}>{curEle.title}</li>
      })}
    </div>
  )
}
