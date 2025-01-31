import React, { FormEvent, ReactElement, useState } from "react";
import classes from "./MemberList.module.css";
import { MemberDetails } from "./MemberDetails/MemberDetails.tsx";
import { MemberName } from "./MemberName/MemberName.tsx";
import type { Member } from "../../../types/Member.ts";

type MemberListProps = {
  memberData: Member[];
};

export const MemberList = ({ memberData }: MemberListProps): ReactElement => {
  return (
    <div className={classes.container}>
      {memberData.map((member) => (
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

export const Member = ({ member }: MemberProps): ReactElement => {
  const [shouldShowDetails, setShouldShowDetails] = useState<boolean>(false);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShouldShowDetails(false);
  };

  return (
    <div className={classes.member}>
      <MemberName
        name={member.name}
        onClick={() => setShouldShowDetails(true)}
        disabled={shouldShowDetails}
      />
      {shouldShowDetails && (
        <MemberDetails
          member={member}
          onSubmit={handleFormSubmit}
          onCancel={() => setShouldShowDetails(false)}
        />
      )}
    </div>
  );
};
