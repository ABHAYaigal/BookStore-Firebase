import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: '40px 0' }}>
  <div className="container-fluid">
  <div className='links'>
 
  <Link to="/" className="navbar-brand me-3">
            Book Store
  </Link>
  <Link to="/" className="me-3">
    <button type="button" className="btn btn-outline-light">Login Page</button>
  </Link>
  
  <Link to="/cart">
  <button type="button" className="btn btn-outline-light">Cart</button>
  </Link>
 

</div>
    <div className=" form-inline pull-right" id="navbarSupportedContent">
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
