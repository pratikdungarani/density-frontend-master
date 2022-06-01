import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "theme";
import Layout from "components/Layout/Layout";
import "./App.scss";
import Login from "pages/Login/Login";
import Signup from "pages/Signup/Signup";
import { ThemeProvider } from "@mui/styles";
import AccountProfileKYC from './pages/AccountProfileKYC/AccountProfileKYC'
import Login2FA from './pages/Login2FA/Login2FA'

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
        </Routes>
      </BrowserRouter>
    </Layout>
    </ThemeProvider>
  );
};
export default App;
