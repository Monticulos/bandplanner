import React, { ReactElement } from "react";
import classes from "./MemberList.module.css";

export const MemberList = (): ReactElement => {
  return (
    <div className={classes.container}>
      <p>John Doe</p>
    </div>
  );
};
