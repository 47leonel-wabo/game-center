import { useQuery } from "@tanstack/react-query";
import API_Client from "../services/api-client";

interface GameTrailer {
  id: number;
  name: string;
  preview: string;
  data: any;
}

interface DataObject {}

const useGameTrailer = (gameId: number) => {
  const apiClient = new API_Client(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["game-trailer", gameId],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useGameTrailer;
