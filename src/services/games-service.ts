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
  metacritic: number;
}

export interface PlatformObject {
  platform: Platform;
}

interface Platform {
  id: number;
  slug: string;
  name: string;
}

export const cropImage = (
  originalImageLink: string,
  width: number,
  height: number
): string => {
  const seqTab: string[] = originalImageLink.split("games");
  return `${seqTab[0]}crop/${width}/${height}/games${seqTab[1]}`;
};

const gameService = createService("/games");

export default gameService;
