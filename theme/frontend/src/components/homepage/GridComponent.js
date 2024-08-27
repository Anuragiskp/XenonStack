import React from 'react';
import './GridStyle.css';
import { Link } from 'react-router-dom';


const GridComponent = () => {
  return (
    <div className='grid-component'>
      <h1>Discover Your New Place</h1>
      <div className="grid-container">
        <div className="grid-left"><Link to={`/collections`} className='grid-link'></Link></div>
        <div className='grid-right'>
          <div className='grid-right-top'>
            <div className='grid-right-top-item-left'><Link to={`/collections`} className='grid-link'></Link></div>
            <div className='grid-right-top-item-right' id='temp'><Link to={`/collections`} className='grid-link'></Link></div>
          </div>
          <div className='grid-right-bottom'><Link to={`/collections`} className='grid-link'></Link></div>
        </div>
      </div>
    </div>
    
  );
};

export default GridComponent;
