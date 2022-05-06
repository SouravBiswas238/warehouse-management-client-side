import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../img/logo.png'

import './Header.css'

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const handelSignOut = () => {
        signOut(auth);
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className='my-logo'> <img src={logo} alt="" /> </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">about</Nav.Link>


                    </Nav>
                    <Nav>
                        <Nav.Item>
                            {
                                user ? <Nav.Link onClick={handelSignOut} eventKey="link-1">Sign Out</Nav.Link> : <Nav.Link eventKey=" link-1" as={Link} to="/login">Log In</Nav.Link>
                            }

                        </Nav.Item>
                        <Nav.Link as={Link} to="/">
                            Manage-Item
                        </Nav.Link>
                        <Nav.Link as={Link} to="/">
                            Add-Item
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;