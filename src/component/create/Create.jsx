import React from 'react'
import style from './Create.module.css'
export default function Create() {
  
  return (
    <>
    <form>
      <div className={` d-flex flex-column ${style.form}`}>

      <div className={`${style.input}`}>
    <label for="product-name">product name</label>
    <input type='text' id="product-name"/>
    </div>

    <div className={`${style.input}`}>
    <label for="product-description">product description</label>
    <input type='text' id="product-description"/>
    </div>

    <div className={`${style.input}`}>
    <label for="product-price">product price</label>
    <input type='text' id="product-price"/>
    </div>

    <div className={`${style.input}`}>
    <label for="product-image">product image</label>
    <input type='text' id="product-image"/>
    </div>

    <div className={`${style.input}`}>
    <label for="product-category">product category</label>
    <input type='text' id="product-category"/>
    </div>

    </div>


  </form>
    </>
  )
}
