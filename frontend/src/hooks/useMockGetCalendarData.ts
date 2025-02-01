import { useEffect, useState } from "react";
import { produceRandomTrueBetweenOneAndN } from "../utils/utils";
import { dayWeightMock } from "../app/MainContent/Calendar/dayWeightMock";
import { DayWeights } from "../types/DayWeights";

export const UseMockGetCalendarData = () => {
  const [data, setData] = useState<DayWeights>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      if (produceRandomTrueBetweenOneAndN(10)) {
        setError("Error loading values. Try reloading the page.");
        setData(null);
      } else {
        setError(null);
        setData(dayWeightMock);
      }

      setIsLoading(false);
    }, 500);
  }, []);

  return { data, isLoading, error };
};
