import { useEffect, useState } from "react";
import { produceRandomTrueBetweenOneAndN } from "../utils/utils";
import { weeklyScoresMock } from "../mocks/weeklyScoresMock";
import { WeeklyScores } from "../types/WeeklyScores";
import { API_DEV_PATH } from "../constants/constants";

export const UseGetWeeklyScores = () => {
  const [data, setData] = useState<WeeklyScores | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const url = `${API_DEV_PATH}/scores/week/example`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        }
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    void fetchData();
  }, []);

  return { data, isLoading, error };
};
