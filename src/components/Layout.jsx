import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    // <div className="h-full w-full">
    <>
      <Navbar />
      <main className="h-screen w-full">
        <Outlet />
      </main>
    </>
    // </div>
  );
};

export default Layout;
