import { SliderValue } from "../../types/SliderValue.ts";

export const getColorClass = (sliderValue: SliderValue): string => {
  switch (sliderValue) {
    case 0:
      return "red";
    case 25:
      return "orange";
    case 50:
      return "yellow";
    case 75:
      return "lightGreen";
    case 100:
      return "strongGreen";
  }
};

export const placeWeightInBracket = (weight: number): SliderValue => {
  if (weight < 12) return 0;
  if (weight < 37) return 25;
  if (weight < 62) return 50;
  if (weight < 87) return 75;
  if (weight >= 87) return 100;
};
