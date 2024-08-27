import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Collapse, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCard.css'; 
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-classic-svg-icons';

const ProductCard = () => {

  const style={
    "text-decoration":"none",
    "color":"red"
  }

  return (
    <Container>
      <div className="sectionHeader">
        <h2>Find Your Dream Home</h2>
        <p>Browse our latest listings and discover your perfect rental</p>
      </div>
      <div className="homepage-row-container">
        <div className='homepage-image-cards'>
          <img className='homepage-cards-image' src='https://img.freepik.com/free-photo/view-modern-entryway-with-interior-decor_23-2150790908.jpg'></img>
          <div className='card-info'>
            {/* <button><FontAwesomeIcon icon="fa-regular fa-heart" /></button> */}
          </div>
        </div>
        <div className='homepage-image-cards'>
          <img className='homepage-cards-image' src='https://img.freepik.com/premium-photo/interior-luxury-apartment-design-floor-pillow-wall-decor-bedroom-vertical-mobile-wallpaper_795881-30010.jpg'></img>
        </div>
        <div className='homepage-image-cards'>
          <img className='homepage-cards-image' src='https://img.freepik.com/premium-photo/view-modern-living-design-apartment-interior-with-working-table-bookshelf-luxury-vertical-mobile-w_892776-28664.jpg'></img>
          <div className='card-info'>
            {/* <button><FontAwesomeIcon icon="fa-regular fa-heart" /></button> */}
          </div>
        </div>
        <div className='homepage-image-cards'>
          <img className='homepage-cards-image' src='https://img.freepik.com/free-photo/background-zoom-calls-with-cozy-chair_23-2149684492.jpg'></img>
          <div className='card-info'>
            {/* <button><FontAwesomeIcon icon="fa-regular fa-heart" /></button> */}
          </div>
        </div>
      </div>
      <div className='card-button'>
        <Button variant="outline-dark"><Link to={`/collections`} style={style}>Show more</Link></Button>
      </div>
    </Container>
  );
}

export default ProductCard;
