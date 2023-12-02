import { RAWGRequestResponse } from "../hooks/useData";
import createService from "./http-service";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const genreService = createService<RAWGRequestResponse<Genre>>("/genres");

export default genreService;
