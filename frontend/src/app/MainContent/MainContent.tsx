import React, { ReactElement } from "react";
import classes from "./MainContent.module.css";
import { MemberList } from "./MemberList/MemberList.tsx";
import { Calendar } from "./Calendar/Calendar.tsx";

export const MainContent = (): ReactElement => {
  return (
    <main className={classes.mainContent}>
      <Calendar />
      <MemberList />
    </main>
  );
};
