import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  className='main-navbar'>
            
                
                <Navbar.Brand>
                    <Link to='/' className='logo'>WEB-TECH</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav className='nav_link nav-link'>
                            <Link to='/'>Home</Link>
                        </Nav>
                        <Nav className='nav_link nav-link'>
                            <Link to='/courses'>Courses</Link>
                        </Nav>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            
        </Navbar>
    );
};

export default Header;