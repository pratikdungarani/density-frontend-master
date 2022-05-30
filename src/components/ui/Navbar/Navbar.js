import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import "./Navbar.scss";
import { Logo } from "../Logo";
import PropTypes from "prop-types";

const Navbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isLoggedIn } = props;

  const iconColor = {
    color: "#F2F2F2"
  };
  const typoGraphy = {
    margin: "0 40px",
    "font-family": "Overpass"
  };

  const loggedIn = () => (
    <>
      <Typography variant="h6" align="justify" className="density-toolbar-text" sx={typoGraphy}>
        {" "}
        Portfolio{" "}
      </Typography>
      <Typography variant="h6" align="justify" className="density-toolbar-text" sx={typoGraphy}>
        {" "}
        Trade{" "}
      </Typography>
      <Typography variant="h6" align="justify" className="density-toolbar-text" sx={typoGraphy}>
        {" "}
        Markets{" "}
      </Typography>
      <div className="density-toolbar-icons">
        <IconButton aria-label="notifications" className={"density-toolbar-icon"} sx={iconColor} >
          <NotificationsIcon />
        </IconButton>
        <IconButton aria-label="wallet" className={"density-toolbar-icon"} sx={iconColor}>
          <AccountBalanceWalletIcon />
        </IconButton>
        <IconButton aria-label="account" className={"density-toolbar-icon"} sx={iconColor}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton aria-label="help" className={"density-toolbar-icon"} sx={iconColor}>
          <HelpOutlineOutlinedIcon />
        </IconButton>
      </div>
    </>
  );

  const loggedOut = () => (
    <>
      <Typography variant="h6" align="justify" className="density-toolbar-text" sx={typoGraphy}>
        {" "}
        Trade{" "}
      </Typography>
      <div className="density-toolbar-icons">
        <IconButton aria-label="account" className={"density-toolbar-icon"} sx={iconColor}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton aria-label="help" className={"density-toolbar-icon"} sx={iconColor}>
          <HelpOutlineOutlinedIcon />
        </IconButton>
      </div>
    </>
  );

  return (
    <div className={"desity-navbar"}>
      <AppBar position="sticky" className={"density-appbar"}>
        <Toolbar className="density-toolbar">
          <IconButton aria-label="logo" className={"density-toolbar-logo"}>
            <Logo />
          </IconButton>
          {isLoggedIn ? loggedIn() : loggedOut()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

// Navbar.PropTypes = {
//   isLoggedIn: PropTypes.bool
// };

export default Navbar;
