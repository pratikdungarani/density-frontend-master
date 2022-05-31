import React from "react";
import Box from "@mui/material/Box";
import { IconButton, InputAdornment } from "@mui/material";
// MUI Icons
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { CustomTextField, CommonButton } from "components/ui/index";
import { Link } from "react-router-dom";
import "./signup.scss";

const Signup = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    React.useState(false);

  return (
    <>
      <Box className="signupWrap">
        <Box className="signupWrapInner">
          <h1 className="signupTitle">New user? Get started now</h1>
          <CustomTextField label="First name" placeholder="John" Required />
          <CustomTextField label="Last name" placeholder="Doe" Required />
          <CustomTextField label="Email" placeholder="mail@abc.com" Required />
          <CustomTextField
            label="Phone Number"
            placeholder="9123456789"
            Required
          />
          <CustomTextField
            label="Referral Code(Optional)"
            placeholder="ABC1245AS"
          />
          <CustomTextField
            name="password"
            type={isVisible ? "text" : "password"}
            id="password"
            label="Password"
            Required
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
            name="cpassword"
            type={isVisibleConfirmPassword ? "text" : "password"}
            id="password"
            label="Confirm Password"
            Required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setIsVisibleConfirmPassword(!isVisibleConfirmPassword)
                    }
                    edge="end"
                    className="visibilityIcon"
                  >
                    {isVisibleConfirmPassword ? (
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
            <CommonButton label="Sign Up" backround={"backround"} />
          </Box>
        </Box>
        <Box sx={{ my: 3 }} className="textSecondary textCenter">
          Already a user?{" "}
          <Link to="/" className="primaryLink">
            Login here
          </Link>{" "}
        </Box>
      </Box>
    </>
  );
};
export default Signup;
