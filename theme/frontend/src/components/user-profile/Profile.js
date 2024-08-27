import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import useLogout from '../../hooks/useLogout';

const Profile = ({user}) => {
  const navigate = useNavigate();
  const { loading, logout } = useLogout();
  
  return (
    <div>
        <Header />
        <div>
          <h1 className='profile-heading'>Welcome, {user.username}</h1>

          <div className='profile-options-container'>
            <Link to={`/profile/${user.email}/orders`} className='profile-options-link'>
              <div className='profile-option'>
                <h3>Your Orders</h3>
                <p className='profile-options-text'>View your orders</p>
                <p className='profile-options-text'>Track your orders</p>
                <p className='profile-options-text'>Replace or return an order</p>
              </div>
            </Link>

            <Link to={`/profile/${user.email}/security`} className='profile-options-link'>
              <div className='profile-option'>
                <h3>Login and Security</h3>
                <p className='profile-options-text'>Edit your personal details</p>
                <p className='profile-options-text'>Reset password</p>
                <p className='profile-options-text'>Read privacy policy</p>
              </div>
            </Link>

            <Link to={`/profile/${user.username}/address`} className='profile-options-link'>
              <div className='profile-option'>
                <h3>Manage Address</h3>
                <p className='profile-options-text'>Edit current address</p>
                <p className='profile-options-text'>Add another delivery address</p>
              </div>
            </Link>
          </div>  
          
          <div className='profile-options-container'>
            <button className='logout-button' onClick={logout}>
              <h3>Logout</h3>
              <p className='profile-options-text'>Sign out of your account</p>
            </button>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Profile
