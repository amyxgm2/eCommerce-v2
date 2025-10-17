{/* comment */}

import React from 'react';
import './Navbar.css';
import ecommerce_logo from '../assets/ecommerce-logo.svg';

const Navbar = () => {
    return (
        <header>
            <nav>
                <img src={ecommerce_logo} alt="paper&pen Logo" className='logo' />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Products">Products</a></li>
                    <li><a href="/Contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar