import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./component/dashboard/AdminDashboard";
import NotFound from "./component/404/PageNotFound";
import LoginPage from "./pages/Auth/Login"; // renamed for clarity

// Auth guard
const isAuthenticated = () => !!localStorage.getItem("token");

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const router = createBrowserRouter([
{
    path: "/",
    element: <AdminLayout />,
    children: [
      
          { index: true, element: <AdminDashboard /> },
          { path: "login", element: <LoginPage /> },
        //   { path: "register", element: <Register /> },
        //   { path: "forgot-password", element: <Forgotpassword /> },
          
          
        
    ],
  },

]);

export default router;
