import { Movie } from "../../hooks/interface";

export interface SuggestionProps {
  title: string;
  imdbID: string;
  openSuggestions: (value: boolean) => void;
  setIdFromCache: ((value: string) => void) | undefined;
  setSearchTerm: ((value: string) => void) | undefined;
}

type toggleSuggestionFunc = (value: boolean) => void;

export interface SuggestionsListProps {
  openSuggestionsFn: toggleSuggestionFunc;
  filteredMovies: Movie[] | null | undefined;
  cachedMovies: Movie[] | null | undefined;
  setIdFromCache: ((text: string) => void) | undefined;
  setSearchTerm: ((value: string) => void) | undefined;
}

export interface SearchFormProps {
  openSuggestionsFn: toggleSuggestionFunc;
  setErrorMsg: ((value: string) => void) | undefined;
  setSearchedMovies: ((movies: Movie[]) => void) | undefined;
  searchTerm: string | undefined;
  setSearchTerm: ((value: string) => void) | undefined;
  errorMsg: string | undefined;
  setFilteredMovies: ((movies: Movie[]) => void) | undefined;
  cachedMovies: Movie[] | null | undefined;
  idFromCache: string | undefined;
  setIdFromCache: ((value: string) => void) | undefined;
}
