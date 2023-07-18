import FactSet from "./fact-set";
import { mockFactSet } from "../__mock__/mockComponents";

export default {
  component: FactSet,
  title: "Components/Fact Set",
  tags: ["autodocs"],
};

export const Default = {
  args: { items: mockFactSet.body },
};
