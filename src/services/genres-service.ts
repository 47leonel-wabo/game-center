import createService from "./http-service";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const genreService = createService("/genres");

export default genreService;
