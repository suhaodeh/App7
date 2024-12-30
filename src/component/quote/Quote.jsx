import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import Loading from '../loading/Loading'
import useFetch from '../useFetch'

export default function Quote() {
    const {data}= useFetch(`https://dummyjson.com/quotes/random`);
    console.log(data);
  return (
    <>
    <div>
       <h3 className='text-center p-5'>
       {data.quote}
       </h3>
       
        
    </div>
  
    </>
  )
}
