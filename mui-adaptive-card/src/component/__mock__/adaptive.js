import { mockColumnSet, mockContainer, mockTestBlock } from "./mockComponents";

export const adaptiveJson = {
  type: "AdaptiveJson",
  version: "1.0",
  body: [
    {
      type: "Card",
      items: [
        mockColumnSet,
        mockContainer,
        mockTestBlock("Actions", "bold", "body1"),
        {
          type: "Stack",
          spacing: 1,
          body: [
            {
              type: "Link",
              text: "Link example",
              href: "https://www.google.com",
            },
            {
              type: "Link",
              text: "Link example 1",
              href: "https://www.google.com",
            },
            {
              type: "Link",
              text: "Link example 2",
              href: "https://www.google.com",
            },
            {
              type: "Link",
              text: "Link example 3",
              href: "https://www.google.com",
            },
          ],
        },
      ],
    },
  ],
};
