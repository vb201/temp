import './App.css';

import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from './views/Dashboard';
import Cart from './views/Cart';
import Description from './views/Description';
import Product from './views/Product';
import { InventoryContext } from './context/InventoryContext';

import  ProductData  from './data/ProductData.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: '/:id',
    element: <Description />,
  },
  {
    path: '/add',
    element: <Product />
  },
  {
    path: '/*',
    element: <Dashboard />
  }

]);


function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    // fetch from json file to get products
    setProducts(ProductData)
  }, [])

  return (
    <>
      <InventoryContext.Provider value={{ products, setProducts, cart, setCart }}>
        <RouterProvider router={router} />
      </InventoryContext.Provider>
    </>
  );
}

export default App;
