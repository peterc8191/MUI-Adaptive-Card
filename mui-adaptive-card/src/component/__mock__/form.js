import { mockAccordianGroup, mockCheckbox, mockRadioGroup, mockTestBlock, mockTextField } from "./mockComponents";

export const form = {
  type: "AdaptiveCard",
  version: "1.0",
  body: [
    {
      type: "Container",
      items: [
        {
          type: "Container",
          items: [
            mockTestBlock("Example form", "bold"),
            mockTextField("Placeholder"),
            mockTextField("Placeholder full width", true),
            mockTextField("Placeholder multiline", true, true, 4),
            mockCheckbox,
            mockRadioGroup,
            mockAccordianGroup,
          ],
        },
      ],
    },
  ],
};
