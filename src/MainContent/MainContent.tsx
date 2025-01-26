import React, { ReactElement } from "react";
import classes from "./MainContent.module.css";
import { MemberList } from "./MemberList/MemberList.tsx";

export const MainContent = (): ReactElement => {
  return (
    <main className={classes.mainContent}>
      <MemberList />
    </main>
  );
};
