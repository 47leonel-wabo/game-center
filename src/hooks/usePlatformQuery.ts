import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { PLATFORMS_KEY } from "../services/constants";
import { RAWGRequestResponse } from "./useData";
import { ParentPlatform } from "./usePlatforms";

const usePlatformQuery = () =>
  useQuery({
    queryKey: PLATFORMS_KEY,
    queryFn: () =>
      apiClient
        .get<RAWGRequestResponse<ParentPlatform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // cache this data for 24h
    //TODO: Must define constant array to be used as initial data
  });

export default usePlatformQuery;
