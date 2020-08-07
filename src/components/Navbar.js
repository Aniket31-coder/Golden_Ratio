import React from 'react';
import Logo from './images/Logo.jpeg'

const Navbar = ()=>{
    return (
        <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
     <img src={Logo} class="navbar-brand"></img>
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse navbar-right" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/design">Design</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/architecture">Architecture</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/nature">Nature</a>
      </li>
      
    </ul>
  </div>
</nav>
        </div>
    );
}


export default Navbar;