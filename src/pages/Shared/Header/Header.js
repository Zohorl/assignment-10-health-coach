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
                        {/* <Nav.Link href='home#services'>Services</Nav.Link> */}
                        {/* <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link> */}
                        <CustomLink className="me-3 fs-5" to="/blogs">Blogs</CustomLink>
                    </Nav>
                    <Nav>
                        {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}

                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;