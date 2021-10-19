import React from 'react';
import './Footer.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black p-5 text-white'>
            <h3>Follow Us</h3>
            <i class="fab fa-facebook"></i> <i class="fab fa-facebook-messenger"></i>   <i class="fab fa-twitter"></i>
            <h4>
Fitness
Healthy Eating
Weight Loss
News</h4>
<br />
<h5>Verywell Fit's content is for informational and educational purposes only. Our website is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
TRUSTe
This website is certified by Health On the Net Foundation. Click to verify. <br />
Ⓒ 2021 About, Inc. (Dotdash) — All rights reserved</h5>
        

        </div>
    );
};

export default Footer;