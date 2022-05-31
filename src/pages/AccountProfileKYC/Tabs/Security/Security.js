import React from "react";
import Box from "@mui/material/Box";
import { IconButton, InputAdornment } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// MUI Icons
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import GoogleIcon from "assets/images/googleIcon.png";

import { CustomTextField, CommonButton } from "components/ui/index";
import { Link } from "react-router-dom";
import Arrow from '../../../../assets/images/arrow'
import "./Security.scss";
import Passwordreset from './PasswordReset/Passwordreset'
const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisiblepwd, setIsVisiblepwd] = React.useState(false);
  const openPasswordreset=()=>{
    setIsVisiblepwd(!isVisiblepwd)
  }
  return (
    <>{
        isVisiblepwd ?  
        <Passwordreset openPasswordreset={openPasswordreset}/> :
        <>
        <Box className="loginWrap">
        <Box className="loginWrapInner">
            <h1 className="loginTitle">Security</h1>
           <Box>
              <Box className="passwordreset">
                <p>Password reset</p>
                <div onClick={openPasswordreset} className="pointer centre-align">
                <Arrow  />
                </div>

              </Box>
              <Box className="passwordreset">
                 <p>Two Factor Authetication</p>
                 <div  className="pointer centre-align">
                  <Arrow/>
                 </div>

              </Box>
           </Box>
        </Box>
      </Box>
      </>
    }
      
     
    </>
  );
};
export default Login;
