import * as React from "react";
import { Stack } from "@mui/material";
import componentHandler from "../component-handler";

export default function Stacked({ item }) {
  return (
    <Stack spacing={item?.spacing}>
      {item?.body?.map((item, index) => {
        return componentHandler(item);
      })}
    </Stack>
  );
}
