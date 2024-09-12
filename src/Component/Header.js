import React from 'react';
import { useState } from 'react';
import {LOGO_URL} from '../Utils/constants'


const Header = () => {
  const [btnName, setBtnName] = useState('Login');
    return(
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src = {LOGO_URL}/>
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About</li>
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
