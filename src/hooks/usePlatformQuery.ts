import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import API_Client, { RAWGRequestResponse } from "../services/api-client";
import { PLATFORMS_KEY } from "../services/constants";
import { ParentPlatform } from "../stores/store";

const apiClient = new API_Client<ParentPlatform>("/platforms/lists/parents");

const usePlatformQuery = () =>
  useQuery({
    queryKey: PLATFORMS_KEY,
    queryFn: () => apiClient.getAll({}),
    staleTime: ms("24h"), // cache this data for 24h
    //TODO: Must define constant array of predefined platforms to be used as initial data
  });

export default usePlatformQuery;
