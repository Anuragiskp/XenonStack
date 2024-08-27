import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css'; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin();
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(email, password);
        console.log(success);

        if (success) {
            navigate('/'); 
        }
    }

    return (
        <Container className="login-container">
            <Row className="justify-content-md-center">
                <Col md={12} className="login-form">
                    <h1 className="text-center">Login <span className="text-primary"> Theme</span></h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Link to='/signup' className="signup-link">
                            Don't have an account? Signup
                        </Link>

                        <Button variant="primary" type="submit" className="btn-block mt-3" disabled={loading}>
                            {loading ? 'Loading...' : 'Login'}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
