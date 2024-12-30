import React from 'react'
import style from './Product.module.css'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch';
import Loading from '../loading/Loading'
export default function Product() {
    const {id} =useParams();
    const {data,isloading,error}=useFetch(`https://dummyjson.com/products/${id}`);
    console.log(data);
   if(isloading){
    return <Loading/>
   }
  return (
    <>
     {error? <div className='alert alert-danger'> {error}</div> :''}
     <div className={`container mt-5 `}>
        <div className='row'>
            <div className='col-md-4'>
           <div className={`${style.productstart}`}>
    <img src={data.thumbnail}/>
    <h4>{data.title}</h4>
    <h3 className='badge text-bg-secondary '>{data.category}</h3>
    </div>
  </div>


  <div className='col-md-8'>
<div className={`ms-5 ${style.productend}`}>
 <h3>product images: </h3>
  {data.images.map(img=> <img src={img} className='w-25'/>)}
  <p>{data.description}</p>
  </div>
  </div>
            </div>
        </div>
   
  
    </>
   
  )
}
