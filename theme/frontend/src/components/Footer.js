import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='ilam-footer'>
		<div className='footer-top'>
			<div className='footer-top-section'>
				<h3>GET TO KNOW US</h3>
				<Link to='/contact-us'>Contact us</Link>
				<Link to='/faq'>FAQs</Link>
				<Link to='terms-conditions'>Terms & Conditions</Link>
			</div>
			
			<div className='footer-top-section'>
				<h3>CUSTOMER SERVICE</h3>
				<p>Timings: 10 AM - 7 PM (Mon - Sat)
					<br></br>
					Whatsapp : +91 XXXXXXXXXX
					<br></br>
					Instagram: <a href='#'>Profile</a>
				</p>
			</div>
		</div>
	</div>
  )
}

export default Footer