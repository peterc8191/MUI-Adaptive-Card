export const mockTestBlock = (text, fontWeight = "", variant = "") => {
  return {
    type: "TextBlock",
    text: text,
    fontWeight: fontWeight,
    variant: variant,
  };
};

export const mockAccordian = (text, details) => {
  return {
    title: text,
    details: details,
  };
};

export const mockButton = (text, variant = "", size = "") => {
  return {
    type: "Button",
    text: text,
    variant: variant,
    size: size,
    href: "https://www.google.com",
  };
};

export const mockFactSet = {
  type: "FactSet",
  body: [
    { key: "Key 1", value: "Value 1" },
    { key: "Key 2", value: "Value 2" },
    { key: "Key 3", value: "Value 3" },
  ],
};

export const mockAccordianGroup = {
  type: "AccordianGroup",
  body: [mockAccordian("Accordian 1", "Accordian details"), mockAccordian("Accordian 2", "Accordian details")],
};

export const mockAvatarIcon = {
  type: "AvatarIcon",
  icon: "Cake",
};

export const mockTextField = (label, fullWidth = false, multiLine = false, rows = 2) => {
  return {
    type: "TextField",
    label: label,
    fullWidth: fullWidth,
    multiline: multiLine,
    rows: rows,
  };
};

export const mockColumnSet = {
  type: "ColumnSet",
  columns: [
    { type: "Column", justifyContent: "center", alignItems: "center", xsWidth: "3", body: [mockAvatarIcon] },
    {
      type: "Column",
      xsWidth: "9",
      body: [
        {
          type: "Stack",
          spacing: 0,
          body: [mockTestBlock("Card Header", "bold", "body1"), mockTestBlock("Some content here", "", "body1")],
        },
      ],
    },
  ],
};

export const mockCard = {
  type: "Card",
  items: [mockColumnSet, mockAccordianGroup],
};

export const mockContainer = {
  type: "Container",
  items: [
    mockFactSet,
    {
      type: "Button",
      text: "Container",
      variant: "outline",
      size: "small",
    },
  ],
};

export const mockCheckbox = {
  type: "Checkboxes",
  Checkboxes: [
    {
      text: "checkbox 1",
      checked: true,
    },
    {
      text: "checkbox 2",
      checked: false,
    },
    {
      text: "checkbox 3",
    },
  ],
};

export const mockRadioGroup = {
  type: "RadioGroup",
  label: "Radio label",
  defaultValue: "value 1",
  size: "small",
  items: [
    {
      value: "value 1",
      label: "label 1",
    },
    {
      value: "value 2",
      label: "label 2",
    },
    {
      value: "value 3",
      label: "label 3",
    },
  ],
};
