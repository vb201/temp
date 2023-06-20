import React, { useContext } from 'react';
import { InventoryContext } from '../../context/InventoryContext';
import Product from './components/Products';
import Header from '../../components/Header';

const Dashboard = () => {
  const { products } = useContext(InventoryContext);
  return (
    <>
      {/* Make a grid view */}
    <Header />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '1rem',
          padding: '1rem',
        }}
      >
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
