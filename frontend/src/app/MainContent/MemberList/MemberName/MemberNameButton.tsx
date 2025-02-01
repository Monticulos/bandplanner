import React, { ReactElement } from "react";
import classes from "./MemberName.module.css";

export type MemberNameButtonProps = {
  name: string;
  onClick: () => void;
};

export const MemberNameButton = ({
  name,
  onClick: handleClick,
}: MemberNameButtonProps): ReactElement => {
  return (
    <button className={classes.memberButton} onClick={() => handleClick()}>
      {name}
    </button>
  );
};
