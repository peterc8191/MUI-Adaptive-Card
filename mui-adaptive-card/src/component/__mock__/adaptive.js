import { mockButton, mockColumnSet, mockContainer } from "./mockComponents";

export const adaptiveJson = {
  type: "AdaptiveCard",
  version: "1.0",
  body: [
    {
      type: "Container",
      items: [
        mockColumnSet,
        mockContainer,
        {
          type: "Button",
          text: "Button Example",
          variant: "outline",
          size: "small",
        },
        {
          type: "Link",
          text: "Link example",
        },
        {
          type: "Stack",
          spacing: 1,
          body: [mockButton("Value 1", "contained"), mockButton("Value 1", "contained")],
        },
      ],
    },
  ],
};
