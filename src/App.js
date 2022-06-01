// App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Theme
import theme from "theme";
import { ThemeProvider } from "@mui/styles";
// Css
import "./App.scss";

// Components
import Layout from "components/Layout/Layout";

// Pages
import Login from "pages/Login/Login";
import Signup from "pages/Signup/Signup";
import AccountProfileKYC from './pages/AccountProfileKYC/AccountProfileKYC'
import Login2FA from './pages/Login2FA/Login2FA'
import ForgotUserEmail from "pages/ForgotUserEmail/ForgotUserEmail";
import ForgotPassword from "pages/ForgotPassword/ForgotPassword";
import ResetPassword from "pages/ResetPassword/ResetPassword";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<Login />} />
						<Route exact path="/signup" element={<Signup />} />
						<Route exact path='/accountProfileKYC' element={<AccountProfileKYC/>}/>
						<Route exact path='/login2FA' element={<Login2FA/>}/>
						<Route exact path='/forgot-user-email' element={<ForgotUserEmail/>}/>
						<Route exact path='/forgot-password' element={<ForgotPassword/>}/>
						<Route exact path='/reset-password' element={<ResetPassword />}/>
					</Routes>
				</BrowserRouter>
			</Layout>
		</ThemeProvider>
	);
};
export default App;
