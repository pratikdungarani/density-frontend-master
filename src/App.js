import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import "./App.scss";
import Login from "pages/Login/Login";
import Signup from "pages/Signup/Signup";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
export default App;
