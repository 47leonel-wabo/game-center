import createService from "./http-service";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

export interface ResultGameRequest {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const gameService = createService("/games");

export default gameService;
