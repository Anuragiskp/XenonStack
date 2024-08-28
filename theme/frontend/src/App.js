import React from 'react';
import { useEffect } from 'react';
import Homepage from './components/homepage/Homepage'
import Contact from './components/contact-us/Contact';
import Collections from './components/shop/Collections';
import ItemDetails from './components/shop/ItemDetails';
import Login from './components/login-register/Login';
import Signup from './components/login-register/Register';
import Profile from './components/user-profile/Profile';
import UserAddress from './components/user-profile/UserAddress';
import UserOrders from './components/user-profile/UserOrders'
import LoginSecurity from './components/user-profile/LoginSecurity';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast'


function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState({});
  // const [ItemsData, setItemsData] = React.useState([]);

  // FETCHING BOOKS COLLECTION
  // const URI = "http://localhost:5000/books/data"

  // React.useEffect(() =>{
  //   fetch(URI)
  //   .then(res => res.json())
  //   .then(data =>{
  //     setItemsData(data);
  //   })
  // }, [])
  

  // LOGIC FOR GETTING LOGGED IN USER

  useEffect(() =>{
    const saved = localStorage.getItem("site-user");
    const initialValue = JSON.parse(saved);
    
    if(!saved)
    {
      setLoggedIn(false);
    }
    else{
      setUserDetails(initialValue);
      setLoggedIn(true);
    }
  }, [])

  // GETTING ROUTES FOR EACH ITEM

  const getCollectionsRoutes = ItemsData.map((item) => (
    <Route
      key={item.id}
      path={`/collections/${item._id}`}
      element={<ItemDetails itemData={item} user={userDetails}/>}
    />
  ))

  // GETTING CATEGORIES FOR COLLECTIONS PAGE

  // const getUniqueCategories = (items) => {
  //   const categories = items.map(item => item.category.mainCategory);
  //   return [...new Set(categories)];
  // };
  // const categories = getUniqueCategories(ItemsData);
  // console.log(categories);

  // const getCategoriesRoutes = categories.map((category) =>{
  //   return <Route path={`/collections/${category}`} element={<Collections category={category}/>}/>
  // })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact-us" element = {<Contact />} />
          <Route path="/collections" element = {<Collections/>} />
          <Route path='/login' element = {<Login />}/>
          <Route path='/signup' element = {<Signup />}/>

          <Route path={`/profile/${userDetails.email}`} element = {<Profile user = {userDetails}/>} />

          {getCollectionsRoutes}
          {getCategoriesRoutes}

          {/* ROUTES FOR USER PROFILE PAGE */}
          <Route path={`/profile/${userDetails.email}/orders`} element = {<UserOrders user = {userDetails}/>}/>
          <Route path={`/profile/${userDetails.email}/security`} element = {<LoginSecurity user = {userDetails}/>}/>
          <Route path={`/profile/${userDetails.email}/address`} element = {<UserAddress user = {userDetails}/>}/>
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
