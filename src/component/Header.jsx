import React from 'react'
import {NavLink}from  'react-router-dom';
import './Header.css'
const Header = () => {
  return (
   <header>
    <h3>GET YOUR POKEMON DETAILS</h3>
    <ul>
        <li>
        <NavLink to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink to='/aboutus'>AboutUs</NavLink>
        </li>
       <li>

        <NavLink to='/contactus'>ContactUs</NavLink>
       </li>

       
    </ul>
   </header>
  )
}

export default Header
