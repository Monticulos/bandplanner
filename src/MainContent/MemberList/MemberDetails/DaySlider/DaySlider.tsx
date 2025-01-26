import classes from "./DaySlider.module.css";
import React, { ChangeEvent, ReactElement, useState } from "react";
import { getColorClass } from "../../../../utils/utils.ts";
import { SliderValue } from "../../../../../types/SliderValue.ts";

export const DaySlider = ({ weekday }): ReactElement => {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div key={weekday} className={classes.formField}>
      <label htmlFor={weekday}>{weekday}</label>
      <input
        type="range"
        id={weekday}
        min="0"
        max="100"
        step="25"
        defaultValue={sliderValue}
        onChange={handleChange}
      />
      <HelpText sliderValue={sliderValue} />
    </div>
  );
};

const HelpText = ({ sliderValue }): ReactElement => {
  const helpText = getSliderHelpText(sliderValue);
  const boxColorClass = getColorClass(sliderValue);
  const className = `${classes.helpTextBox} ${classes[boxColorClass]}`;

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
