import React from "react";

import Box from "@mui/material/Box";

import { CustomTextField, CommonButton, CustomSelectField } from "components/ui/index";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";

import "./forgot-user-email.scss";
// Formik
import { Formik, Form } from "formik";

const ForgotUserEmail = () => {
  const initialValues = {
    userId: "",
    panNo: "",
    email: "",
    phone: ""
  };
  const twoFactorSubmit = (value) => {};
  return (
    <React.Fragment>
      <Box className="forgotUser">
        <Box className="forgotUserInner">
          <h1 className="loginTitle">Forgot 2FA? </h1>
          <Formik initialValues={initialValues} onSubmit={(value) => twoFactorSubmit(value)}>
            {() => (
              <Form id="ForgotUserEmail-form">
          <Box>
          <FormControlLabel
            control={<Checkbox defaultChecked size="small" />}
            label="I remember my user ID"
            className="textPrimary rememberText"
          />
          </Box>
          <Box>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="I forgot my user ID"
            className="textPrimary rememberText"
          />
          </Box>

          <CustomTextField name="userId" label="User ID" placeholder="Enter User ID here" />
          <CustomTextField name="panNo" label="PAN" placeholder="ABCDE1234F" />

          <CustomSelectField label="Receive on*" placeholder="mail@abc.com" value="email">
          <MenuItem value={"email"}>E-mail</MenuItem>
          <MenuItem value={"sms"}>sms</MenuItem>
          </CustomSelectField>

          <CustomTextField name="email" label="E-mail (as on account)" placeholder="mail@abc.com" />
          <CustomTextField name="phone" label="Phone number (as on account)" placeholder="9123456789" />

          <Box sx={{ mt: 4 }}>
          <CommonButton label="Reset" className={"backround"} />
          </Box>
          </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ForgotUserEmail;
