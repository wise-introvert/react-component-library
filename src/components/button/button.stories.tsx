import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Default = (): React.ReactNode => <Button onClick={action("button-click")}>Hello</Button>;
