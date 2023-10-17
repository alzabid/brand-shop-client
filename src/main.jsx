import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("/data.json"),
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact></Contact>,
      // },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      // {
      //   path: "/details/:id",
      //   element: <PrivateRoute></PrivateRoute>,
      //   loader: () => fetch("/data.json"),
      // },
      // {
      //   path: "/history",
      //   element: (
      //     <PrivateRoute>
      //       <BookingEvents></BookingEvents>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/gallery",
      //   element: (
      //     <PrivateRoute>
      //       <Gallery></Gallery>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider> */}
  </React.StrictMode>
);
