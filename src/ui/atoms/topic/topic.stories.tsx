import Topic from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atom/Topic",
  component: Topic,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    text: "Please tell us about a family trip that didn’t go as planned.",
  },
} satisfies Meta<typeof Topic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
