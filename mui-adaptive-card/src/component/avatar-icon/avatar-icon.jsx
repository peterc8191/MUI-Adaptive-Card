import * as React from "react";
import { Avatar } from "@mui/material";
import Icon from "./icon";

export default function AvatarIcon({ icon }) {
  return (
    <Avatar>
      <Icon name={icon} />
    </Avatar>
  );
}
