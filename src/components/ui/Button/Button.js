import React from 'react';
import "./Button.scss";


const CommonButton =  ({label, className, onChange}) => {
  return (
    <button className={`buttonCommon ${className}`} onClick={onChange}> {label} </button>
  )
}


export default CommonButton
