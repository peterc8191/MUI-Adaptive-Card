import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup({ body }) {
  console.log(body);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{body?.label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={body?.defaultValue}
        name={body?.inputName}
      >
        {body.items.map((item) => {
          return <FormControlLabel value={item?.value} control={<Radio size={body?.size} />} label={item?.label} />;
        })}
      </RadioGroup>
    </FormControl>
  );
}
