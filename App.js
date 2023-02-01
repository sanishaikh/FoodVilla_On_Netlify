import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/Header.js";
import BodyMain from "./Components/Body.js";
import "./index.css";
import {Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/NavbarComp/About";
import Contact from "./Components/NavbarComp/Contact.js";
import Error from "./Components/Error";
import RestrauntMenu from "./Components/RestrauntMenu"
// We are building a SPA, what is it? older days--> spinning(entire page refreshes)--> with SPA, it does not make network calls
//two type of routing client side routing and server side routing
/** Header
 *   -logo
 *   - NAV ListItem
 *   -Card
 * Body
 * - search bar
 * -RestrauntList
 *    - Image
 *    -Name
 *    -Rating
 *    -Cusines
 * Footer
 *   - links
 *   - copyRight
 *  */

const Body = () => {
  return <h1> Body</h1>;
};

const Footer = () => {
  return <h1> Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      {/* Lets consider this is an outlet where we need to fill in the below pages */}
      {/*  */}
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
    { 
        path: "/", 
        element: <BodyMain /> 
    },
    { 
        path: "/about",
        element: <About /> 
    },
    {   path: "/contact",
       element: <Contact /> 
    },
    {
    path :"/restraunt/:id",
    element: <RestrauntMenu />
    }
   ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// package lock json is very important file as it locks the version. Never put it into gitignore, it has to be into git project.
//packagelock -> git -> server     (hence we need package lock in git)
