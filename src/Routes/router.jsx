import React from 'react';
import {createBrowserRouter } from "react-router";
import Home from '../Layouts/Home';
import HomePage from '../Pages/HomePage';
import CategoryNews from '../Pages/CategoryNews';

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
      },
     ],
    },
    {
      path: "/auth",
      element: <h2>Authintication Layout</h2>,
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