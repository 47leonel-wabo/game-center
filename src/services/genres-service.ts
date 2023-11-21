import createService from "./http-service";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface ResultGenreRequest {
  count: number;
  next: string;
  previous: string;
  results: Genre[];
}

const genreService = createService("/genres");

export default genreService;
