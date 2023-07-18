import AccordionGroup from "./accordian";
import { mockAccordianGroup } from "../__mock__/mockComponents";

export default {
  component: AccordionGroup,
  title: "Components/Accordian",
  tags: ["autodocs"],
};

export const Default = {
  args: { body: mockAccordianGroup.body },
};
