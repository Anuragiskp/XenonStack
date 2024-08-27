import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer.js';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Collections() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const [show, setShow] = useState(false);
  const [itemsData, setItemsData] = useState([]);
  const URI = `https://xenonstack-q6kv.onrender.com/property/data`; 

  // FETCHING PROPERTY DATA
  useEffect(() => {
    fetch(URI)
      .then(res => res.json())
      .then(data => {
        setItemsData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // ITEM DISPLAY LOGIC
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = itemsData.slice(startIndex, endIndex);

  const displayItems = currentItems.map((item, index) => (
    <div key={index} className="collections-item">
      <Link to={`/collections/${item._id}`} className='collections-card-link'>
        <div className='collections-card-container'>
          {/* Placeholder image handling */}
          <img src={item.coverImageUrl ? item.coverImageUrl[0] : 'https://img.freepik.com/free-photo/ai-generated-modern-styled-entryway_23-2150692307.jpg?size=626&ext=jpg&uid=R111261606&ga=GA1.1.753172369.1718865980&semt=ais_hybrid'} className='collections-card-image' alt={item.Suburb} />
          <div className='collections-card-info'>
            <p>{item.Suburb}</p>
            <p>{item.Rooms} Rooms | {item.Bathroom} Bathroom</p>
            <p>₹ {item.Price}</p>
          </div>
        </div>
      </Link>
    </div>
  ));

  // PAGINATION LOGIC
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(itemsData.length / itemsPerPage);

  const pagination = Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => handleClick(index + 1)}
      disabled={currentPage === index + 1}
      className='pagination-button'
    >
      {index + 1}
    </button>
  ));

  // ALWAYS SCROLL TO TOP OF THE PAGE
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className='Collections'>
      <Header />
      <div className='collections-content'>
        <Button variant="primary" onClick={() => setShow(true)}>
          Filter
        </Button>
        <h1 className='collections-main-heading'>Browse our Collection</h1>

        {/* OffCanvas Filter (Placeholder) */}
        <Offcanvas show={show} onHide={() => setShow(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filter Options</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Placeholder for filter content */}
            <p>Filter content goes here.</p>
          </Offcanvas.Body>
        </Offcanvas>

        <div className='collections-main-content'>
          <div className="collections-item-container">
            {displayItems}
          </div>
        </div>

        <div className="collections-pagination">
          {pagination}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Collections;
