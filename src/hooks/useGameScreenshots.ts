import { useQuery } from "@tanstack/react-query";
import API_Client from "../services/api-client";

interface Screenshot {
  height: number;
  id: number;
  image: string;
  is_deleted: boolean;
  width: number;
}

const useGameScreenshot = (gameId: number) => {
  const apiClient = new API_Client<Screenshot>(`/games${gameId}/screenshots`);
  return useQuery({
    queryKey: ["game-screenshot"],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useGameScreenshot;
