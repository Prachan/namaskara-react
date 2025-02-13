import React, { lazy, Suspense}from "react";
import { createRoot } from 'react-dom/client';;
import RootComponent from "./src/RootComponent";
//import ContactPage from "./src/ContactPage";
import BodyComponent from "./src/BodyComponent";
import Error from "./src/Error";
import RestaurantDetails from "./src/RestaurantDetails";
import { createBrowserRouter, RouterProvider } from "react-router";


const ContactPage = lazy(()=> import("./src/ContactPage"));

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
            path: "/",
            element: <BodyComponent/>,
        },
        {
            path: "/contact",
            element: <Suspense fallback= {<h1>Loading...</h1>}> <ContactPage/> </Suspense>,
        },
        {
            path: "/home",
            element: <BodyComponent/>,
        },
        {
            path: "/rest/:resId",
            element: <RestaurantDetails/>,
        }
      ],
      errorElement: <Error/>
    }
  ]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);