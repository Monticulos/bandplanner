import { WeeklyScores } from "../../../types/WeeklyScores.ts";

export const weeklyScoresMock: WeeklyScores = {
  monday: { score: 70 },
  tuesday: { score: 80 },
  wednesday: { score: 40 },
  thursday: {
    score: 5,
    descriptions: [
      "Ola Nordmann is not available this day.",
      "Sallie Ann is not available this day.",
    ],
  },
  friday: { score: 70 },
  saturday: { score: 20 },
  sunday: { score: 20 },
};
