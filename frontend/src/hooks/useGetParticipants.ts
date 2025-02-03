import { useEffect, useState } from "react";
import { Participant } from "../types/Participant";
import { API_PATH_DEV } from "../constants/constants";

export const UseMockGetParticipants = () => {
  const [data, setData] = useState<Participant[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const url = `${API_PATH_DEV}/api/participants`;

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
