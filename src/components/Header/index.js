import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../Button';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '1rem',
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#000',
        }}
      >
        <h1>Inventory Mangement</h1>
      </Link>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '30%',
        }}
      >
        <ButtonComponent
          label="Add Product"
          linkTo="add"
        />
        <ButtonComponent
          label="Cart"
          linkTo="/cart"
        />
      </div>
    </div>
  );
};

export default Header;
