import React from "react";

import Box from "@mui/material/Box";

import { CustomTextField, CommonButton } from "components/ui/index";

import "./bank-account.scss";

const BankAccount = () => {
	
	return (
		<React.Fragment>
			<Box className="loginWrap">
				<Box className="loginWrapInner">
					<h1 className="loginTitle">Account Name 1</h1>
									 
					<CustomTextField label="Bank*" placeholder="Bank name here" />

					<CustomTextField label="Account Holder's Name*" placeholder="John Doe" />

					<CustomTextField label="Account Number*" placeholder="1234567890" />
					
					<CustomTextField label="IFSC Code*" placeholder="ABCDE12345" />
					
					<Box sx={{ mt: 4 }}>
						<CommonButton label="Add Account" className={"backround"} />
					</Box>
				</Box>
			</Box>
		</React.Fragment>
	);
};

export default BankAccount;
