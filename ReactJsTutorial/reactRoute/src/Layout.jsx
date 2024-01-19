import React from "react";
import Footer from "../../../ReactJs/07ReactRout/src/components/Footer/Footer";
import Header from "../../../ReactJs/07ReactRout/src/components/Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
