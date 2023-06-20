import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { InventoryContext } from '../../context/InventoryContext';
import { useParams } from 'react-router-dom';
import ButtonComponent from '../../components/Button';

const Description = () => {
  const { products, setCart, cart } = useContext(InventoryContext);
  const currentProductId = parseInt(useParams().id);

  const [currProduct, setCurrProduct] = useState();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(cart.find((item) => item.id === currentProductId)?.quantity || 0);
  }, [currentProductId, cart]);

  useEffect(() => {
    setCurrProduct(products.find((item) => item.id === currentProductId));
  }, [currentProductId, products]);

  return (
    <>
      <Header />
      <div
        style={{
          padding: '1rem',
          display: 'flex',
        }}
      >
        {/* Image container */}
        <div
          style={{
            flex: 1,
          }}
        >
          <img
            src={currProduct?.image}
            alt={currProduct?.title}
            style={{
              width: '100%',
              objectFit: 'contain',
              height: '85vh',
            }}
          />
        </div>

        {/* Info container */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h3> Product Name:</h3>
            <span>{currProduct?.title}</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h3> Product Description:</h3>
            <span>{currProduct?.description}</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h3> Product Category:</h3>
            <span>{currProduct?.category}</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h3> Product Rating:</h3>
            <span>{currProduct?.rating}</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h3> Product Price:</h3>
            <span> ${currProduct?.price}</span>
          </div>

          <ButtonComponent
            label="Add to cart"
            callback={() => {
              setCart((prev) => {
                if (prev.find((item) => item.id === currProduct.id)) {
                  return prev.map((item) => {
                    if (item.id === currProduct.id) {
                      return {
                        ...item,
                        quantity: quantity + 1,
                      };
                    }
                    return item;
                  });
                } else {
                  return [...prev, currProduct];
                }
              });
            }}
          />
           <ButtonComponent
            label="Remove from cart"
            backgroundColor="red"
            callback={() => {
              if(quantity === 0) return;
              setCart((prev) => {
                if (prev.find((item) => item.id === currProduct.id)) {
                  return prev.map((item) => {
                    if (item.id === currProduct.id) {
                      return {
                        ...item,
                        quantity: quantity - 1,
                      };
                    }
                    return item;
                  });
                } else {
                  return [...prev, currProduct];
                }
              });
            }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h3> Current Product Quantity:</h3>
            <span> {quantity}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
