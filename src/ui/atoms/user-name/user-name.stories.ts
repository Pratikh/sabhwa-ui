import UserName from "./user-name";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atom/UserName",
  component: UserName,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    firstName: "Suresh",
    lastName: "Mohak",
    nickName: "Surya",
    countryCode: "in",
  },
} satisfies Meta<typeof UserName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
