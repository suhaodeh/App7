import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import Loading from '../loading/Loading'
import useFetch from '../useFetch'
import { Link } from 'react-router-dom';
import style from './Products.module.css'

export default function Products() {
  const {data ,isloading,error}= useFetch(`https://dummyjson.com/products`);
  console.log(data);
  if(isloading){
    return <Loading/>
  }
  return (
    <>
   {error? <div className='alert alert-danger'> {error}</div> :''}
  <div className={`container  ${style.pro}`} >
    
   {data.products.map(product=>
    <div key={product.id}>
      <div className=''>
      <h5>{product.title}</h5>
      <p>{product.descroption}</p>
      <img src={product.thumbnail} />
      <Link to={`/product/${product.id}`} className={`${style.link}`}>Details</Link>
    </div>
    </div>
   )}
   </div>
   
   </>
  )
}

