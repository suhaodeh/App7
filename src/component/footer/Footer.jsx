import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <>
    <div  className={` ${style.footer}`}>
<div className='container'>
    <div className ='d-flex justify-content-between p-5 mt-5'>
    <div className=''>
         <h5>welcome to our store</h5>
         <h5>Location</h5>
       <h5>2215 John Daniel Drive</h5>
          </div>
   

     <div className=''>
      <h5>ABOUT</h5>  
      <h5>CATEGORIES</h5> 
      <h5>PRODUCTS</h5> 
      <h5>CREATE</h5> 
        
        </div>  
     <div>
        <h5>Contact us</h5>
        <h5>store@gmail.com</h5>
        <h5>+96698765433</h5>
     </div>
        
     </div>

     </div>
    </div>
    
    </>
  

)}
