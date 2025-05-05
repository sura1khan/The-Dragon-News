import React from 'react';
import {createBrowserRouter } from "react-router";
import Home from '../Layouts/Home';
import HomePage from '../Pages/HomePage';
import CategoryNews from '../Pages/CategoryNews';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthLayout from '../Layouts/AuthLayout';
import Forgot from '../Pages/Forgot';

  const router = createBrowserRouter([
    {
      path: "/",
     element:<Home></Home>,
     children:[
      {
        path:"",
        element:<HomePage></HomePage>,
      },
      {
        path:"/category/:id",
        element:<CategoryNews></CategoryNews>,
      loader:()=>fetch("/news.json"),
      },
     ],
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children:[
      {
        path:  "/auth/login",
        element:<Login></Login>,
      },
      {
        path:  "/auth/register",
        element:<Register></Register>,
      },
      {
        path:  "/auth/forgot",
        element:<Forgot></Forgot>,
      },
    ],
    },
    {
      path: "/news",
      element: <h2>News Layout</h2>,
    },
    {
      path: "/*",
      element: <h2>404 ErrorPage</h2>,
    },
  ]);
export default router;