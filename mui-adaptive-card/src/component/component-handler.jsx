import { Button, Typography, Divider, Link } from "@mui/material";
import React from "react";
import FactSet from "./fact-set/fact-set";
import Container from "./container/container";
import ColumnSet from "./column-set/column-set";
import AvatarIcon from "./avatar-icon/avatar-icon";
import Stacked from "./stack/stack";
import Checkboxes from "./form/checkbox.jsx";
import RadioButtonsGroup from "./form/radio-input";
import AccordionGroup from "./accordian/accordian";
import TextFields from "./form/text-field";
import AdaptiveCard from "./card/adaptive-card";

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
        <Button variant={item?.variant} size={item?.size} href={item?.href}>
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
    case "Card":
      return <AdaptiveCard body={item.items} />;
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
