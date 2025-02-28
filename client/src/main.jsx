import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Routes dengan Layout */}
      <Route path="/" element={<MainLayout />}> 
        <Route index element={<Home />} />
      </Route>
      {/* Routes tanpa Layout */}
      <Route path="/login" element={<Login />} /> 
    </>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
