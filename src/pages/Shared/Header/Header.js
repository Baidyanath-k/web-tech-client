import {useContext} from 'react';
import {Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../context/AuthProvider/AuthProvider';
import './Header.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
                        <Link to='/profile'>
                            {['bottom',].map((placement) => ( <OverlayTrigger
                                key={placement} 
                                 placement={placement}
                                overlay={ <Tooltip id={`tooltip-${placement}`}> 
                                    {
                                        user?.displayName
                                    }
                                </Tooltip> 
                            } 
                            >
                               <img
                            className='rounded-circle mx-3'
                            src={user
                            ?.photoURL}
                            style={{
                            width: '40px',
                            height: '40px'
                        }}
                            alt=""/>
                               </OverlayTrigger> 
                               ))}
                            </Link>

                    </Nav>
                    <Nav>
                        {user
                            ?.email
                                ? <Button onClick={handleLogout} variant="info">LogOut</Button>
                                : <> <Link className='login' to='/login'>LogIn</Link> < Link className = 'register' to = '/register' > Register </Link>
                                </>
}

                    </Nav>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default Header;