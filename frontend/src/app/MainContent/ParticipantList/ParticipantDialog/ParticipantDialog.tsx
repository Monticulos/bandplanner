import React, { FormEvent, ReactElement, RefObject } from "react";
import classes from "./ParticipantDialog.module.css";
import { weekdays } from "../../../../constants/constants.ts";
import { DaySlider } from "./DaySlider/DaySlider.tsx";
import { Participant } from "../../../../types/Participant";

type ParticipantDialogProps = {
  modalRef: RefObject<HTMLDialogElement>;
  participant: Participant;
};

export const ParticipantDialog = ({
  modalRef,
  participant,
}: ParticipantDialogProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    modalRef.current.close();
  };

  const handleCancel = () => {
    modalRef.current.close();
  };

  return (
    <dialog ref={modalRef}>
      <ParticipantDetails
        participant={participant}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </dialog>
  );
};

type ParticipantDetailsProps = {
  participant: Participant;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
};

export const ParticipantDetails = ({
  participant,
  onSubmit: handleSubmit,
  onCancel: handleCancel,
}: ParticipantDetailsProps): ReactElement => {
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h1 className={classes.heading}>{participant.name}</h1>
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
