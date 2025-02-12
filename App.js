import React from "react";
import { createRoot } from 'react-dom/client';;
import RootComponent from "./src/RootComponent";
import ContactPage from "./src/ContactPage";
import BodyComponent from "./src/BodyComponent";
import Error from "./src/Error";
import RestaurantDetails from "./src/RestaurantDetails";
import { createBrowserRouter, RouterProvider } from "react-router";


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
            element: <ContactPage/>,
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