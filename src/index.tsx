import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home, Bateri, CodigoQR,FormInt, Small, Csgo,Todolist,CssSmallProjects} from './App';


import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Project/Bateri",
    element: <Bateri/>,
  },
  {
    path: "/Project/CodigoQR",
    element: <CodigoQR/>,
  },
  {
    path: "/Project/FormInt",
    element: <FormInt/>,
  },
  {
    path: "/Project/Small",
    element: <Small/>,
  },
  {
    path: "/Project/Csgo",
    element: <Csgo/>,
  },
  {
    path: "/Project/Todolist",
    element: <Todolist/>,
  },
  {
    path: "/Project/CssSmallProjects",
    element: <CssSmallProjects/>,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
