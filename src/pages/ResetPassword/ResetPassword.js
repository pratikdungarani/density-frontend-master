// Reset Password
import React from "react";

import Box from "@mui/material/Box";
import { CustomTextField, CommonButton } from "components/ui/index";
import { IconButton, InputAdornment } from "@mui/material";

// MUI Icons
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import "./reset-password.scss";
// Formik
import { Formik, Form } from "formik";

const ResetPassword = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const initialValues = {
    password: "",
    confirmPassword: ""
  };
  const resetSubmit = (value) => {};
  return (
    <React.Fragment>
      <Box className="loginWrap">
        <Box className="loginWrapInner">
          <h1 className="loginTitle">Reset Password</h1>
          <Formik initialValues={initialValues} onSubmit={(value) => resetSubmit(value)}>
            {() => (
              <Form id="ForgotFa-form">
                <CustomTextField
                  name="password"
                  type={isVisible ? "text" : "password"}
                  id="newPassword"
                  label="Enter New Password*"
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

                <CustomTextField name="confirmPassword" label="Re-enter Password*" placeholder="mail@abc.com" />

                <Box sx={{ mt: 4 }}>
                  <CommonButton label="Reset Password" className={"backround"} />
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ResetPassword;
