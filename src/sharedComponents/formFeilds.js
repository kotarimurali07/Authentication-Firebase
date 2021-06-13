import React, { useState } from "react";
import { TextField } from "@material-ui/core";

import { InputAdornment, IconButton } from "@material-ui/core";
import validate from "./valadation";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export const AlphaNumericInput = ({
  label,
  name,
  handleChange,
  required,
  value = "",
  variant = "outlined",
}) => {
  return (
    <TextField
      label={label}
      name={name}
      onChange={(e) =>
        e.target.value.match(/^[a-z0-9]+$/i) || e.target.value.length === 0
          ? handleChange(e)
          : () => {}
      }
      required={required}
      value={value}
      variant={variant}
      size="small"
      fullWidth
    />
  );
};

export const NameInput = ({
  label,
  name,
  handleChange,
  required,
  value = "",
  variant = "outlined",
}) => {
  return (
    <TextField
      label={label}
      name={name}
      onChange={(e) =>
        validate.checkName(e.target.value) ? handleChange(e) : () => {}
      }
      required={required}
      helperText={
        value.length && !validate.checkName(value) ? "Enter valid " + label : ""
      }
      value={value}
      variant={variant}
      size="small"
      fullWidth
    />
  );
};

export const EmailInput = ({
  label,
  name,
  handleChange,
  required,
  value = "",
  variant = "outlined",
}) => {
  return (
    <TextField
      label={label}
      name={name}
      type="email"
      onChange={handleChange}
      helperText={
        value.length && !validate.checkEmail(value)
          ? "Enter valid " + label
          : ""
      }
      required={required}
      value={value}
      variant={variant}
      //size="small"
      fullWidth
    />
  );
};

export const PasswordInput = ({
  label,
  name,
  handleChange,
  className,
  required,
  value = "",
  variant = "outlined",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ValidatorForm autoComplete="off">
      <TextValidator
        password
        label={label}
        name={name}
        className={className}
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
        variant={variant}
        size="small"
        required={required}
        value={value}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </ValidatorForm>
  );
};

export function CustomField(details) {
  switch (details.type) {
    case "name":
      return <NameInput {...details} />;

    case "email":
      return <EmailInput {...details} />;
    case "password":
      return <PasswordInput {...details} />;

    case "alphanumeric":
      return <AlphaNumericInput {...details} />;

    default:
      return <div />;
  }
}
