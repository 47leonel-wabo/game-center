import axiosInstance from "./api-client";

export interface Game {
  id: number;
  name: string;
}

interface ResultGameRequest {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

class GameService {
  getGames() {
    const controller = new AbortController();
    const resultPromise = axiosInstance.get<ResultGameRequest>("/games", {
      signal: controller.signal,
    });
    return { resultPromise, controller };
  }
}

export default new GameService();
