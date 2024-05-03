import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { BsPersonPlus, BsPlusLg, BsPeople } from "react-icons/bs";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import "../App.css";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    buttonType: {
      options: ["btn-default", "btn-hollow"],
      control: {
        type: "radio",
        labels: {
          "btn-default": "Solid",
          "btn-hollow": "Hollow",
        },
      },
    },
    icon: {
      options: [BsPersonPlus, BsPlusLg, HiMiniPaperAirplane, BsPeople],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const CreateClientButton: Story = {
  args: {
    icon: BsPersonPlus,
    title: "Create Client",
    buttonType: "btn-default",
  },
};

export const CreateProjectButton: Story = {
  args: {
    icon: BsPlusLg,
    title: "Create Project",
    buttonType: "btn-default",
  },
};

export const SubmitButton: Story = {
  args: {
    title: "Submit",
    buttonType: "btn-default",
  },
};

export const CommentButton: Story = {
  args: {
    icon: HiMiniPaperAirplane,
    title: "COMMENT",
    buttonType: "btn-default",
  },
};

export const AddTaskButton: Story = {
  args: {
    icon: BsPlusLg,
    title: "Add Task",
    buttonType: "btn-default",
  },
};

export const InviteMemberButton: Story = {
  args: {
    icon: BsPersonPlus,
    title: "Invite Member",
    buttonType: "btn-default",
  },
};

export const AddBIRButton: Story = {
  args: {
    icon: BsPlusLg,
    title: "Add BIR Forms",
    buttonType: "btn-hollow",
  },
};

export const ClientListButton: Story = {
  args: {
    icon: BsPeople,
    title: "Client List",
    buttonType: "btn-hollow",
  },
};
