import React from "react";

import Box from "@mui/material/Box";

import { CustomTextField, CommonButton, CustomSelectField } from "components/ui/index";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";

import "./forgot-user-email.scss";

const ForgotUserEmail = () => {
  return (
    <React.Fragment>
      <Box className="loginWrap">
        <Box className="loginWrapInner">
          <h1 className="loginTitle">Forgot 2FA? </h1>
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

          <CustomTextField label="User ID" placeholder="Enter User ID here" />
          <CustomTextField label="PAN" placeholder="ABCDE1234F" />

          <CustomSelectField label="Receive on*" placeholder="mail@abc.com" value="email">
          <MenuItem value={"email"}>E-mail</MenuItem>
          <MenuItem value={"sms"}>sms</MenuItem>
          </CustomSelectField>

          <CustomTextField label="E-mail (as on account)" placeholder="mail@abc.com" />
          <CustomTextField label="Phone number (as on account)" placeholder="9123456789" />

          <Box sx={{ mt: 4 }}>
          <CommonButton label="Reset" className={"backround"} />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ForgotUserEmail;
