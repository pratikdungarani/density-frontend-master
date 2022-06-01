import React from "react";
import PropTypes from "prop-types";

//material UI
import { InputLabel, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


//style
import useStyles from "./style";

const CustomSelectField = ({
  name,
  label,
  multiline,
  rows,
  Required,
  ...rest
}) => {
  const classes = useStyles();

  const configSelectField = {
    ...rest,
    size: "small",
    multiline: multiline,
    rows: rows,
    className: classes.textField,
    variant: "outlined",
  };

  return (
    <React.Fragment>
      <InputLabel
        required={Required}
        className={classes.inputLabel}
        classes={{
          asterisk: classes.labelAsterisk,
        }}
      >
        {label}
      </InputLabel>

      <Select
        {...rest}
        className={classes.selectField}
        {...configSelectField}
        fullWidth
        multiline={multiline}
        rows={rows}
        value={'email'}
      >
        <MenuItem value={'email'}>E-mail</MenuItem>
        <MenuItem value={'sms'}>SMS</MenuItem>
      </Select>
    
    </React.Fragment>
  );
};

CustomSelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  Required: PropTypes.bool,
  rest: PropTypes.object,
};

CustomSelectField.defaultProps = {
  name: "",
  label: "",
  multiline: false,
  Required: false,
  rows: 1,
  rest: {},
};

export default CustomSelectField;
