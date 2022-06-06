// Forgot Password

import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import { CustomTextField, CommonButton } from "components/ui/index";

import "./forgot-password.scss";
// Formik
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Validation
const validationSchema = Yup.object().shape({
  regemail: Yup.string().required("Email is required").email()
});

const ForgotPassword = () => {
  const initialValues = {
    regemail: "",
    authTotp: "",
    emailOtp: ""
  };
  const forgotSubmit = (value) => {};

  return (
    <React.Fragment>
      <Box className="loginWrap">
        <Box className="loginWrapInner">
          <h1 className="loginTitle">Forgot Password?</h1>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(value) => forgotSubmit(value)}>
            {() => (
              <Form id="ForgotPassword-form">
                <CustomTextField name="regemail" label="Registered Email*" placeholder="mail@abc.com" />
                <Box>
                  <CustomTextField name="emailOtp" label="Email OTP" placeholder="****" />
                  <Box sx={{ my: 1 }}>
                    <p className="textPrimary textSmall textRight">
                      <span className="textSecondary">Resend OTP</span> in 0:49
                    </p>
                  </Box>
                </Box>

                <CustomTextField name="authTotp" label="Authenticator TOTP" placeholder="****" />

                <Box sx={{ mt: 4 }}>
                  <CommonButton label="Verify" className={"backround"} type="submit" />
                </Box>
              </Form>
            )}
          </Formik>
        </Box>

        <Box sx={{ my: 3 }} className="textSecondary textCenter">
          Not Registered Yet?{" "}
          <Link to="/signup" className="primaryLink">
            Create an account
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ForgotPassword;
