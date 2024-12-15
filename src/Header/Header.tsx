import React from "react";
import classes from "./Header.module.css";
import { Heading } from "@digdir/designsystemet-react";

export const Header = () => {
  return (
    <header className={classes.header} data-color-scheme="dark">
      <Heading level={1}>Band practice planner</Heading>
    </header>
  );
};
