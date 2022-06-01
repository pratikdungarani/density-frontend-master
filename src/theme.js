import { createTheme } from "@mui/material/styles";
const font =   "'Overpass', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily:  font
  },
  palette: {
    primary: {
      main: "#ffffff",
      default: "#1a3353",
    },
    secondary: {
      main: "#4F4F4F",
    },
    common: {
      subTitleColor: "#5B86E5",
      labelColor: "#BDBDBD",
      borderColor: "#101010",
      inputbackground: "#4f4f4f40",
      viewBtnBorder: "#e6ebf1",
      disabledText: "#FCFCFC"
    },
  },
  error: {
    main: "#F46151",
  },
  cardshadow:
    "0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%)",
});

export default theme;
