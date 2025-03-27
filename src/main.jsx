import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Error404 from "./page/error404";
import Contact from "./page/contact";
import Portfolio from "./page/porfolio";
import Cv from "./page/cv.jsx";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cv", // Changed to use a hyphen
          element: <Cv />,
        },
        {
          path: "/contact", // Changed to use a hyphen
          element: <Contact />,
        },
        {
          path: "/portfolio", // Changed to use a hyphen
          element: <Portfolio/>,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
