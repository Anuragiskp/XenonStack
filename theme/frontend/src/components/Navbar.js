import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function DropdownNav({handleSearch, isSearching}) {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState("");
  const [ItemsData, setItemsData] = React.useState([]);

  const URI = "https://xenonstack-q6kv.onrender.com/property/data"

  // FETCHING BOOKS COLLECTION 

  React.useEffect(() =>{
    fetch(URI)
    .then(res => res.json())
    .then(data =>{
      setItemsData(data);
    })
  }, [])

  React.useEffect(() =>{
    const saved = localStorage.getItem("site-user");
    const initialValue = JSON.parse(saved);
    
    if(!saved)
    {
      setLoggedIn(false);
    }
    else{
      setUserEmail(initialValue.email);
      setLoggedIn(true);
    }
  }, [])

  const getUniqueCategories = (items) => {
    const categories = items.map(item => item);
    return [...new Set(categories)];
  };

  const categories = getUniqueCategories(ItemsData);

  const displayCategories = categories.map(category =>{
    return <NavDropdown.Item href={`/collections/${category}`}>{category}</NavDropdown.Item>
  })

  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="/" id="logo-ilam">Theme</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="navbar-left">

            <Nav.Link href="/" id="navbar-link">Home</Nav.Link>

            <NavDropdown title="Collections" id="navbar-link">
              
              {displayCategories}

              <NavDropdown.Divider />
              <NavDropdown.Item href="/collections">All Collections</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact-us" id="navbar-link">Contact us</Nav.Link>
          </Nav>
          
          <Nav className="me-auto" id="navbar-right">
          <hr id='dividing-line'></hr>
            <Nav.Link onClick={handleSearch} id="navbar-link">{!isSearching ? "Search": "Close"}</Nav.Link>

            {loggedIn? <Nav.Link href={`/profile/${userEmail}`} id="navbar-link">Profile</Nav.Link> : <Nav.Link href="/login" id="navbar-link">Login</Nav.Link>}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DropdownNav;