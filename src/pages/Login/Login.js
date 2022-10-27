import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {loginWithEmailAndPassword,signInWithGoogle, githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location=useLocation()
    const [error,
        setError] = useState('');
    const [success,
        setSuccess] = useState('');
        const from=location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginWithEmailAndPassword(email, password).then(result => {
            const user = result.user;
            setSuccess('Success');
            setError('');
            
            navigate(from,{replace:true})
            console.log(user)
        }).catch(error => {
            console.error(error);
            setSuccess('');
            setError(error.message);
        })

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
    const handleGithub=()=>{
        githubLogin()
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div className="login-main-container">
            <div className="login-form">
                <Form className='w-50 m-auto py-5' onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Text className="text-muted">
                        <h2>{error}</h2>
                        <h2>{success}</h2>
                    </Form.Text>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br/>
                    <Form.Text className="text-muted">
                        Not a member yet?<Link to='/register'>Register</Link>
                    </Form.Text>
                </Form>
            </div>
            <div className="social w-50 m-auto">
            <ButtonGroup vertical className=' py-5 w-100 text-center'>
                    <Button onClick={handleWithGoogle} className='mb-3'> <FaGoogle></FaGoogle> Google Login</Button>
                    <Button onClick={handleGithub}> <FaGithub></FaGithub>  GitHub Login</Button>
                </ButtonGroup>
            </div>

        </div>

    );
};

export default Login;