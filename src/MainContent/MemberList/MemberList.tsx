import React, { ReactElement } from "react";
import classes from "./MemberList.module.css";
import { MemberButton } from "./MemberButton/MemberButton.tsx";

export const MemberList = (): ReactElement => {
  const handleClickMember = (name: string): void => {
    alert(`${name} was clicked`);
  };

  return (
    <div className={classes.container}>
      <MemberButton name={"John Doe"} onClick={handleClickMember} />
      <MemberButton name={"Sallie Ann"} onClick={handleClickMember} />
      <MemberButton name={"Ola Nordmann"} onClick={handleClickMember} />
    </div>
  );
};
