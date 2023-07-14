import { Button, Typography, Divider, Link } from "@mui/material";
import React from "react";
import FactSet from "./fact-set";
import Container from "./container";
import ColumnSet from "./column";
import AvatarIcon from "./avatar-icon";
import Stacked from "./stack";
import Checkboxes from "./checkbox.jsx";
import RadioButtonsGroup from "./radio-input";
import AccordionGroup from "./accordian";
import TextFields from "./text-field";

export default function componentHandler(item) {
  switch (item.type) {
    case "TextBlock":
      return (
        <Typography fontWeight={item?.fontWeight} variant={item?.variant} paragraph={true}>
          {item.text}
        </Typography>
      );
    case "Stack":
      console.log(item.body);
      return <Stacked item={item} />;
    case "Button":
      return (
        <Button variant={item?.variant} size={item?.size}>
          {item.text}
        </Button>
      );
    case "Link":
      return (
        <Link variant={item?.variant} href={item?.href}>
          {item.text}
        </Link>
      );
    case "FactSet":
      return <FactSet items={item.body} />;
    case "Divider":
      return <Divider />;
    case "Container":
      return <Container items={item.items} />;
    case "ColumnSet":
      return <ColumnSet columns={item.columns} />;
    case "AvatarIcon":
      return <AvatarIcon icon={item.icon} />;
    case "Checkboxes":
      return <Checkboxes checkboxes={item?.Checkboxes} />;
    case "RadioGroup":
      return <RadioButtonsGroup body={item} />;
    case "TextField":
      return <TextFields item={item} />;
    case "AccordianGroup":
      return <AccordionGroup body={item.body} />;
    default:
      return <p>{"no element"}</p>;
  }
}
