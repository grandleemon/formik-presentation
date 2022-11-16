import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import SimpleReactForm from "./pages/SimpleReactForm";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
              path: '/',
              element: <App />
            },
            {
                path: 'simple-react-form',
                element: <SimpleReactForm />
            }
        ]
    },
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
