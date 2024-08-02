
import { ShoppingCart } from "phosphor-react"; 

import { NavLink } from "react-router-dom";
// import "./navbar.css";
import "../components/bootnav.css";
import logob from './Artboard 40@4x-8.png';
export const Navbar = () => {
  
  return (
  <>
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-white">
  <div class="container-fluid me-5 ms-5">
  <div className="logo1">
  <img src={logob} alt="" />
          <h2>
            <span>U</span>ni
            <span>G</span>ear
          
          </h2>
        </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse fw-semibold" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0 nav nav-underline">
        <li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li>
        <li class="nav-item"><a class="nav-link active" href="/about">About</a></li>
        <li class="nav-item"><a class="nav-link active" href="/Menu">Contact</a></li>
        <li class="nav-item"><a class="nav-link active" href="/Shop">Shop</a></li>
        <li class="nav-item"><NavLink to="/cart" className="nav-link active"><ShoppingCart/>cart</NavLink></li>    
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <a class="btn btn-outline-success" href="/Shop">Search</a> 
      </form> */}
    </div>
  </div>
</nav>
  
    </>
  );
};
