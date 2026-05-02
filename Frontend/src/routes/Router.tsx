import React from 'react'
import App from "./App";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import { createBrowserRouter } from "react-router-dom";
import Carts from './Carts';
import Signin from './Signin';
import Profilee from './Profilee';
import Register from './Register'


    
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/product", element: <Product />},
      {path: "/contact", element: <Contact />},
      {path: "/add-to-cart", element: <Carts />},
    ],
  },
  {path: "/signIn", element: <Signin />},
  {path: "/register", element: <Register />},
  {path: "/profile", element: <Profilee />}
])
export default router;
  

