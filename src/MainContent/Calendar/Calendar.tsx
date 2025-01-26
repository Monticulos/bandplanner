import React, { ReactElement } from "react";
import classes from "./Calendar.module.css";
import { weekdays } from "../../../constants/constants.ts";
import { dayWeightMock } from "./dayWeightMock.ts";
import { getColorClass, placeWeightInBracket } from "../../utils/utils.ts";

export const Calendar = (): ReactElement => {
  return (
    <div className={classes.calendar}>
      {weekdays.map((weekday) => (
        <CalendarDay
          weekday={weekday}
          weight={dayWeightMock[weekday.toLowerCase()].weight}
          description={dayWeightMock[weekday.toLowerCase()]?.description}
        />
      ))}
    </div>
  );
};

type CalendarDayProps = {
  weekday: string;
  weight: number;
  description?: string;
};

const CalendarDay = ({
  weekday,
  weight,
  description,
}: CalendarDayProps): ReactElement => {
  return (
    <div className={classes.calendarDay}>
      <h3 className={classes.dayHeading}>{weekday}</h3>
      <Weight weight={weight} />
      {description && <p>{description}</p>}
    </div>
  );
};

const Weight = ({ weight }) => {
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
