// Card_Camera.stories.js
import React from "react";
import CardCamera from "./Card_Camera";

export default {
  title: "Components/CardCamera",
  component: CardCamera,
};

const Template = (args) => <CardCamera {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Bank Entrance-front-view Camera1",
  recipes: "3 Recipes added",
  detection: "today, 4:45pm: Unidentified face detected",
  location: "Coimbatore branch",
};
