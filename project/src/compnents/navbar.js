import React from 'react';

const Navbar = () =>(
    <nav>
    <h2><a className="logo-link" href = "#"></a>Forever21</h2>
    <ul className = "nav-menu">

    <li><a className = "nav-menu__link"href="#">Home</a></li>
      <li><a className = "nav-menu__link"href="#">Billing and Shipping</a></li>
      <li><a className = "nav-menu__link"href="#">Review</a></li>
      <li><a className = "nav-menu__link"href ="#">Complete Order</a></li>
    </ul>
  </nav>
);

export default Navbar;



