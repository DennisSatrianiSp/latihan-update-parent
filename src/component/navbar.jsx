import React from "react";
import './navbar.css'

const Navbar = () => {
    return <nav className="navbar">
        <div className="navbar-brand">
            <h4>Warteg Zaman Now</h4>
        </div>
        <ul className="navbar-link">
            <li className="list"><a href="" className="link">Home</a></li>
            <li className="list"><a href="" className="link">About</a></li>
            <li className="list"><a href="" className="link">Product</a></li>
        </ul>
    </nav>
}

export default Navbar;