import React, { ReactElement } from "react";
import classes from "./Calendar.module.css";
import { weekdays } from "../../../constants/constants.ts";
import { getColorClass, placeScoreInBracket } from "../../../utils/utils.ts";
import { StringUtils } from "../../../utils/StringUtils.ts";
import { WeeklyScores } from "../../../types/WeeklyScores.ts";
import { UseGetWeeklyScores } from "../../../hooks/useGetWeeklyScores";

export const Calendar = (): ReactElement => {
  const { data, isLoading, error } = UseGetWeeklyScores();

  return (
    <div className={classes.calendar}>
      {error && <span>{error}</span>}
      {isLoading && <span>Loading...</span>}
      {data &&
        weekdays.map((weekday) => (
          <CalendarDay
            key={weekday}
            weekday={weekday}
            score={data[weekday as keyof WeeklyScores].score}
            description={data[weekday as keyof WeeklyScores]?.description}
          />
        ))}
    </div>
  );
};

type CalendarDayProps = {
  key: string;
  weekday: string;
  score: number;
  description?: string[];
};

const CalendarDay = ({
  weekday,
  score,
  description,
}: CalendarDayProps): ReactElement => {
  const weekdayHeadingText = StringUtils.toFirstUpper(weekday);

  return (
    <div className={classes.calendarDay}>
      <h2>{weekdayHeadingText}</h2>
      <Score score={score} />
      {description && <DescriptionList descriptions={description} />}
    </div>
  );
};

type ScoreProps = {
  score: number;
};

const Score = ({ score }: ScoreProps) => {
  const scoreAsSliderValue = placeScoreInBracket(score);
  const colorClass = getColorClass(scoreAsSliderValue);

  return (
    <p>
      Day score:
      <span className={`${classes.score} ${classes[colorClass]}`}>{score}</span>
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
