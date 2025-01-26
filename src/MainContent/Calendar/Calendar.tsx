import React, { ReactElement } from "react";
import classes from "./Calendar.module.css";
import { weekdays } from "../../../constants/constants.ts";

export const Calendar = (): ReactElement => {
  return (
    <div className={classes.calendar}>
      {weekdays.map((weekday) => (
        <CalendarDay weekday={weekday} />
      ))}
    </div>
  );
};

const CalendarDay = ({ weekday }): ReactElement => {
  return (
    <div className={classes.calendarDay}>
      <h3 className={classes.dayHeading}>{weekday}</h3>
    </div>
  );
};
