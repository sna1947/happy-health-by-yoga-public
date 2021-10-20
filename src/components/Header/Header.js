import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import Banner from '../Banner/Banner';
import Logo from '../Logo/Logo';

const Header = () => {
//    const {user, logOut} = useFirebase();
   const {user, logOut} = useAuth();

    return (
        <div>
            <Navbar fixed="top" className='nav-br ' bg="dark" variant="dark">
                <Container>
                    <Logo className='img-fluid'></Logo>
                    <h1 className='text-info m-2'>Happy Health by Yoga</h1>
                    <Nav className="ms-auto"> 
                    <Nav.Link as={Link} to="/home">HOME</Nav.Link> 
                    {/* <Nav.Link as={Link} to="/yogaall">yoga all</Nav.Link>  */}
                    <Nav.Link as={Link} to="/services">SERVICES</Nav.Link> 
                    <Nav.Link as={Link} to="/healthyeating">HEALTHY EATING</Nav.Link> 
                    <Nav.Link as={Link} to="/aboutus">ABOUT US</Nav.Link> 
                    {/* <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>  */}
                    {/* <Nav.Link as={Link} to="/Register">REGISTER</Nav.Link> */}

                    {
                            user.email && <span style={{ color: 'red' }}>hello: {user.displayName} </span>
                        }
                        {
                            user.email ? <Nav.Link onClick={logOut} to="/login">LOG OUT</Nav.Link> :<Nav.Link as={Link} to="/login">LOGIN</Nav.Link> 
                        } 
                   {/* {user?.email && <button onClick={logOut}>Log Out</button>} */}
                    </Nav>
                </Container>
            </Navbar>
            {/* <div><Banner></Banner></div> */}
        </div>
    );
};

export default Header;