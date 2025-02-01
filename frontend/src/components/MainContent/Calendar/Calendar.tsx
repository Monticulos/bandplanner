import React, { ReactElement } from "react";
import classes from "./Calendar.module.css";
import { weekdays } from "../../../constants/constants.ts";
import { dayWeightMock } from "./dayWeightMock.ts";
import { getColorClass, placeWeightInBracket } from "../../../utils/utils.ts";
import { StringUtils } from "../../../utils/StringUtils.ts";
import { DayWeights } from "../../../types/DayWeights.ts";

export const Calendar = (): ReactElement => {
  return (
    <div className={classes.calendar}>
      {weekdays.map((weekday) => (
        <CalendarDay
          key={weekday}
          weekday={weekday}
          weight={dayWeightMock[weekday as keyof DayWeights].weight}
          descriptions={
            dayWeightMock[weekday as keyof DayWeights]?.descriptions
          }
        />
      ))}
    </div>
  );
};

type CalendarDayProps = {
  key: string;
  weekday: string;
  weight: number;
  descriptions?: string[];
};

const CalendarDay = ({
  weekday,
  weight,
  descriptions,
}: CalendarDayProps): ReactElement => {
  const weekdayHeading = StringUtils.toFirstUpper(weekday);

  return (
    <div className={classes.calendarDay}>
      <div className={classes.headingWithWeight}>
        <h3>{weekdayHeading}</h3>
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
    {descriptions.map((description, key) => (
      <li key={key}>{description}</li>
    ))}
  </ul>
);
