import React from "react";

import Box from "@mui/material/Box";

import { CommonButton } from "components/ui/index";

import TabBar from "components/ui/tabbar/TabBar";

const BankAccounts = () => {
	
	return (
		<React.Fragment>
			<Box>
				<TabBar options={['Profile', 'Security', 'KYC', 'Accounts']} />
			</Box>
			
			<Box className="loginWrap">
				<Box className="loginWrapInner">
            		<Box sx={{ mb: 4 }}>
						<h1 className="loginTitle">KYC Details</h1>
					</Box>
									 
					<Box component="p" className="textCenter texGray authMessage">
						You have not added any bank account associated with your profile. Kindly add a bank account to access funds transfer facility and start trading.
					</Box>
					<Box sx={{ mt: 4 }}>
						<CommonButton label="Add bank Account" className={"backround"} />
					</Box>
				</Box>
			</Box>
		</React.Fragment>
	);
};

export default BankAccounts;
