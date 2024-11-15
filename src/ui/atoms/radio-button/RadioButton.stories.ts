import RadioButton from "./radio";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atom/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    id: "radio-id",
    name: "better-me",
    value: "Better than me",
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
