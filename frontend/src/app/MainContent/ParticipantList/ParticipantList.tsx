import React, { ReactElement, useRef } from "react";
import classes from "./ParticipantList.module.css";
import type { Participant } from "../../../types/Participant.ts";
import { ParticipantDialog } from "./ParticipantDialog/ParticipantDialog";
import { PersonGroupIcon } from "../../../icons/PersonGroupIcon";
import { PlusIcon } from "../../../icons/PlusIcon";
import { Button } from "../../../components/Button/Button";
import { UseGetParticipants } from "../../../hooks/useGetParticipants";

export const ParticipantList = (): ReactElement => {
  return (
    <div className={classes.participantListContainer}>
      <h2>
        <PersonGroupIcon />
        Participants
      </h2>
      <Participants />
    </div>
  );
};

const Participants = (): ReactElement => {
  const { data, isLoading, error } = UseGetParticipants();
  const addNewLabel = "Add new";

  const handleAddNew = () => {};

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>{error}</span>;

  return (
    <>
      {data?.map((participant) => (
        <Participant key={participant.name} participant={participant} />
      ))}
      <Button label={addNewLabel} icon={<PlusIcon />} onClick={handleAddNew} />
    </>
  );
};

type ParticipantProps = {
  key: string;
  participant: Participant;
};

const Participant = ({ participant }: ParticipantProps): ReactElement => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onParticipantClick = () => {
    modalRef.current.showModal();
  };

  return (
    <>
      <Button label={participant.name} onClick={() => onParticipantClick()} />
      <ParticipantDialog participant={participant} modalRef={modalRef} />
    </>
  );
};
