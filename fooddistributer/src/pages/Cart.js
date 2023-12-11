import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import axios from 'axios';

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePurchase = async () => {
    try {
      const response = await axios.post('http://localhost:4990/newUser/purchase', {
        phoneNumber: phoneNumber,
        purchase: {
          totalPrice: cartTotal,
          totalQuantity: totalItems,
          items: items, // Include the items in the purchase
        },
      });

      if (response.status === 200) {
        console.log('Purchase successful!');
        setPurchaseSuccess(true);
        // Optionally, you can reset or clear the cart after a successful purchase
        // emptyCart();
      }
    } catch (error) {
      console.error('Error making purchase:', error);
    }
  };

  if (isEmpty) return <h1 className='text-center'>Your cart is Empty</h1>;

  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <h5>Cart ({totalUniqueItems}) totalItems:({totalItems})</h5>
          <table className='table table-light table-hover m-0'>
            <tbody>
              {items &&
                items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.img} style={{ height: '6rem' }} alt={item.title} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>Quantity ({item.quantity})</td>
                      <td>
                        <button
                          className='btn btn-info ms-2'
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <button
                          className='btn btn-info ms-2'
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                        <button className='btn btn-info ms-2' onClick={() => removeItem(item.id)}>
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className='col-auto ms-auto'>
          <h2>Total Price: {cartTotal}</h2>
        </div>
        <div className='col-auto'>
          <div className='mb-2'>
            <label className='form-label'>Enter Phone Number:</label>
            <input
              type='text'
              className='form-control'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button className='btn btn-danger m-2' onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <button className='btn btn-primary' onClick={handlePurchase}>
            Buy Now
          </button>
        </div>
      </div>
      {purchaseSuccess && <p>Purchase successful!</p>}
    </section>
  );
};

export default Cart;
