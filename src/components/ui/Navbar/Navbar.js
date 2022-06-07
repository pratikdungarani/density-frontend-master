import React from "react";
import PropTypes from "prop-types";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import "./Navbar.scss";
import { Logo } from "../Logo";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // eslint-disable-next-line react/prop-types
  const { isLoggedIn } = props;

  const loggedIn = () => (
    <>
      <div className="density-relative">
        <div className={`density-manu_ul ${isMenuOpen ? "active_menu" : ""}`}>
          <Typography variant="h6" align="justify" className="density-toolbar-text">
            Portfolio
          </Typography>
          <Typography variant="h6" align="justify" className="density-toolbar-text">
            Trade
          </Typography>
          <Typography variant="h6" align="justify" className="density-toolbar-text">
            Markets
          </Typography>
        </div>
        <span className="density-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <IconButton aria-label="notifications" className={"density-toolbar-icon"}>
            <MenuIcon />
          </IconButton>
        </span>
      </div>
      <div className="density-toolbar-icons">
        <IconButton aria-label="notifications" className={"density-toolbar-icon"}>
          <NotificationsIcon />
        </IconButton>
        <IconButton aria-label="wallet" className={"density-toolbar-icon"}>
          <AccountBalanceWalletIcon />
        </IconButton>
        <IconButton aria-label="account" className={"density-toolbar-icon"}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton aria-label="help" className={"density-toolbar-icon"}>
          <HelpOutlineOutlinedIcon />
        </IconButton>
      </div>
    </>
  );

  const loggedOut = () => (
    <>
      <Typography variant="h6" align="justify" className="density-toolbar-text">
        Trade
      </Typography>
      <div className="density-toolbar-icons">
        <IconButton aria-label="account" className={"density-toolbar-icon"}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton aria-label="help" className={"density-toolbar-icon"}>
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

Navbar.PropTypes = {
  isLoggedIn: PropTypes.bool
};

export default Navbar;
