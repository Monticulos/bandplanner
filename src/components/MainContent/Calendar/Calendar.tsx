import React, { ReactElement } from "react";
import classes from "./Calendar.module.css";
import { weekdays } from "../../../constants/constants.ts";
import { dayWeightMock } from "./dayWeightMock.ts";
import { getColorClass, placeWeightInBracket } from "../../../utils/utils.ts";

export const Calendar = (): ReactElement => {
  return (
    <div className={classes.calendar}>
      {weekdays.map((weekday) => (
        <CalendarDay
          weekday={weekday}
          weight={dayWeightMock[weekday.toLowerCase()].weight}
          descriptions={dayWeightMock[weekday.toLowerCase()]?.descriptions}
        />
      ))}
    </div>
  );
};

type CalendarDayProps = {
  weekday: string;
  weight: number;
  descriptions?: string[];
};

const CalendarDay = ({
  weekday,
  weight,
  descriptions,
}: CalendarDayProps): ReactElement => {
  return (
    <div className={classes.calendarDay}>
      <div className={classes.headingWithWeight}>
        <h3>{weekday}</h3>
        <Weight weight={weight} />
      </div>
      {descriptions && <DescriptionList descriptions={descriptions} />}
    </div>
  );
};

type WeightProps = {
  weight: number;
};

const Weight = ({ weight }: WeightProps) => {
  const weightAsSliderValue = placeWeightInBracket(weight);
  const colorClass = getColorClass(weightAsSliderValue);

  return (
    <p>
      Day weight:
      <span className={`${classes.weight} ${classes[colorClass]}`}>
        {weight}
      </span>
    </p>
  );
};

type DescriptionListProps = {
  descriptions: string[];
};

const DescriptionList = ({
  descriptions,
}: DescriptionListProps): ReactElement => (
  <ul className={classes.descriptionList}>
    {descriptions.map((description) => (
      <li>{description}</li>
    ))}
  </ul>
);
