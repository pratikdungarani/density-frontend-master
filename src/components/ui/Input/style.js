import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  helperText: {
    "&.MuiFormHelperText-root": {
      lineHeight: 0.66,
      marginLeft: theme.spacing(0),
    },
  },
  inputLabel: {
    "&.MuiInputLabel-root": {
      marginTop: theme.spacing(2.5),
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14),
      fontVariant: "tabular-nums",
      fontFeatureSettings: "tnum",
    },
  },
  labelAsterisk: {
    color: theme.error.main,
  },
  textField: {
    "& .MuiOutlinedInput-input": {
      height: "1.7em",
      color: theme.palette.primary.main,    
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      fontSize: theme.typography.pxToRem(10),
      borderColor: theme.palette.primary.main,
      borderRadius: 5,
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
export default useStyle;
