import { mockAccordianGroup } from "./mockComponents";

export const accordian = {
  type: "AdaptiveCard",
  version: "1.0",
  body: [
    {
      type: "Container",
      items: [mockAccordianGroup],
    },
  ],
};
