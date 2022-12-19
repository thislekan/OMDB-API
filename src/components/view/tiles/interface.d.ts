import { Movie } from "../../../hooks/interface";

export interface TileProps {
  title?: string;
  poster?: string;
  genre?: string;
  imdbID?: string;
  actors?: string;
  language?: string;
  plot?: string;
  year?: string;
  runtime?: string;
  showDetails?: boolean;
  movieType?: string;
  idFromCache?: string;
}

export interface TileListProps {
  movieList?: Movie[];
  idFromCache?: string | undefined;
  setIdFromCache?: ((value: text) => void) | undefined;
}

export interface FullDetailsViewProps {
  setIdFromCache: ((value: string) => void) | undefined;
  idFromCache: string;
}
