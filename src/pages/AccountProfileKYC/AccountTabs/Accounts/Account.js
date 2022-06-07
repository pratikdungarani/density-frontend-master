import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddBankAccount from "./AddBankAccount/AddBankAccount";
import BankAccount from "./BankAccount/BankAccount";
import BankAccounts from "./BankAccounts/BankAccounts";
import Arrow from "assets/images/arrow";
import { CommonButton } from "components/ui/index";
const Account = () => {
  const [addedAccounts, setAddedAccount] = useState(true);
  const [accountsList, setAccountsList] = useState(false);
  const [accountFirst, setAccountFirst] = useState(false);
  const [accountNew, setAccountNew] = useState(false);

  const addBankAccount = () => {
    setAddedAccount(!addedAccounts);
    setAccountsList(!accountsList);
  };

  const AccountFirst = () => {
    setAccountFirst(!accountFirst);
    setAccountsList(false);
    setAddedAccount(false);
  };

  const AccountNew = () => {
    setAccountFirst(false);
    setAccountsList(false);
    setAddedAccount(false);
    setAccountNew(!accountNew);
  };

  return (
    <>
    {
      addedAccounts && <BankAccounts addedAccounts={addedAccounts} addBankAccount={() => addBankAccount()} />
    }

    {accountsList && (
    <Box className="security">
        <Box className="securityInner">
        <h1 className="securityTitle">Bank Accounts</h1>
        <Box>
            <Box className="passwordreset">
            <p>Account Name 1</p>
            <div className="pointer centre-align" onClick={() => AccountFirst()}>
                <Arrow />
            </div>
            </Box>
            <Box className="passwordreset">
            <p>Account Name 2</p>
            <div className="pointer centre-align" onClick={() => AccountFirst()}>
                <Arrow />
            </div>
            </Box>
            <Box sx={{ mt: 4 }}>
              <CommonButton label="Add bank Account" className={"backround"} onClick={() => AccountNew()} />
            </Box>
        </Box>
        </Box>
    </Box>
    )}

    {
        accountFirst && <AddBankAccount />
    }

    {
        accountNew && <BankAccount />
    }
    </>
  );
};
export default Account;
