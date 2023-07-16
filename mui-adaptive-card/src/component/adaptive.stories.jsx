import Adaptive from "./adaptive";
import { adaptiveJson } from "./__mock__/adaptive";
import { form } from "./__mock__/form";
import { accordian } from "./__mock__/accordian";
import { cards } from "./__mock__/columns";

export default {
  component: Adaptive,
  title: "Adaptive",
  tags: ["autodocs"],
};

export const Default = {
  args: { adaptiveJson: adaptiveJson },
};

export const Form = {
  args: { adaptiveJson: form },
};

export const Accordian = {
  args: { adaptiveJson: accordian },
};

export const Cards = {
  args: { adaptiveJson: cards },
};
