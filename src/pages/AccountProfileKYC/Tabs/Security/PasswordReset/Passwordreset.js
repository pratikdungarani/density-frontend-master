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

import "./Passwordreset.scss";

const Login = ({ openPasswordreset }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisiblenew, setIsVisiblenew] = React.useState(false);
  const [isVisibleconfirm, setIsVisibleconfirm] = React.useState(false);
  const handleclick = () => {};
  return (
    <>
      <Box className="security">
        <Box className="securityInner">
          <h1 className="securityTitle">Reset Password</h1>
          <CustomTextField
            name="oldpassword"
            type={isVisible ? "text" : "password"}
            id="oldpassword"
            label="old Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setIsVisible(!isVisible)}
                    edge="end"
                    className="visibilityIcon"
                  >
                    {isVisible ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <CustomTextField
            name="Newpassword"
            type={isVisiblenew ? "text" : "password"}
            id="Newpassword"
            label="New Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setIsVisiblenew(!isVisiblenew)}
                    edge="end"
                    className="visibilityIcon"
                  >
                    {isVisiblenew ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <CustomTextField
            name="Confirmpassword"
            type={isVisibleconfirm ? "text" : "password"}
            id="Confirmpassword"
            label="Confirm Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setIsVisibleconfirm(!isVisibleconfirm)}
                    edge="end"
                    className="visibilityIcon"
                  >
                    {isVisibleconfirm ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ mt: 4 }}>
            <CommonButton
              label="Password Reset"
              className="backround"
              onChange={openPasswordreset}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Login;
