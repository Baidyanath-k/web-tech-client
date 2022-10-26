import React from 'react';
import {useContext} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../context/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut().then(() => {}).catch(error => {
            console.error(error)
        })
    }

    return (
        <Navbar collapseOnSelect expand="lg" className='main-navbar'>

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
                    <Nav>
                        {user
                            ?.email
                                ? <button onClick={handleLogout}>LogOut</button>
                                : 
                                <> 
                                    <Link className='login' to='/login'>LogIn</Link> 
                                    <Link className = 'register' to = '/register' > Register</Link>
                                </>
}

                    </Nav>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default Header;