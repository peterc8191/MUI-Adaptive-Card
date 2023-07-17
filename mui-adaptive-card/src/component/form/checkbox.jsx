import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Checkboxes({ checkboxes }) {
  console.log(checkboxes);
  return (
    <FormGroup>
      {checkboxes.map((checkbox) => {
        return (
          <FormControlLabel
            control={<Checkbox defaultChecked={checkbox?.checked ? true : false} />}
            label={checkbox.text}
          />
        );
      })}
    </FormGroup>
  );
}
