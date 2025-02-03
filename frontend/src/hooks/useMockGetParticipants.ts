import { useEffect, useState } from "react";
import { produceRandomTrueBetweenOneAndN } from "../utils/utils";
import { Participant } from "../types/Participant";
import { participantsMockData } from "../mocks/participantsMockData";

export const UseMockGetParticipants = () => {
  const [data, setData] = useState<Participant[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      if (produceRandomTrueBetweenOneAndN(10)) {
        setError("Error loading participants. Try reloading the page.");
        setData(null);
      } else {
        setError(null);
        setData(participantsMockData);
      }

      setIsLoading(false);
    }, 500);
  }, []);

  return { data, isLoading, error };
};
