
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
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import DashboardRoot from "./Dashboard/DashboardRoot";
import TodayOrders from "./Dashboard/Routes/TodayOrders";
import TotalCustomers from "./Dashboard/Routes/TotalCustomers";
import OrderDetailsFinal from "./Dashboard/Routes/OrderDetailsFinal";

import AddLinks from "./Dashboard/AddLinks";
import Settings from "./Dashboard/Settings";
import AdminHome from "./Dashboard/AdminHome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Security/AuthProvider";
import Login from "./Security/Login";
import MyCart from "./Pages/MyCart/MyCart";
import OrderSuccess from "./Pages/OrderSuccess/OrderSuccess";


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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path:'/order-success',
        element: <OrderSuccess></OrderSuccess>
      },
      {
        path:'/myCart',
        element:<MyCart></MyCart>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
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
    },
    {
      path:'dashboard',
      element:<DashboardRoot></DashboardRoot>,
      children:[
        {
          path:'/dashboard/admin/adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'/dashboard/admin/todayOrders',
          element:<TodayOrders></TodayOrders>
        },
        {
          path:'/dashboard/admin/totalCustomers',
          element:<TotalCustomers></TotalCustomers>
        },
        {
          path:'/dashboard/admin/orders/:status',
          element:<OrderDetailsFinal></OrderDetailsFinal>
        },
       
        {
          path: "/dashboard/admin/addLinks",
          element: <AddLinks />,
        },
        {
          path: "/dashboard/admin/settings",
          element: <Settings />,
        },
      ]
    }
    ]
  },
  
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider>
         <AuthProvider>
               <RouterProvider router={router} />
          </AuthProvider> 
    </HelmetProvider> 
    </QueryClientProvider>
  </React.StrictMode>
);