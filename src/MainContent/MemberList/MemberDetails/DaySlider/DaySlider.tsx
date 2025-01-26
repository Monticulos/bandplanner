import classes from "./DaySlider.module.css";
import React, { ChangeEvent, ReactElement, useState } from "react";

export const DaySlider = ({ weekday }): ReactElement => {
  const [sliderValue, setSliderValue] = useState<string>("50");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(event.target.value);
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
      <HelpTextBox sliderValue={sliderValue} />
    </div>
  );
};

const HelpTextBox = ({ sliderValue }): ReactElement => {
  const helpText = getSliderHelpText(sliderValue);
  const boxColorClass = getSliderColorClass(sliderValue);

  const className = `${classes.helpTextBox} ${classes[boxColorClass]}`;

  return (
    <div className={className}>
      <p>{helpText}</p>
    </div>
  );
};

type SliderValue = "0" | "25" | "50" | "75" | "100";

const getSliderHelpText = (sliderValue: SliderValue): string => {
  switch (sliderValue) {
    case "0":
      return "I can't attend";
    case "25":
      return "I may not come";
    case "50":
      return "Fits OK";
    case "75":
      return "Fits well";
    case "100":
      return "Fits perfectly";
  }
};

const getSliderColorClass = (sliderValue: SliderValue): string => {
  switch (sliderValue) {
    case "0":
      return "redBackground";
    case "25":
      return "orangeBackground";
    case "50":
      return "yellowBackground";
    case "75":
      return "lightGreenBackground";
    case "100":
      return "strongGreenBackground";
  }
};
