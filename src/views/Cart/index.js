import React, { useContext } from 'react';
import Header from '../../components/Header';
import { InventoryContext } from '../../context/InventoryContext';

const Cart = () => {
  const { cart } = useContext(InventoryContext);

  console.log(cart);
  return (
    <>
      <Header />

      {cart.map((item, i) => (
        <div key={i} 
          style={{
            padding: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #ccc',
          }}
        >
          <div>

          <h1>Product {i + 1}</h1>
          <h3>Id: {item.id}</h3>
          <h3>Product: {item.title}</h3>
          <h3>Current quantity: {item.quantity}</h3>
          <h3>Price: ${item.price}</h3>
          </div>

          <div>
            <img src={item.image} alt={item.title} style={{width: '150px'}} />
          </div>
        </div>
      ))}

      <div style={{padding: '2rem'}}>
        <h1>Total Price: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h1>
      </div>
    </>
  );
};

export default Cart;
