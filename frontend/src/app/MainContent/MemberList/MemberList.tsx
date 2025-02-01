import React, { ReactElement, useRef } from "react";
import classes from "./MemberList.module.css";
import { MemberNameButton } from "./MemberName/MemberNameButton.tsx";
import type { Member } from "../../../types/Member.ts";
import { MemberDialog } from "./MemberDetails/MemberDialog";
import { memberMockData } from "./testData/members";

export const MemberList = (): ReactElement => {
  return (
    <div className={classes.memberListContainer}>
      {memberMockData.map((member) => (
        <div key={member.name}>
          <Member member={member} />
        </div>
      ))}
    </div>
  );
};

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
      <MemberNameButton name={member.name} onClick={() => onMemberClick()} />
      <MemberDialog member={member} modalRef={modalRef} />
    </div>
  );
};
