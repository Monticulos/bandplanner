import { DayWeights } from "../../../types/DayWeights.ts";

export const dayWeightMock: DayWeights = {
  monday: { weight: 70 },
  tuesday: { weight: 80 },
  wednesday: { weight: 40 },
  thursday: {
    weight: 5,
    description: "Ola Nordmann is not available this day.",
  },
  friday: { weight: 70 },
  saturday: { weight: 20 },
  sunday: { weight: 20 },
};
