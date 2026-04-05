import React from 'react'
import App from "./App.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import Contact from "./Contact.jsx";
import { createBrowserRouter } from "react-router-dom";
import Carts from './Carts.jsx';
import Signin from './Signin.jsx';
import Profilee from './Profilee.jsx';
import Register from './Register.jsx'


    
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
  