import React from "react";
import classes from "./Footer.module.css";
import { CodeIcon } from "../../icons/CodeIcon";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <a href="https://github.com/Monticulos/bandplanner" target="_blank">
        <CodeIcon />
        Band practice planner
      </a>
    </footer>
  );
};
