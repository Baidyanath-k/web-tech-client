import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../context/AuthProvider/AuthProvider';
import './Register.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub } from "react-icons/fa";

const Register = () => {
    const {registerWithEmailAndPassword,signInWithGoogle,updateUserProfile} = useContext(AuthContext);
    const navigate=useNavigate();

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
            navigate('/');
            setError('');
            form.reset();
            handleProfile(name,photoURL)
            console.log(user);
        }).catch(error => {
            setError(error.message);
            setSuccess('');
            console.error(error)
        })


    }
    const [check,unCheck] = useState(false);
    const handleCheck = (event) => {
        unCheck(event.target.checked)
    }

    const handleWithGoogle=()=>{
        signInWithGoogle()
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{
            console.error(error);
        })
    }


    const handleProfile=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL
        }
        updateUserProfile(profile)
        .then(  ()=>{} )
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div className='main-regtister-container'>
            <div className="main-form">
                <Form className='w-50 py-5 m-auto' onSubmit={registerHandle}>
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
                        <Form.Check
                            onClick={handleCheck}
                            type="checkbox"
                            label={<>Accept<Link to = '/trems'>terms and condition</Link> </>}/>
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
            </div>

            <div className="other-form w-50 m-auto">
                <ButtonGroup vertical className=' py-5 w-100 text-center'>
                    <Button onClick={handleWithGoogle} className='mb-3'> <FaGoogle></FaGoogle> Google SignIn</Button>
                    <Button> <FaGithub></FaGithub>  GitHub SignIn</Button>
                </ButtonGroup>
            </div>

        </div>
    );
};

export default Register;