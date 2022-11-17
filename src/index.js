import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import SimpleReactForm from "./pages/SimpleReactForm";
import App from "./App";
import FormikSimpleExample from "./pages/FormikSimpleExample";
import FormikYupAdvancedExample from "./pages/FormikYupAdvancedExample";

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
            },
            {
                path: 'formik-simple-example',
                element: <FormikSimpleExample />
            },
            {
                path: 'formik-advanced-example',
                element: <FormikYupAdvancedExample />
            }
        ]
    },
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
