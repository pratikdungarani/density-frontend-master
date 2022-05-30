import React from "react";
import './layout.scss';
import Navbar from "../ui/Navbar/Navbar";


export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pageContent">
        {children}
      </div>
    </>
  );
};

export default Layout;
