import React from "react";
import Footer from "../Footer/Footer";
import MainNavbar from "../Navbare/MainNavbar";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <MainNavbar />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
