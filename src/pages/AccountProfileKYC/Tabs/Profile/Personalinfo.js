import React from "react";
import Box from "@mui/material/Box";
import { IconButton, InputAdornment } from "@mui/material";
// MUI Icons
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { CustomTextField, CommonButton } from "components/ui/index";
import { Link } from "react-router-dom";
import "./Personalinfo.scss";

const Signup = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  
 const handleclick=()=>{
  setIsVisible(false)
 }
 const handlecancel =()=>{
  setIsVisible(true)
 }

  return (
    <>
      <Box className="signupWrap">
        <Box className="signupWrapInner">
          <h1 className="signupTitle">Personal Information</h1>
          <Stack direction="row" className="stack" spacing={2}>
           <Avatar className="Avatar">VK</Avatar>
          </Stack>
          <Box className="between-align">
            <Box className="textPrimary">
              <h6>KYC Status</h6>
            </Box>
            <Box className="verifiedLinks">
              <p className="error pointer">Not verified</p>
              <p className="primaryLink pointer">Verify Now</p>
              <p className="success pointer">Verifed</p>
            </Box>
          </Box>
          <CustomTextField label="First name" placeholder="John" Required disabled />
          <CustomTextField label="Last name" placeholder="Doe" Required disabled />
          <CustomTextField label="Email" placeholder="mail@abc.com" Required  disabled/>
          <CustomTextField
            label="Phone Number"
            placeholder="9123456789"
            Required
            disabled
          />
         
       {
         isVisible ?  
         <Box sx={{ mt: 4 }}>
            <CommonButton label="Edite Profile" outlined="outlined" onChange={handleclick}/>
         </Box> :
         <Box className="savechange">
           <Box sx={{ mt: 4 }}>
             <p onClick={handlecancel} className="textverified">Cancel</p>
           </Box>
           <Box sx={{ mt: 4 }}>
             <CommonButton label="Save Change" backround="backround" onChange={handleclick}/>
           </Box>   
         </Box>
       }
        </Box>
      </Box>
    </>
  );
};
export default Signup;
