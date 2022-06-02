import React from "react";
import "./layout.scss";
import Navbar from "../ui/Navbar/Navbar";

import PropTypes from "prop-types";

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

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
