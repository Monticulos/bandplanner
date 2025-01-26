import React, { ReactElement } from "react";
import classes from "./MemberButton.module.css";

type MemberButtonProps = {
  name: string;
  onClick: (name: string) => void;
};

export const MemberButton = ({
  name,
  onClick: handleClick,
}: MemberButtonProps): ReactElement => {
  return (
    <button className={classes.memberButton} onClick={() => handleClick(name)}>
      {name}
    </button>
  );
};
