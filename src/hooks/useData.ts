import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import { RAWGRequestResponse } from "../services/api-client";
import createService from "../services/http-service";

// This custom hook generalize the data collection process for - genres and - games
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(
    () => {
      setLoading(true);
      const resultPromise =
        createService<RAWGRequestResponse<T>>(endpoint).getAll(requestConfig);

      resultPromise
        .then((res) => setData(res.results))
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        })
        .finally(() => setLoading(false));

      // return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
