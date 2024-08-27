import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Container } from '@mui/material';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div className="contact-page">
        <Header />
        <div className='contact-links'>
            <div className='contact-link-container'>
                <h1 className='icon-map' id='contact-icon'></h1>
                <h1 className='contact-heading'>Visit Us</h1>
                <p className='contact-text'>lorem ipsum dolor sit amet</p>
            </div>

            <div className='contact-link-container'>
                <h1 className='icon-phone' id='contact-icon'></h1>
                <h1 className='contact-heading'>Give us a Call</h1>
                <p className='contact-text'>Office: +91XXXXXXXXXX</p>
            </div>

            <div className='contact-link-container'>
            <h1 className='icon-web' id='contact-icon'></h1>
                <h1 className='contact-heading' >Connect Online</h1>
                <p className='contact-text'>email: example@gmail.com</p>
            </div>
        </div>
        
        <div className='dividing-line-container'><hr id="dividing-line"></hr></div>
        

        <Container className='contact-form'>
            <div className='contact-form-text'>
                <h1 className='contact-form-heading'>We would love to hear from you!</h1>
                <p className='contact-text'>If you have any questions, comments or concerns regarding our products, please don’t hesitate to get in touch with us.</p>
            </div>

            <Form className='review-form'>
                <div className='review-form-left'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>NAME</Form.Label>
                        <Form.Control type="text" />
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control type="email" />
                        <Form.Label>PHONE NUMBER</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                </div>
                <div className='review-form-right'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>REVIEW</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button as="input" type="submit" value="Submit" className='submit-button'/>
                </div>
                
            </Form>
            
        </Container>
        <Footer />
    </div>
  )
}

export default Contact