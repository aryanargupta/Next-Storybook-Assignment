"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Page from "../components/Page";
import Forms from "../components/Form";
import Charts from "../components/Chart";
import CardCamera from "../components/Card_Camera";
import CardManage from "../components/Card_Manage";
import CustomTable from "../components/Table";

const data = [
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
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Bipolar Factory Internship Project Showcase</h1>
      <p>
        This application showcases the work done as part of the Bipolar Factory
        company's internship assignment.
      </p>
      <br />
      <br />

      <h2>Page Component</h2>
      <Page />
      <br />
      <br />
      <h2>Form Component</h2>
      <Forms />
      <br />
      <br />
      <h2>Chart Component</h2>
      <Charts />
      <br />
      <br />
      <h2>Card Camera Component</h2>
      <CardCamera
        title="Bank Entrance-front-view Camera1"
        recipes="3 Recipes added"
        detection="today, 4:45pm: Unidentified face detected"
        location="Coimbatore branch"
      />
      <br />
      <br />
      <h2>Card Manage Component</h2>
      <CardManage title="Recipe Management" />
      <br />
      <br />
      <h2>Custom Table Component</h2>
      <CustomTable data={data} />
      <hr />
    </main>
  );
}
