import React, { FormEvent, ReactElement } from "react";
import classes from "./MemberDetails.module.css";
import { weekdays } from "../../../../constants/constants.ts";
import { DaySlider } from "./DaySlider/DaySlider.tsx";
import { Member } from "../../../../types/Member.ts";

type MemberDetailsProps = {
  member: Member;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
};

export const MemberDetails = ({
  onSubmit: handleSubmit,
  onCancel: handleCancel,
}: MemberDetailsProps): ReactElement => {
  return (
    <>
      <form onSubmit={handleSubmit} className={classes.memberForm}>
        {weekdays.map((weekday) => (
          <DaySlider weekday={weekday} />
        ))}
        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
        <button
          type="button"
          className={classes.submitButton}
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
      </form>
    </>
  );
};
