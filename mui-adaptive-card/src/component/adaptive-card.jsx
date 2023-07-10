import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import { adaptiveJson } from "./adaptive";

const componentHandler = (item) => {
  switch (item.type) {
    case "TextBlock":
      return <p>{item.text}</p>;
    default:
      return <p>{"no element"}</p>;
  }
};

function AdaptiveCard() {
  return (
    <Card>
      <p>some text</p>
      {adaptiveJson?.body[0].items.map((component) => {
        return componentHandler(component);
      })}
    </Card>
  );
}

export default AdaptiveCard;
