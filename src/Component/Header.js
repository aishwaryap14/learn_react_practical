import React from 'react';
import { useState } from 'react';
import {LOGO_URL} from '../Utils/constants'
import {Link} from 'react-router-dom'
import useOnlineStatus from '../Utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  const onlineStatus = useOnlineStatus();

    return(
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src = {LOGO_URL}/>
        </div>
        <div className='nav-items'>
          <ul className='link'>
            <h5 className='status'>Online Status: {onlineStatus ? "✅" : "🔴"}</h5>
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
