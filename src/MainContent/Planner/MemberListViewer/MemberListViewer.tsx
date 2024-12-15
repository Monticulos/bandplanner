import React, { useState } from "react";
import type { MemberList, MemberListItem } from "../Planner";
import { Card } from "../../../Components/Card";

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
      <Card heading="Band members">
        <>
          <form onSubmit={handleAddMember}>
            <input
              type="text"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
            />
            <button type="submit">Add Member</button>
          </form>
          <ul>
            {memberList.map((member, index) => (
              <li key={index}>
                {member.name} | {member.priority}
              </li>
            ))}
          </ul>
        </>
      </Card>
    </>
  );
};
