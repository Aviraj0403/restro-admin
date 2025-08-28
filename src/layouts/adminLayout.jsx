import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Header, Sidebar, RouterCumb, ProgressBar, Footer } from "../component";
import { useWindowContext } from "../context/windowContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const { divRef, progressWidth } = useWindowContext();

  const toggleSidebar = () => setOpenSidebar((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      setOpenSidebar(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <ToastContainer />

      {/* Sidebar */}
      <Sidebar
        className={`lg:fixed absolute top-0 left-0 z-30 w-64 h-full bg-white transition-transform duration-300 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
        toggleSidebar={toggleSidebar}
      />

      {/* Main content area */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${
          openSidebar ? "lg:ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} openSidebar={openSidebar} />

        {/* Breadcrumb & Progress */}
        <div className="px-4 py-2 bg-white border-b">
          <ProgressBar progressWidth={progressWidth} />
          <RouterCumb />
        </div>

        {/* Scrollable Content */}
        <main
          ref={divRef || null}
          className="flex-1 overflow-y-auto p-4 bg-orange-100/30"
        >
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
