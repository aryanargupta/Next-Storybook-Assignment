// Card_manage.stories.js
import React from "react";
import CardManage from "./Card_Manage";

export default {
  title: "Components/CardManage",
  component: CardManage,
};

const Template = (args) => <CardManage {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Recipe Management",
};
