import Tuple from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atom/Tuple",
  component: Tuple,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "small"],
      control: { type: "radio" },
    },
  },
  args: {
    text: "Topic",
    variant: "default",
    size: "default",
  },
} satisfies Meta<typeof Tuple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
