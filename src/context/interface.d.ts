import { Movie } from "../hooks/interface";

export interface MovieContextProps {
  children: React.ReactNode;
  setIdFromCache?: ((value: string) => void) | undefined;
}

export interface MovieContextValues {
  searchedMovies: Movie[] | null;
  setSearchedMovies: (movies: Movie[] | null) => void;
  isFetching: boolean;
  setIsFetching: (value: boolean) => void;
  errorMsg: string;
  setErrorMsg: (value: string) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filteredMovies: Movie[];
  setFilteredMovies: (list: Movie[]) => void;
  cachedMovies: Movie[] | null;
  setCachedMovies: (list: Movie[]) => void;
  idFromCache: string;
  setIdFromCache: (value: string) => void;
}
