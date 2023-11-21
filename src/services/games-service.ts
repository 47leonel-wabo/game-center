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

// const gameService = createService("/games");

// export default gameService;
