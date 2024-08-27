import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Tabs from './Tabs'

function ItemDetails({itemData, user}) {
    
    const [quantity, setQuantity] = React.useState(1);
    const [tokenPresent, setTokenPresent] = React.useState(false);

    const handleAddition = () =>{
        setQuantity(quantity + 1);
    } 
    const handleSubtraction = () =>{
        if(quantity > 1)
        {
            setQuantity(quantity - 1);
        }
    }

    // const handleCart = async (userId, bookId, quantity) => {
    //     try {
    //         const response = await fetch('http://localhost:5000/books/add-to-cart', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ userId, bookId, quantity }),
    //         });
    
    //         const data = await response.json();
    //         if (response.ok) {
    //             console.log('Book added to cart:', data.cart);
    //         } else {
    //             console.error('Failed to add book to cart:', data.message);
    //         }
    //     } catch (error) {
    //         console.error('Error adding book to cart:', error.message);
    //     }
    // };

    const handleCart = (userId, bookId, quantity) =>{
        const tokenKey = 'userBooksToken';

   
    let tokenData = localStorage.getItem(tokenKey);
    let parsedData = tokenData ? JSON.parse(tokenData) : [];

    const newEntry = {
        userId: userId,
        bookId: bookId,
        quantity: quantity
    };

    parsedData.push(newEntry);
    console.log(parsedData);

    let updatedTokenData = JSON.stringify(parsedData);

    localStorage.setItem(tokenKey, updatedTokenData);
    console.log("token saved");
    }
    

  return (
    <div>
        <Header />
        <div className='item-data'>
            <div className='item-content-container'>
                <div className='item-content-left'>
                    <img src={itemData.coverImageUrl} className='item-image'/>
                </div>
                <div className='item-content-right'>
                    <h1 className="item-heading">{itemData.title} </h1>
                    <p className='item-content-text'>₹ {itemData.price} | {itemData.category.mainCategory} | {itemData.author} | {itemData.publication}</p>
                    <p className='item-content-text'>{itemData.description}</p>
                    {/* <p className='item-content-text'>{itemData.category}</p> */}

                    <div className='item-quantity-selector'>
                        <div className='item-quantity-changer'>
                            <div className='item-quantity-box'>{quantity}</div>
                            <div className='item-quantity-buttons'>
                                <button onClick={handleAddition} id='quantity-button'>+</button>
                                <button onClick={handleSubtraction} id='quantity-button'>-</button>
                            </div>
                        </div>
                        <button className='pagination-button' id="add-to-cart-button" onClick={() =>{ handleCart(user._id, itemData._id, quantity)}}>Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="item-more-info">
                <Tabs details = {itemData}/>
            </div>

        </div>
        
        <Footer />
    </div>
  )
}

export default ItemDetails