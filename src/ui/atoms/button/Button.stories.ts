import Button from "@/ui/atoms/button/button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  title: "Atom/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "secondary",
        "outline",
        "ghost",
        "link",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: { onClick: fn(), children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
