export interface PlatformObject {
  platform: Platform;
}

interface Platform {
  id: number;
  slug: string;
  name: string;
}

export const cropImage = (originalImageLink: string): string => {
  const seqTab: string[] = originalImageLink.split("games");
  if (seqTab.length !== 2) {
    // https://media.rawg.io/media/crop/600/400/screenshots/bf7/bf71c819eace914e6c42ae3ecb667308.jpg
    const otherSplit: string[] = originalImageLink.split("screenshots");
    return `${otherSplit[0]}crop/600/400/screenshots${otherSplit[1]}`;
  }
  return `${seqTab[0]}crop/600/400/games${seqTab[1]}`;
};

// const gameService = createService("/games");

// export default gameService;
