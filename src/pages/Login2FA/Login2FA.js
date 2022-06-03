import React from "react";
import "./Login2FA.scss";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { CustomTextField, CommonButton } from "components/ui/index";

function Login2FA() {
  return (
    <Box className="login2FA">
      <Box className="login2FAInner">
        <h1 className="login2FATitle">Two Factor Authentication</h1>
        <Stack className="stack textCenter">
            <Avatar className="Avatar">BB</Avatar>
            <Link to="/" className="link">Change user?</Link>
        </Stack>
        <Box sx={{ mb: 4 }}>
        <CustomTextField name="authTotp" label="Authenticator TOTP" placeholder="Enter OTP here" />
            <Box className="textRight">
              <Link to="/" className="link"> Forgot 2FA? </Link>
            </Box>
        </Box>
        <Box>
          <CommonButton className="backround" label= "Login" />
        </Box>
      </Box>
    </Box>
  );
}

export default Login2FA;
