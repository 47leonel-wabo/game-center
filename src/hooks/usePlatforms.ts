import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string;
  year_start: number;
  year_end: number;
}

export interface ParentPlatform {
  id: number;
  name: string;
  slug: string;
  platform: Platform[];
}

const usePlatforms = () => useData<ParentPlatform>("/platforms/lists/parents");

export default usePlatforms;
