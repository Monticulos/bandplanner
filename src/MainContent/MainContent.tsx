import React, { ReactElement } from "react";
import classes from "./MainContent.module.css";
import { MemberList } from "./MemberList/MemberList.tsx";
import { Calendar } from "./Calendar/Calendar.tsx";

const memberData = [
  { name: "John Doe" },
  { name: "Sallie Ann" },
  { name: "Ola Nordmann" },
];

export const MainContent = (): ReactElement => {
  return (
    <main className={classes.mainContent}>
      <MemberList memberData={memberData} />
      <Calendar />
    </main>
  );
};
