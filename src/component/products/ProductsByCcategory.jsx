import React from 'react'
import { useParams } from 'react-router-dom';

import useFetch from '../useFetch';
import Loading from '../loading/Loading'

export default function ProductsByCcategory() {

     const {category} =useParams();
     
        const {data,isloading,error}=
        useFetch(`https://dummyjson.com/products/category/${category}`);
        console.log(data);
       if(isloading){
        return <Loading/>
       }
  return (
    <>
     {error? <div className='alert alert-danger'> {error}</div> :''}
     <div className='d-flex flex-wrap w-50 justify-content-between m-auto'>
     {data.products.map(product=>
    <div key={product.id}>
      <div className=''>
      <h5>{product.title}</h5>
      <p>{product.descroption}</p>
      <img src={product.thumbnail} />
      </div>
      </div>
      
     
)}
</div>
    </>
   
  )}

