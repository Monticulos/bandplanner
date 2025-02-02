import React from "react";
import classes from "./Header.module.css";
import { CalendarIcon } from "../../icons/CalendarIcon";

export const Header = () => {
  return (
    <header className={classes.header}>
      <h1>
        <CalendarIcon />
        Band practice planner
      </h1>
    </header>
  );
};
