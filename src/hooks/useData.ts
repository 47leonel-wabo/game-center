import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import createService from "../services/http-service";

// Because RAWG api return response with this shape
export interface RAWGRequestResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

// This custom hook generalize the data collection process for - genres and - games
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const { resultPromise, controller } =
      createService(endpoint).getAll<RAWGRequestResponse<T>>();
    resultPromise
      .then(({ data }) => setData(data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
