import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import GetInTouch from "./pages/getInTouch";
import RootLayout from "./layout/rootLayout/RootLayout";
import SignUp from "./pages/auth/registration";
import Login from "./pages/auth/login";
import Expertise from "./pages/expertise";
import WelcomeToOurWorld from "./pages/welcomeToOurWorld";

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
          path: "/get-in-touch",
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
        {
          path: "/weclome-to-our-world",
          element: <WelcomeToOurWorld />,
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
