import React, { useState } from "react";
import classes from "./MemberListViewer.module.css";
import type { MemberList, MemberListItem } from "../Planner";
import { Button, Card, Heading, Textfield } from "@digdir/designsystemet-react";

type MemberListProps = {
  memberList: MemberList;
  setMemberList: (newMemberList: MemberList) => void;
};

export const MemberListViewer = ({
  memberList,
  setMemberList,
}: MemberListProps) => {
  const [newMember, setNewMember] = useState("");

  const handleAddMember = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newMember === "") return;

    const newItem: MemberListItem = {
      name: newMember,
      priority: 100,
    };
    const updatedMemberList = [...memberList, newItem];

    setMemberList(updatedMemberList);
    setNewMember("");
  };

  return (
    <>
      <Card>
        <Heading level={2}>Band members</Heading>
        <form onSubmit={handleAddMember} className={classes.form}>
          <Textfield
            type="text"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
            label={"Name"}
          />
          <Button type="submit">Add Member</Button>
        </form>
        <ul>
          {memberList.map((member, index) => (
            <li key={index}>
              {member.name} | {member.priority}
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};
