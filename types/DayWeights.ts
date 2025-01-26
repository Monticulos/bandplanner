export type DayWeight = {
  weight: number;
  description?: string;
};

export type DayWeights = {
  monday: DayWeight;
  tuesday: DayWeight;
  wednesday: DayWeight;
  thursday: DayWeight;
  friday: DayWeight;
  saturday: DayWeight;
  sunday: DayWeight;
};