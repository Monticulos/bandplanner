import React, { ReactElement, useRef } from "react";
import classes from "./MemberList.module.css";
import type { Member } from "../../../types/Member.ts";
import { MemberDialog } from "./MemberDialog/MemberDialog";
import { memberMockData } from "./testData/members";
import { PersonGroupIcon } from "../../../icons/PersonGroupIcon";
import { PlusIcon } from "../../../icons/PlusIcon";
import { Button } from "../../../components/Button/Button";

export const MemberList = (): ReactElement => {
  const addNewLabel = "Add new";

  const handleAddNew = () => {};

  return (
    <div className={classes.memberListContainer}>
      <h2>
        <PersonGroupIcon />
        Participants
      </h2>
      <Members />
      <Button label={addNewLabel} icon={<PlusIcon />} onClick={handleAddNew} />
    </div>
  );
};

const Members = (): ReactElement[] =>
  memberMockData.map((member) => (
    <>
      <div key={member.name}>
        <Member member={member} />
      </div>
    </>
  ));

type MemberProps = {
  member: Member;
};

const Member = ({ member }: MemberProps): ReactElement => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onMemberClick = () => {
    modalRef.current.showModal();
  };

  return (
    <div>
      <Button label={member.name} onClick={() => onMemberClick()} />
      <MemberDialog member={member} modalRef={modalRef} />
    </div>
  );
};
