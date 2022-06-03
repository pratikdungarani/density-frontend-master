import React from "react";
import Box from "@mui/material/Box";
import { IconButton, InputAdornment } from "@mui/material";
// MUI Icons
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { CustomTextField, CommonButton } from "components/ui/index";
import { Link, useNavigate } from "react-router-dom";
import "./signup.scss";

// Formik
import { Formik, Form } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^[+]?(?:[0-9]{2})?[0-9]{10}$/;
const passwordRegExp = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$";
// Validation
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Firstname is required"),
  lastname: Yup.string().required("Lastname is required"),
  phone: Yup.string().required("Phone number is required").matches(phoneRegExp, "Enter valid phone number"),
  email: Yup.string().required("Email is required").email(),
  password: Yup.string()
    .required("Password is required")
    .matches(passwordRegExp, "Passwords shall have a minimum of 10 characters with a mix of alphabets, number, alphanumeric and special characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password didn't match. Try again")
    .required("ConfirmPassword is required")
});

const Signup = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = React.useState(false);

  // Initial Value
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    referral: ""
  };

  const onSignup = (values) => {
    console.log("values", values);
    navigate("/");
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(value) => onSignup(value)}>
        {() => (
          <Form id="signup-form">
            <Box className="signupWrap">
              <Box className="signupWrapInner">
                <h1 className="signupTitle">New user? Get started now</h1>
                <CustomTextField name="firstname" label="First name" placeholder="John" Required />
                <CustomTextField name="lastname" label="Last name" placeholder="Doe" Required />
                <CustomTextField name="email" label="Email" placeholder="mail@abc.com" Required />
                <CustomTextField name="phone" label="Phone Number" placeholder="9123456789" Required />
                <CustomTextField name="referral" label="Referral Code(Optional)" placeholder="ABC1245AS" />
                <CustomTextField
                  name="password"
                  type={isVisible ? "text" : "password"}
                  label="Password"
                  Required
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
                <CustomTextField
                  name="confirmPassword"
                  type={isVisibleConfirmPassword ? "text" : "password"}
                  label="Confirm Password"
                  Required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setIsVisibleConfirmPassword(!isVisibleConfirmPassword)} edge="end" className="visibilityIcon">
                          {isVisibleConfirmPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Box sx={{ mt: 4 }}>
                  <CommonButton label="Sign Up" className={"backround"} type="submit" />
                </Box>
              </Box>
              <Box sx={{ my: 3 }} className="textSecondary textCenter">
                Already a user?{" "}
                <Link to="/" className="primaryLink">
                  Login here
                </Link>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Signup;
