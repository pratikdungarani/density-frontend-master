import React, { useState } from "react";
import "./AccountKYC.scss";
import Box from "@mui/material/Box";
import { CustomTextField } from "components/ui/index";
import { Link } from "react-router-dom";

const AccountKYC = () => {
  const [kycVerify, setKycVerify] = useState(false);

  return (
    <Box className="accountkyc">
      <Box className="accountkycInner">
        {
        !kycVerify
          ? <Box>
            <h1 className="accountkycTitle">Personal Information</h1>
            <Box className="between-align" sx={{ mb: 3 }}>
              <Box className="textPrimary">
                <h6>KYC Status</h6>
              </Box>
              <Box className="verifiedLinks">
                <p
                  className="success pointer"
                  onClick={() => setKycVerify(!kycVerify)}
                >
                  Verifed
                </p>
              </Box>
            </Box>
            <CustomTextField label="First name" placeholder="John" disabled />
            <CustomTextField label="Last name" placeholder="Doe" disabled />
            <CustomTextField
              label="Country"
              placeholder="mail@abc.com"
              disabled
            />
            <CustomTextField
              label="Aadhar Number"
              placeholder="XXXX XXXX XXXX XXXX"
              disabled
            />
            <CustomTextField
              label="PAN Number"
              placeholder="ABCDE1234F"
              disabled
            />
          </Box>
          : <Box>
            <h1 className="accountkycTitle">KYC Details</h1>
            <Box className="between-align" sx={{ mb: 3 }}>
              <Box className="textPrimary">
                <h6>KYC Status</h6>
              </Box>
              <Box className="verifiedLinks">
                <p className="error pointer">Not verified</p>
              </Box>
            </Box>
            <Box component="p" className="textCenter texGray authMessage">
              Two Factor Authentication enabled. This helps keep your account
              safe. We strongly recommend you keep 2FA turned on.
            </Box>
            <Box>
              <Link to="/accountProfileKYC" className="buttonCommon backround">
                Verify KYC
              </Link>
            </Box>
          </Box>
        }
      </Box>
    </Box>
  );
};

export default AccountKYC;
