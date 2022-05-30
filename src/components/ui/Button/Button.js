import React from 'react';
import "./Button.scss";


const CommonButton =  ({label ,backround, outlined}) => {
  return (
    <button className={`buttonCommon ${backround ? backround : outlined}`} > {label} </button>
  )
}


export default CommonButton
