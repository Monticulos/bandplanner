import { DailyScore } from "./DailyScore";

export type WeeklyScores = {
  monday: DailyScore;
  tuesday: DailyScore;
  wednesday: DailyScore;
  thursday: DailyScore;
  friday: DailyScore;
  saturday: DailyScore;
  sunday: DailyScore;
};
