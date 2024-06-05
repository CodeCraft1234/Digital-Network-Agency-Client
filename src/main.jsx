
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Service from "./Components/Services/Services";
import Home from "./Pages/Home/Home";
import Card from "./Pages/Card/Card";
import CardDetails from "./Pages/Card/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch('/cards.json')
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: "/card/:id",
        element: <CardDetails></CardDetails>,
        loader: () =>fetch('/cards.json')
    },
    {
      path: "/category/:category",
      element: <Card></Card>,
      loader: () =>fetch('/cards.json')
    }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);