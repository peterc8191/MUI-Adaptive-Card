import * as React from "react";
import TextField from "@mui/material/TextField";

export default function TextFields({ item }) {
  return (
    <TextField
      className="sm-margin"
      id="outlined-basic"
      label={item?.label}
      variant="outlined"
      fullWidth={item?.fullWidth}
      multiline={item?.multiline}
      rows={item?.rows}
    />
  );
}
