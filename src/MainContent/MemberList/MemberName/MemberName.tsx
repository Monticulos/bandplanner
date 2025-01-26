import React, { ReactElement } from "react";
import classes from "./MemberName.module.css";

type MemberNameProps = {
  name: string;
  onClick: () => void;
  isPressed: boolean;
};

export const MemberName = ({
  name,
  onClick: handleClick,
  isPressed,
}: MemberNameProps): ReactElement => {
  return (
    <button
      className={classes.memberButton}
      onClick={() => handleClick()}
      disabled={isPressed}
    >
      {name}
    </button>
  );
};
