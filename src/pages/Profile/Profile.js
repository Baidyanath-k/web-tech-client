import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const Profile = () => {
    const {user}= useContext(AuthContext)
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email"/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Name</Form.Label>
                <Form.Control defaultValue={user?.displayName} type="text" name="name" placeholder="Name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Name</Form.Label>
                <Form.Control defaultValue={user?.photoURL} type="text" name="photoURL" placeholder="URL"/>
            </Form.Group>
            
            <Button variant="" type="submit">
                <Link to='/'>Home</Link>
            </Button>
        </Form>
    );
};

export default Profile;