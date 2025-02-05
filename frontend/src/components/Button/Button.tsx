import React, { ButtonHTMLAttributes, ReactElement } from "react";
import classes from "./Button.module.css";

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  icon?: ReactElement;
  type: "button" | "submit" | "reset";
};

export const Button = ({
  label,
  type = "button",
  onClick: handleClick = () => {},
  icon,
}: ButtonProps): ReactElement => {
  return (
    <button
      className={classes.button}
      type={type}
      onClick={() => handleClick()}
    >
      {icon}
      {label}
    </button>
  );
};
