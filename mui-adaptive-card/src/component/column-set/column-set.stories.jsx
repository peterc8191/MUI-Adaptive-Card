import ColumnSet from "./column-set";
import { mockColumnSet } from "../__mock__/mockComponents";

export default {
  component: ColumnSet,
  title: "Components/Column Set",
  tags: ["autodocs"],
};

export const Default = {
  args: { columns: mockColumnSet.columns },
};
