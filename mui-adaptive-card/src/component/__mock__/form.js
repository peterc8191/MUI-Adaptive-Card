import { mockCheckbox, mockRadioGroup, mockTestBlock, mockTextField } from "./mockComponents";

export const form = {
  type: "AdaptiveJson",
  version: "1.0",
  body: [
    {
      type: "Card",
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
          ],
        },
      ],
    },
  ],
};
