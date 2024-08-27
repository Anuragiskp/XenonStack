import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './UserProfile.css'; 

function UserProfile() {
  const { email } = useParams();
  const [user, setUser] = useState(null);
  const URI = `http://localhost:5000/api/user/${email}`; 

  useEffect(() => {
    fetch(URI)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [email]);

  console.log(user);

  return (
    <div className='UserProfile'>
      <Header />
      <h1 className='userprofile-heading'>User Profile</h1>
      <div className='userprofile-content'>
        {user ? (
          <div className='userprofile-details'>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>First Name:</strong> {user.firstname}</p>
            <p><strong>Last Name:</strong> {user.lastname}</p>
            <p><strong>Number:</strong> {user.phone}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
