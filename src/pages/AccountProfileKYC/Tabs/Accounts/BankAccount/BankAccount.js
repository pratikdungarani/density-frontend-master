import React from "react";

import Box from "@mui/material/Box";

import { CustomTextField, CommonButton, CustomSelectField } from "components/ui/index";
import MenuItem from "@mui/material/MenuItem";

import "./bank-account.scss";
// Formik
import { Formik, Form } from "formik";

const BankAccount = () => {
  // Initial Value
  const initialValues = {
    accountHolder: "",
    accountNumber: "",
    ifsc: ""
  };
  const accountSubmit = (value) => {};

  return (
    <React.Fragment>
      <Box className="loginWrap">
        <Box className="loginWrapInner">
          <h1 className="loginTitle">Add Bank Account</h1>
          <Formik initialValues={initialValues} onSubmit={(value) => accountSubmit(value)}>
            {() => (
              <Form id="account-form">
                <CustomSelectField label="Select Bank*" placeholder="mail@abc.com" value="bank-1">
                  <MenuItem value={"bank-1"}>Bank 1</MenuItem>
                  <MenuItem value={"bank-2"}>Bank 2</MenuItem>
                </CustomSelectField>

                <CustomTextField name="accountHolder" label="Account Holder's Name*" placeholder="John Doe" />

                <CustomTextField name="accountNumber" label="Account Number*" placeholder="1234567890" />

                <CustomTextField name="ifsc" label="IFSC Code*" placeholder="ABCDE12345" />

                <Box sx={{ mt: 4 }}>
                  <CommonButton label="Add Account" className={"backround"} />
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default BankAccount;
