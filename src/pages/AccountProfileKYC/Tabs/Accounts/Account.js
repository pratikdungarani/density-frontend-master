import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddBankAccount from "./AddBankAccount/AddBankAccount";
import BankAccount from "./BankAccount/BankAccount";
import BankAccounts from "./BankAccounts/BankAccounts";
import Arrow from "assets/images/arrow";
import {CommonButton} from "components/ui/index";

const Account = () => {
  const [addedAccounts, setAddedAccounts] = useState(false);
  return (
    <>
      <BankAccounts />
      <Box className="security">
        <Box className="securityInner">
          <h1 className="securityTitle">Bank Accounts</h1>
          <Box>
            <Box className="passwordreset">
              <p>Account Name 1</p>
              <div className="pointer centre-align">
                <Arrow />
              </div>
            </Box>
            <Box className="passwordreset">
              <p>Account Name 2</p>
              <div className="pointer centre-align">
                <Arrow />
              </div>
            </Box>
            <Box sx={{ mt: 4 }}>
              <CommonButton label="Add bank Account" className={"backround"} />
            </Box>
          </Box>
        </Box>
      </Box>

      <AddBankAccount />
      <BankAccount />
    </>
  );
};

export default Account;
