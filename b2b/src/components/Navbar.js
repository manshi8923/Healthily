import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate=useNavigate();
  const loggedIn=JSON.parse(localStorage.getItem("authToken"));
  //handle Logout
  const handleLogout=async()=>{
    try{
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout Successfully");
      navigate("/login");
    }
    catch(err){
      console.log(err);
    }
  }
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* <img id='logo' src='images/logo.png'alt='HEALTHIFY' onClick={()=>'/'}/> */}
            <h1 id='logo' onClick={()=>'/'}>HEALTHIFY</h1>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li>
              {
                loggedIn?(
                  <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Logout
                </Link>
                ):
                (
                  <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
            Sign Up/Login
                </Link>
                )
                }
            </li>
          </ul>
          {button && loggedIn &&
          <Button buttonStyle='btn--outline'>Logout</Button>
        }
          {button && !loggedIn &&
          <Button buttonStyle='btn--outline'>SIGN UP/LOGIN</Button>
        }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
