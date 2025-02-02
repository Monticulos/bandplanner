import React, { ReactElement, useRef } from "react";
import classes from "./ParticipantList.module.css";
import type { Participant } from "../../../types/Participant.ts";
import { ParticipantDialog } from "./ParticipantDialog/ParticipantDialog";
import { participantsMockData } from "./testData/participantsMockData";
import { PersonGroupIcon } from "../../../icons/PersonGroupIcon";
import { PlusIcon } from "../../../icons/PlusIcon";
import { Button } from "../../../components/Button/Button";

export const ParticipantList = (): ReactElement => {
  const addNewLabel = "Add new";

  const handleAddNew = () => {};

  return (
    <div className={classes.participantListContainer}>
      <h2>
        <PersonGroupIcon />
        Participants
      </h2>
      <Participants />
      <Button label={addNewLabel} icon={<PlusIcon />} onClick={handleAddNew} />
    </div>
  );
};

const Participants = (): ReactElement[] =>
  participantsMockData.map((participant) => (
    <div key={participant.name}>
      <Participant participant={participant} />
    </div>
  ));

type ParticipantProps = {
  participant: Participant;
};

const Participant = ({ participant }: ParticipantProps): ReactElement => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onParticipantClick = () => {
    modalRef.current.showModal();
  };

  return (
    <div>
      <Button label={participant.name} onClick={() => onParticipantClick()} />
      <ParticipantDialog participant={participant} modalRef={modalRef} />
    </div>
  );
};
