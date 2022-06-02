import React from 'react';
import "./Button.scss";


const CommonButton =  ({label, className, onClick}) => {
  return (
    <button className={`buttonCommon ${className}`} onClick={onClick}> {label} </button>
  )
}


export default CommonButton
