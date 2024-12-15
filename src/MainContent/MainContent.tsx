import React, { ReactElement } from "react";
import classes from "./MainContent.module.css";
import { Planner } from "./Planner";

export const MainContent = (): ReactElement => {
  return (
    <main className={classes.mainContent}>
      <p>Welcome to the band practice planner.</p>
      <p>
        Here you and your bandmates can coordinate which time is best for
        practice! 🎸
      </p>
      <Planner />
    </main>
  );
};
