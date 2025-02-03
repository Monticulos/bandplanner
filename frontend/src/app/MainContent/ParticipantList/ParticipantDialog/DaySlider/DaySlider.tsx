import classes from "./DaySlider.module.css";
import React, { ChangeEvent, ReactElement, useState } from "react";
import { getColorClass } from "../../../../../utils/utils.ts";
import { SliderValue } from "../../../../../types/SliderValue.ts";
import { StringUtils } from "../../../../../utils/StringUtils.ts";

type DaySliderProps = {
  key: string;
  weekday: string;
};

export const DaySlider = ({ weekday }: DaySliderProps): ReactElement => {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const weekdayLabelText = StringUtils.toFirstUpper(weekday);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div key={weekday} className={classes.sliderContainer}>
      <label htmlFor={weekday}>{weekdayLabelText}</label>
      <input
        type="range"
        id={weekday}
        min="0"
        max="100"
        step="25"
        defaultValue={sliderValue}
        onChange={handleChange}
      />
      <HelpText sliderValue={sliderValue as SliderValue} />
    </div>
  );
};

type HelpTextProps = {
  sliderValue: SliderValue;
};

const HelpText = ({ sliderValue }: HelpTextProps): ReactElement => {
  const helpText = getSliderHelpText(sliderValue);
  const colorClass = getColorClass(sliderValue);
  const className = `${classes.helpTextContainer} ${classes[colorClass]}`;

  return (
    <div className={className}>
      <p>{helpText}</p>
    </div>
  );
};

const getSliderHelpText = (sliderValue: SliderValue): string => {
  switch (sliderValue) {
    case 0:
      return "I can't attend";
    case 25:
      return "I may not come";
    case 50:
      return "Fits OK";
    case 75:
      return "Fits well";
    case 100:
      return "Fits perfectly";
  }
};
