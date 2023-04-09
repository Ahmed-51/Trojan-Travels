import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(false)

  const handleClick= ()=>{
    setClick(!click)
  }
  const closeMobileMenu=()=>{
    setClick(false)
  }

  const showButton = ()=>{
    if(window.innerWidth <=960){
      setButton(false)
    }
    else{
      setButton(true)
    }
  }

  useEffect(()=>{
    showButton()
  }, [])

  window.addEventListener('resize', showButton)
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
          Trojan
          <i class="fa-solid fa-chess-knight"></i>
        </Link>
        
        <div className="menu-icon" onClick={handleClick}>
        {click ? <i class="fa-regular fa-circle-xmark" style={{color: "#ffffff",}}></i> : <i class="fa-solid fa-bars"></i>}
        </div>


        <ul className={click? 'nav-menu active': 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar