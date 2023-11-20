import createService from "./http-service";

export interface ResultGameRequest {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: PlatformObject[];
}

export interface PlatformObject {
  platform: Platform;
}

interface Platform {
  id: number;
  slug: string;
  name: string;
}

const gameService = createService("/games");

export default gameService;
