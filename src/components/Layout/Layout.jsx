import React from "react";
import Footer from "../Footer/Footer";
// import MainNavbar from "../Navbare/MainNavbar";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbare/MainNavbar";
import EnrollNow from "../EnrollNow/EnrollNow";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>
        {children}
        <Outlet />
      </main>
      <EnrollNow />
      <Footer />
    </div>
  );
}

export default Layout;
