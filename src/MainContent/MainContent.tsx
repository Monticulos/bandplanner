import React, { ReactElement } from "react";
import classes from "./MainContent.module.css";

export const MainContent = (): ReactElement => {
  return (
    <main className={classes.mainContent}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Paragraph</p>
    </main>
  );
};
