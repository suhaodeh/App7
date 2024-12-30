import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar() {
  return (
<div className={` p-2 ${style.nav}`}>
    <nav className="navbar navbar-expand-lg  ">
    <div className="container">
      <a className="navbar-brand" href="#">LAVENDAR-STORE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        

          <li className="nav-item">
            <Link className="nav-link" to={'/categories'}>Categories</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link"  to={'/products'}>Products</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={'/create'}>Create</Link>
          </li>
        
        
        </ul>
       
      </div>
    </div>
  </nav>
  </div>
  )
}

