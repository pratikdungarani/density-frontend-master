import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PersonalInfo from "./Tabs/Profile/Personalinfo";
import Security from "./Tabs/Security/Security";
import AccountKYC from "./Tabs/AccountKYC/AccountKYC";
// import Account from "./Tabs/Accounts/Account";

import "./AccountProfileKYC.scss";
export default function LabTabs() {
  const [value, setValue] = React.useState("1");
  console.log("value", value);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const List = [
    { label: "Profile", value: "1" },
    { label: "Security", value: "2" },
    { label: "KYC", value: "3" },
    { label: "Accounts", value: "4" }
  ];

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box className="mainTab" sx={{ p: 4 }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" className="TabList">
            {List.map((item) => {
              return <Tab label={item.label} value={item.value} className="Tab" key={item.label} />;
            })}
          </TabList>
        </Box>
        <TabPanel value="1">
          <PersonalInfo />
        </TabPanel>
        <TabPanel value="2">
          <Security />
        </TabPanel>
        <TabPanel value="3">
          <AccountKYC />
        </TabPanel>
        <TabPanel value="4">{/* <Account /> */}</TabPanel>
      </TabContext>
    </Box>
  );
}
