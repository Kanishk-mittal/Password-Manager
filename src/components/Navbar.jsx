import React from 'react'
import './Navbar.css'
import Name from './Name'
import logoImage from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className='title'>
                <img src={logoImage} alt="" />
                <Name />
            </div>
            <div className="navigator">
                <ul>
                    <NavLink className={(e) => { return e.isActive ? "active-link" : "nav-element" }} to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink className={(e) => { return e.isActive ? "active-link" : "nav-element" }} to="/about">
                        <li>About</li>
                    </NavLink>
                    <NavLink className={(e) => { return e.isActive ? "active-link" : "nav-element" }} to="/contact">
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
