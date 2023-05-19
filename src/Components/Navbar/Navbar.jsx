import React from 'react'
import logo from './Img/logo-2.jpg'
import humburgerMenu from './Img/menuIcon.png'
import './Navbar.css'
const Navbar = () => {

    function showMenu(){
        document.querySelector('.navLinks').classList.toggle('active')
    }

  return (
    <nav className="navbar">
        <div className="menu">
            <img src={humburgerMenu} alt="" onClick={showMenu}/>
        </div>
        <div className="logo">
            <img src={logo} alt="" />
            <li className='MobileLetsTalk'>LET'S TALK <span><ion-icon name="arrow-forward"></ion-icon></span></li>
        </div>
        <div className="navLinks">
            <ul>
                <li>WHO WE ARE</li>
                <li>CASE STUDIES</li>
                <li>EXPERTISE</li>
                <li>OUR SOLVERS</li>
                <li className='letsTalk'>LET'S TALK <div className="arrow">&rarr;</div></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar