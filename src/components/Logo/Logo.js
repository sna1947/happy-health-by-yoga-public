import React from 'react';
import logo from '../../image/logo.png'
import './Logo.css'

const Logo = () => {
    return (
        <div >
            <img className='logo' src={logo} alt="" />
        </div>
    );
};

export default Logo;