import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import Loading from '../loading/Loading'
import useFetch from '../useFetch'

export default function Limitproducts() {
      const {data ,isloading,error}= useFetch(`https://dummyjson.com/products?limit=5`);
      console.log(data);
      if(isloading){
        return <Loading/>
      }
  return (
    <>
     {error? <div className='alert alert-danger'> {error}</div> :''}
     <div className='container d-flex '>
        
     {data.products.map(product=>(
    
       
        <div key={product.id} >
            <img src={product.thumbnail}></img>
            </div>
       
      
     ))}
      </div>
      
    </>
   
  )
}
