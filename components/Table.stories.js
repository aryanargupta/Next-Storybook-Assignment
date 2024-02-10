import React from "react";
import CustomTable from "./Table";

export default {
  title: "Components/Table",
  component: CustomTable,
  argTypes: {
    data: { control: "array" },
  },
  parameters: {
    docs: {
      source: {
        code: `
          <CustomTable
            data={[
              { name: 'Peter John', email: 'Peter@gmail.com', role: 'Owner', locations: 'Adam Stall', locationSubtitle: 'Coimbatore', lastActive: 'Sep 13, 2023 5:51 PM', permissions: 'All Permissions', status: 'Active' },
              { name: 'Lingan', email: 'Lin@gmail.com', role: 'Executive', locations: 'MMDA', locationSubtitle: 'Coimbatore', lastActive: 'Today, 2023 2:11 PM', permissions: '3 Permissions', status: 'Active' },
              { name: 'Adam', email: 'Adam@gmail.com', role: 'Admin', locations: 'DEO Office', locationSubtitle: 'Delhi', lastActive: 'Sep 13, 2023 5:51 PM', permissions: '6 Permissions', status: 'Active' },
              { name: 'Smith', email: 'Smith@gmail.com', role: 'Supervisor', locations: 'Plot Hub', locationSubtitle: 'Coimbatore', lastActive: 'Sep 13, 2023 5:51 PM', permissions: '5 Permissions', status: 'Active' },
              { name: 'John Abraham', email: 'Jhon@gmail.com', role: 'Executive', locations: 'CA', locationSubtitle: 'Coimbatore', lastActive: 'Sep 13, 2023 5:51 PM', permissions: '2 Permissions', status: 'Inactive' },
            ]}
          />
        `,
      },
    },
  },
};

const Template = (args) => <CustomTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      name: "Peter John",
      email: "Peter@gmail.com",
      role: "Owner",
      locations: "Adam Stall",
      locationSubtitle: "Coimbatore",
      lastActive: "Sep 13, 2023 5:51 PM",
      permissions: "All Permissions",
      status: "Active",
    },
    {
      name: "Lingan",
      email: "Lin@gmail.com",
      role: "Executive",
      locations: "MMDA",
      locationSubtitle: "Coimbatore",
      lastActive: "Today, 2023 2:11 PM",
      permissions: "3 Permissions",
      status: "Active",
    },
    {
      name: "Adam",
      email: "Adam@gmail.com",
      role: "Admin",
      locations: "DEO Office",
      locationSubtitle: "Delhi",
      lastActive: "Sep 13, 2023 5:51 PM",
      permissions: "6 Permissions",
      status: "Active",
    },
    {
      name: "Smith",
      email: "Smith@gmail.com",
      role: "Supervisor",
      locations: "Plot Hub",
      locationSubtitle: "Coimbatore",
      lastActive: "Sep 13, 2023 5:51 PM",
      permissions: "5 Permissions",
      status: "Active",
    },
    {
      name: "John Abraham",
      email: "Jhon@gmail.com",
      role: "Executive",
      locations: "CA",
      locationSubtitle: "Coimbatore",
      lastActive: "Sep 13, 2023 5:51 PM",
      permissions: "2 Permissions",
      status: "Inactive",
    },
  ],
};
