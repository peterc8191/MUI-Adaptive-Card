import React from "react";
import componentHandler from "./component-handler";
import { Grid } from "@mui/material";

function ColumnSet({ columns }) {
  return (
    <Grid container className="sm-margin">
      {columns.map((column, index) => {
        return (
          <Grid
            container
            item
            xs={column?.xsWidth}
            justifyContent={column?.justifyContent}
            alignItems={column?.justifyContent}
            key={index}
          >
            {column.body.map((item) => {
              return componentHandler(item);
            })}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ColumnSet;
