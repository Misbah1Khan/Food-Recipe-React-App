import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='Header'>
            <h2>Food Recipe App</h2>
            <div className='nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header