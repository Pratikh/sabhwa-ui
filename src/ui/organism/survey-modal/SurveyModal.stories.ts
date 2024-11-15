import SurveyModal from "./survey-modal";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Organism/SurveyModal",
  component: SurveyModal,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    id: "radio-id",
    name: "better-me",
    value: "Better than me",
  },
} satisfies Meta<typeof SurveyModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
