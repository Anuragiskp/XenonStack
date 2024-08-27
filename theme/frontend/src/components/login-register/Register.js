import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'; 
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const [inputs, setInputs] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const {loading, signup} = useSignup(); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await signup(inputs);
        
        if(success)
        {
            navigate('/login');
        }
    };

    return (
        <Container className="signup-container">
            <Row className="justify-content-md-center">
                <Col md={12}>
                    <div className="signup-form">
                        <h1 className="text-center">
                            Sign Up
                            <span className="text-primary"> Theme</span>
                        </h1>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Email"
                                    value={inputs.email}
                                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Username"
                                    value={inputs.username}
                                    onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    value={inputs.password}
                                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm password"
                                    value={inputs.confirmPassword}
                                    onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                                />
                            </Form.Group>

                            <Link to="/login" className="signup-link">
                                Already have an account?
                            </Link>

                            <Button variant="primary" type="submit" className="btn-block mt-3" disabled={loading}>
                                {loading ? 'Loading...' : 'Signup'}
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
