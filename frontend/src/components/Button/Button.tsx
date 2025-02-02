import React, { ReactElement } from "react";
import classes from "./Button.module.css";

export type ButtonProps = {
  label: string;
  onClick: () => void;
  icon?: ReactElement;
};

export const Button = ({
  label,
  onClick: handleClick,
  icon,
}: ButtonProps): ReactElement => {
  return (
    <button className={classes.button} onClick={() => handleClick()}>
      {icon}
      {label}
    </button>
  );
};
