import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function useFetch(url) {
    const [data,setData]= useState([]);
    const [error,setError]= useState(null);
    const[isloading,setIsloading]= useState(true);

    const getData= async()=>{
        try{
            const {data}= await axios.get(url);
            setData(data);
            setError(null);
        }catch(err){
            setError(err.message);

        }finally{
            setIsloading(false);
        }
     
    }
    useEffect( ()=>{
        getData();
    },[])
  return {data,error,isloading}
}
