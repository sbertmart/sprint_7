import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from "./components/Inicio.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./components/App.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/pressupost",
    element: <App />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
