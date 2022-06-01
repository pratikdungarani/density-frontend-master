import React from "react";

import Box from "@mui/material/Box";

import { CustomTextField, CommonButton, CustomSelectField } from "components/ui/index";

import "./forgot-user-email.scss";

const ForgotUserEmail = () => {
	
	return (
		<React.Fragment>
			<Box className="loginWrap">
				<Box className="loginWrapInner">
					<h1 className="loginTitle">Forgot 2FA? </h1>
					<CustomTextField label="User ID" placeholder="Enter User ID here" />
					<CustomTextField label="PAN" placeholder="ABCDE1234F" />
					<CustomSelectField label="Receive on" placeholder="mail@abc.com" />
					
					<CustomTextField label="E-mail (as on account)" placeholder="mail@abc.com" />
					
					<Box sx={{ mt: 4 }}>
						<CommonButton label="Reset" className={"backround"} />
					</Box>
				</Box>
			</Box>
		</React.Fragment>
	);
};

export default ForgotUserEmail;
