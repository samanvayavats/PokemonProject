import React from 'react'
import {NavLink}from  'react-router-dom';
import './Header.css'
const Header = () => {
  return (
   <header>
    <h3>GET YOUR POKEMON DETAILS</h3>
    <ul>
        <li>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-link' : 'basic_class')}>Home</NavLink>
        </li>
        <li>
        <NavLink to='/aboutus' className={({ isActive }) => (isActive ? 'nav-link' : 'basic_class')}>AboutUs</NavLink>
        </li>
       <li>

        <NavLink to='/contactus' className={({ isActive }) => (isActive ? 'nav-link' : 'basic_class')}>ContactUs</NavLink>
       </li>    
    </ul>
   </header>
  )
}

export default Header
