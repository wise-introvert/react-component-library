import * as React from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import { Button, ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
  onClick: action("clicked"),
};
Dark.story = {
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Light = Template.bind({});
Light.args = {
  dark: false,
  onClick: action("clicked"),
};
Light.story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
};
