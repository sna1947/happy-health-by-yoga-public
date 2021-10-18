import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
             <Navbar className='nav-br ' bg="dark" variant="dark">
                <Container>
                    <Nav className="ms-auto"> 
                    <Nav.Link as={Link} to="/home">HOME</Nav.Link> 
                    <Nav.Link as={Link} to="/services">SERVICES</Nav.Link> 
                    <Nav.Link as={Link} to="/healthyeating">HEALTHY EATING</Nav.Link> 
                    <Nav.Link as={Link} to="/aboutus">ABOUT US</Nav.Link> 
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;