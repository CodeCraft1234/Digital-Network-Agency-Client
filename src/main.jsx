
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
import Domain from "./Components/Domain";
import Cart from "./Pages/Card/Cart";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Checkout from "./Components/Checkout/Checkout";
import OrderDetails from "./Dashboard/Routes/OrderDetails";
import AllOrders from "./Dashboard/Routes/AllOrders";
import OurTeam from "./Dashboard/OurTeam";
import TeamMemberRoute from "./Pages/TeamMemberRoute";
import AddServices from "./Components/Services/AddServices";
import PrivacyPolicy from "./Pages/PrivachyPolichy";
import OurOtherVentures from "./Dashboard/OurOtherVentures";
import OurWorks from "./Dashboard/OurWorks";
import OurPaymentLogo from "./Dashboard/OurPaymentLogo";
import WebDevelopmentDetails from "./Pages/Card/WebDevelopmentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/about-us",
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
        path: "/contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "/domain",
        element: <Domain></Domain>,
      },
      {
        path: "/card/:id",
        element: <CardDetails></CardDetails>,
      },
    {
      path: "/myCart",
      element: <Cart></Cart>
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy></PrivacyPolicy>
    },
    {
      path:'/my-orders',
      element:<MyOrders></MyOrders>
    },
    {
      path:'/team-member',
      element:<TeamMemberRoute></TeamMemberRoute>
    },
    {
      path:'/checkout/:title/:price',
      element:<Checkout></Checkout>
    },
    {
      path:'/order-success',
      element: <OrderSuccess></OrderSuccess>
    },
    {
      path:'/order-details/:orderId',
      element: <OrderDetails></OrderDetails>
    },
    {
      path: "/service/:category",
      element: <Card></Card>,
    },
    {
      path: "/web-design/:id",
      element: <WebDevelopmentDetails></WebDevelopmentDetails>,
    },
    {
      path:'dashboard',
      element:<DashboardRoot></DashboardRoot>,
      children:[
        {
          path:'/dashboard',
          element:<AdminHome></AdminHome>
        },
        {
          path:'/dashboard/todayOrders',
          element:<TodayOrders></TodayOrders>
        },
        {
          path: "/dashboard/services",
          element: <AddServices></AddServices>,
        },
        {
          path: "/dashboard/ventures",
          element: <OurOtherVentures></OurOtherVentures>
        },
        {
          path: "/dashboard/paymentLogo",
          element: <OurPaymentLogo></OurPaymentLogo>
        },
        {
          path: "/dashboard/works",
          element: <OurWorks></OurWorks>
        },
        {
          path:'/dashboard/totalCustomers',
          element:<TotalCustomers></TotalCustomers>
        },
        {
          path:'/dashboard/allOrders',
          element:<AllOrders></AllOrders>
        },
        
        {
          path:'/dashboard/orders/:status',
          element:<OrderDetailsFinal></OrderDetailsFinal>
        },
       
        {
          path: "/dashboard/addLinks",
          element: <AddLinks />,
        },
        {
          path: "/dashboard/settings",
          element: <Settings />,
        },
        {
          path: "/dashboard/ourTeam",
          element: <OurTeam />,
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