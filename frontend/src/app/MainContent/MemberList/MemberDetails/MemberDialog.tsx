import React, { FormEvent, ReactElement, RefObject } from "react";
import classes from "./MemberDialog.module.css";
import { weekdays } from "../../../../constants/constants.ts";
import { DaySlider } from "./DaySlider/DaySlider.tsx";
import { Member } from "../../../../types/Member.ts";

type MemberDialogProps = {
  modalRef: RefObject<HTMLDialogElement>;
  member: Member;
};

export const MemberDialog = ({ modalRef, member }: MemberDialogProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    modalRef.current.close();
  };

  const handleCancel = () => {
    modalRef.current.close();
  };

  return (
    <dialog ref={modalRef}>
      <MemberDetails
        member={member}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </dialog>
  );
};

type MemberDetailsProps = {
  member: Member;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
};

export const MemberDetails = ({
  member,
  onSubmit: handleSubmit,
  onCancel: handleCancel,
}: MemberDetailsProps): ReactElement => {
  return (
    <form onSubmit={handleSubmit} className={classes.memberForm}>
      <h1 className={classes.memberHeading}>{member.name}</h1>
      {weekdays.map((weekday) => (
        <DaySlider key={weekday} weekday={weekday} />
      ))}
      <div className={classes.buttonGroup}>
        <button type="submit" className={classes.button}>
          Submit
        </button>
        <button
          type="button"
          className={classes.button}
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
