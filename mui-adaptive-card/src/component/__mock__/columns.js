import { mockCard } from "./mockComponents";

export const cards = {
  type: "AdaptiveJson",
  version: "1.0",
  body: [
    {
      type: "ColumnSet",
      columns: [
        {
          type: "Column",
          justifyContent: "center",
          alignItems: "center",
          xsWidth: "12",
          lgWidth: "4",
          body: [mockCard],
        },
        {
          type: "Column",
          justifyContent: "center",
          alignItems: "center",
          xsWidth: "12",
          lgWidth: "4",
          body: [mockCard],
        },
        {
          type: "Column",
          justifyContent: "center",
          alignItems: "center",
          xsWidth: "12",
          lgWidth: "4",
          body: [mockCard],
        },
      ],
    },
  ],
};
