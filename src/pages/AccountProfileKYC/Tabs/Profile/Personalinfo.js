import React from "react";
import Box from "@mui/material/Box";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { CustomTextField, CommonButton } from "components/ui/index";

import "./Personalinfo.scss";

// Formik
import { Formik, Form } from "formik";

const Signup = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleclick = () => {
    setIsVisible(false);
  };

  const handlecancel = () => {
    setIsVisible(true);
  };

  // Initial Value
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: ""
  };

  const sendPersonalInfo = (value) => {

  };

  return (
    <>
      <Box className="profileInfo">
        <Box className="profileInfoInner">
          <h1 className="profileInfoTitle">Personal Information</h1>
          <Stack direction="row" className="stack" >
           <Avatar className="Avatar">VK</Avatar>
          </Stack>
          <Formik initialValues={initialValues} onSubmit={(value) => sendPersonalInfo(value)}>
        {() => (
          <Form id="Personal-form">
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
          <CustomTextField name="firstname" label="First name" placeholder="John" Required disabled />
          <CustomTextField name="lastname" label="Last name" placeholder="Doe" Required disabled />
          <CustomTextField name="email" label="Email" placeholder="mail@abc.com" Required disabled/>
          <CustomTextField
            name="phone"
            label="Phone Number"
            placeholder="9123456789"
            Required
            disabled
          />

        {
          isVisible
            ? <Box sx={{ mt: 4 }}>
            <CommonButton label="Edite Profile" className="outlined" onChange={handleclick}/>
          </Box>
            : <Box className="savechange">
            <Box sx={{ mt: 4 }}>
              <p onClick={handlecancel} className="textverified">Cancel</p>
            </Box>
            <Box sx={{ mt: 4 }}>
              <CommonButton label="Save Change" className="backround" onChange={handleclick}/>
            </Box>
          </Box>
        }
         </Form>
        )}
       </Formik>
        </Box>
      </Box>
    </>
  );
};
export default Signup;
