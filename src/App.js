import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import "./App.scss";
import Login from "pages/Login/Login";
import Signup from "pages/Signup/Signup";
import { ThemeProvider } from "@mui/styles";
import AccountProfileKYC from './pages/AccountProfileKYC/AccountProfileKYC'
import theme from "theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path='/AccountProfileKYC' element={<AccountProfileKYC/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
    </ThemeProvider>
  );
};
export default App;
