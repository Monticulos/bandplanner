import React, { ReactElement } from "react";
import classes from "./Card.module.css";

type CardProps = {
  heading: string;
  children: ReactElement;
};

export const Card = ({ heading, children }: CardProps) => {
  return (
    <div className={classes.card}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
};
