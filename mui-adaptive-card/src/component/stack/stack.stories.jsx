import Stacked from "./stack";
import { mockTestBlock } from "../__mock__/mockComponents";

export default {
  component: Stacked,
  title: "Components/Stack",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    item: {
      spacing: 0,
      body: [mockTestBlock("Card Header", "bold", "body1"), mockTestBlock("Some content here", "", "body1")],
    },
  },
};
