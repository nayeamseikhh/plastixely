import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import GetInTouch from "./pages/getInTouch";
import RootLayout from "./layout/rootLayout/RootLayout";
import SignUp from "./pages/auth/registration";
import Login from "./pages/auth/login";
import Expertise from "./pages/expertise";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "/get_in_touch",
          element: <GetInTouch />,
        },
        {
          path: "/registration",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/expertise",
          element: <Expertise />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
