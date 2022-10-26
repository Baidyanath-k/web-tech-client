import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthProvider/AuthProvider';
import './Register.css'

const Register = () => {
    const {registerWithEmailAndPassword} = useContext(AuthContext);

    const [error,
        setError] = useState();
    const [success,
        setSuccess] = useState();
    const registerHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        registerWithEmailAndPassword(email, password).then(result => {
            const user = result.user;
            setSuccess('Success');
            setError('');
            form.reset();
            console.log(user);
        }).catch(error => {
            setError(error.message);
            setSuccess('');
            console.error(error)
        })

    }
    const [check,unCheck]=useState(false);
    const handleCheck=(event)=>{
        unCheck(event.target.checked)
    }

    return (
        <Form
            className='main-regtister-container w-50 py-5 m-auto'
            onSubmit={registerHandle}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your Name"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photoUrl' placeholder="Photo URL"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleCheck} type="checkbox" label={<>Accept <Link to='/trems'>terms and condition</Link> </>}/>
            </Form.Group>
            <Form.Text className="text-muted">
                <h2>{error}</h2>
                <h2>{success}</h2>
            </Form.Text>
            <Button variant="primary" type="submit" disabled={!check}>
                Submit
            </Button>
            <br/>
            <Form.Text className="text-muted">
                Already a member?
                <Link to='/login'>LogIn</Link>
            </Form.Text>
        </Form>

    );
};

export default Register;