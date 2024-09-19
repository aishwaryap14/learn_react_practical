import React from 'react';
import { useState } from 'react';
import {LOGO_URL} from '../Utils/constants'
import {Link} from 'react-router-dom'

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
    return(
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src = {LOGO_URL}/>
        </div>
        <div className='nav-items'>
          <ul className='link'>
            <li><Link className='link' to = "/">Home</Link></li>
            <li><Link className='link' to = "/about">About</Link></li>
            <li><Link className='link' to = "/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className='login' onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }
export default Header;
