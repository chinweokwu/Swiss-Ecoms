import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider, 
  Outlet,
 } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Category from './Components/Category/Category';
import Featured from './Components/Featured/Featured';
import Trending from './Components/Trending/Trending';

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products/:id',
          element: <Products />
        },
        { 
          path: '/product/:id',
          element: <Product />
        },
        {
          path: '/category',
          element: <Category />,
        },
        {
          path: '/featured',
          element: <Featured />,
        },
        {
          path: '/trending',
          element: <Trending />,
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
