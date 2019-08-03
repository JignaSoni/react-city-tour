import React from 'react'
import   './Navbar.scss';

// import  logo from '../../Logo Images/city tour.png';


export default function Navbar() {
    return (
        <nav className="navbar">
        {/* put your logo here below */}
       <h2 style={{color:"white"}}>LOGO</h2>
        {/* <img src={logo} alt="city Tour Logo" /> */}
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">
                    Home
                </a>
            </li>
            <li>
                <a href="/" className="nav-link">
                    About
                </a>
            </li>
            <li>
                <a href="/" className="nav-link active">
                    Tours
                </a>
            </li>
        </ul>

        </nav>
    )
}
