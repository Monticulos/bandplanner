import React, { useState } from "react";
import { MemberListViewer } from "./MemberListViewer";
import { Card } from "../../Components";
import classes from "./Planner.module.css";

export type MemberListItem = {
  name: string;
  priority: number;
};

export type MemberList = MemberListItem[];

export const Planner = () => {
  const [memberList, setMemberList] = useState<MemberList>(startingMemberList);

  return (
    <div className={classes.planner}>
      <Card heading="Time table">
        <p>Table</p>
      </Card>
      <MemberListViewer memberList={memberList} setMemberList={setMemberList} />
    </div>
  );
};

const startingMemberList: MemberList = [
  {
    name: "Abbacus",
    priority: 100,
  },
  {
    name: "Beta",
    priority: 100,
  },
  {
    name: "Charlie",
    priority: 100,
  },
];
