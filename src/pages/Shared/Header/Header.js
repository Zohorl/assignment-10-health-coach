import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/logo1.png';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {

    const handleSignOut = () => {
        signOut(auth);
    }

    const [user] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={40} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className="me-3 fs-5" to="/services">Services</CustomLink>
                        <CustomLink className="me-3 fs-5" to="/blogs">Blogs</CustomLink>
                        <CustomLink className="me-3 fs-5" to="/about">About</CustomLink>
                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                :
                                <CustomLink className="me-3 fs-5" to="/login">Login</CustomLink>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;