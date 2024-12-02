import React from "react";
import Footer from "../Footer/Footer";
// import MainNavbar from "../Navbare/MainNavbar";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbare/MainNavbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
