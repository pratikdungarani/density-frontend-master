import React from "react";
import "./Button.scss";

import PropTypes from "prop-types";

const CommonButton = ({ label, className, onClick }) => {
  return (
    <button className={`buttonCommon ${className}`} onClick={onClick}> {label} </button>
  );
};

CommonButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default CommonButton;
