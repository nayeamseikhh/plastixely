import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      index: true,
      element: <Home />,
    },
    // {
    //   path: "/get_in_touch",
    //   element: <Home />,
    // },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
