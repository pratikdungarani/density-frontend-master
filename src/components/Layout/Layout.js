import React from "react";
import Navbar from "../ui/Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
