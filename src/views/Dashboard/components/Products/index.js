import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <>
    <div
      style={{
          border: '1px solid black',
          padding: '1rem',
          background: 'white',
          borderRadius: '5px',
          textAlign: 'center',
        }}
        >
      <h2> {product.title} </h2>

      <Link to={`/${product.id}`}>
        <div
          style={{
              height: '0px',
              paddingTop: '100%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(${product.image})`,
            }}
        />
      </Link>
      {
        // console.log(product.image)
      }
        <h3> Category: {product.category} </h3>
        <h3> Price: ${product.price} </h3>
        <h3> Rating: {product.rating}</h3>
    </div>
    </>
  );
};

export default Product;
