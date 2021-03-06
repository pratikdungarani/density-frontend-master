import React from "react";
import Box from "@mui/material/Box";
import { IconButton, InputAdornment } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// MUI Icons
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// Formik
import { Formik, Form } from "formik";
import GoogleIcon from "assets/images/googleIcon.png";

import { CustomTextField, CommonButton } from "components/ui/index";
import { Link } from "react-router-dom";

import "./login.scss";

const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  // Initial Value
  const initialValues = {
    email: "",
    password: ""
  };

  const onLogin = (value) => {};
  return (
    <>
      <Box className="loginWrap">
        <h4 className="textPrimary textCenter welcomeTitle">Welcome to Density.Exchange</h4>
        <Formik initialValues={initialValues} onSubmit={(value) => onLogin(value)}>
          {() => (
            <Form id="signup-form">
              <Box className="loginWrapInner">
                <h1 className="loginTitle">Login to your Account</h1>
                <CustomTextField name="email" label="Email" placeholder="mail@abc.com" />
                <CustomTextField
                  name="password"
                  type={isVisible ? "text" : "password"}
                  id="password"
                  label="Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setIsVisible(!isVisible)} edge="end" className="visibilityIcon">
                          {isVisible ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <div className="between-align">
                  <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Remember Me" className="textPrimary rememberText" />
                  <Link to="/forgot-password" className="primaryLink">
                    Forgot Password?
                  </Link>
                </div>
                <Box className="textPrimary textCenter" sx={{ my: 3 }}>
                  <p className="textGray">------------- or ------------- </p>
                </Box>
                <Box className="centre-align">
                  <button className="centre-align LoginBtn">
                    <img src={GoogleIcon} alt="GoogleIcon" /> <p className="textPrimary">Continue with Google</p>
                  </button>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <CommonButton label="Login" className={"backround"} type="submit" />
                </Box>
              </Box>
            </Form>
          )}
        </Formik>

        <Box sx={{ my: 3 }} className="textSecondary textCenter">
          Not Registered Yet?{" "}
          <Link to="/signup" className="primaryLink">
            Create an account
          </Link>
        </Box>
      </Box>
    </>
  );
};
export default Login;
