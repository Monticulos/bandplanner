import { useEffect, useState } from "react";
import { produceRandomTrueBetweenOneAndN } from "../utils/utils";
import { weeklyScoresMock } from "../app/MainContent/Calendar/weeklyScoresMock";
import { WeeklyScores } from "../types/WeeklyScores";

export const UseMockGetCalendarData = () => {
  const [data, setData] = useState<WeeklyScores | null>(null);
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
        setData(weeklyScoresMock);
      }

      setIsLoading(false);
    }, 500);
  }, []);

  return { data, isLoading, error };
};
