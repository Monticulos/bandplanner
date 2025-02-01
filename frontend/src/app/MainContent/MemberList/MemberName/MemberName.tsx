import React, { ReactElement } from "react";
import classes from "./MemberName.module.css";

export type MemberNameProps = {
  name: string;
  onClick: () => void;
  disabled: boolean;
};

export const MemberName = ({
  name,
  onClick: handleClick,
  disabled,
}: MemberNameProps): ReactElement => {
  return (
    <button
      className={classes.memberButton}
      onClick={() => handleClick()}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
