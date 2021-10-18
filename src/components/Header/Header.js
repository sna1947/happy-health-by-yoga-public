import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" className='nav-br ' bg="dark" variant="dark">
                <Container>
                    <Logo className='img-fluid'></Logo>
                    <Nav className="ms-auto"> 
                    <Nav.Link as={Link} to="/home">HOME</Nav.Link> 
                    {/* <Nav.Link as={Link} to="/yogaall">yoga all</Nav.Link>  */}
                    <Nav.Link as={Link} to="/services">SERVICES</Nav.Link> 
                    <Nav.Link as={Link} to="/healthyeating">HEALTHY EATING</Nav.Link> 
                    <Nav.Link as={Link} to="/aboutus">ABOUT US</Nav.Link> 
                    <Nav.Link as={Link} to="/login">LOGIN</Nav.Link> 
                    <Nav.Link as={Link} to="/Register">REGISTER</Nav.Link> 
                    </Nav>
                </Container>
            </Navbar>
            <div><Banner></Banner></div>
        </div>
    );
};

export default Header;