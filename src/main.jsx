import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import WindowContextProvider from "./context/windowContext";
import { AuthProvider } from "./context/AuthContext";
import "./index.css"; // Tailwind or other global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      {/* <WindowContextProvider> */}
        <RouterProvider router={router} />
      {/* </WindowContextProvider> */}
    {/* </AuthProvider> */}
  </React.StrictMode>
);
