import React from "react";
import Forms from "./Form";

export default {
  title: "Components/Forms",
  component: Forms,
};

const Template = (args) => <Forms {...args} />;

export const Default = Template.bind({});
Default.args = {};
