import { SliderValue } from "../types/SliderValue.ts";

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

export const placeScoreInBracket = (score: number): SliderValue => {
  if (score < 12) return 0;
  if (score < 37) return 25;
  if (score < 62) return 50;
  if (score < 87) return 75;
  else return 100;
};

// Inputting 3 will return 1, 2 or 3.
function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max + 1);
}

export function produceRandomTrueBetweenOneAndN(n: number): boolean {
  const randomInt = getRandomInt(n);
  return randomInt === 1;
}
