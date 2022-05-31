import React from 'react';
import "./Button.scss";


const CommonButton =  ({label ,backround, outlined ,onChange}) => {
  console.log('outlined', outlined)
  return (
    <button className={`buttonCommon ${backround ? backround : outlined}`} onClick={onChange}> {label} </button>
  )
}


export default CommonButton
