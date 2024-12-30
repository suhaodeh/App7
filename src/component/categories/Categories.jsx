import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import style from './Categories.module.css'
import ProductsByCcategory from '../products/ProductsByCcategory'
import useFetch from '../useFetch'
import { Link } from 'react-router-dom';



export default function Categories() {
 
  const {data }= useFetch(`https://dummyjson.com/products/category-list`);
  console.log(data);
 
  return (
    <>
    <div className={`container ${style.cate} `}>
  {data.map((item)=>(
   
     <div>
      <h4>
      <Link to={`/category/${item}`}>{item} </Link>
        </h4>
        
    </div> 
  ))}
   </div>
  
   </>
  
  )

}

