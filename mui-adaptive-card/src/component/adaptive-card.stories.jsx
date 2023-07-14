import AdaptiveCard from "./adaptive-card";
import { adaptiveJson } from "./__mock__/adaptive";
import { form } from "./__mock__/form";
import { accordian } from "./__mock__/accordian";

export default {
  component: AdaptiveCard,
  title: "AdaptiveCard",
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
