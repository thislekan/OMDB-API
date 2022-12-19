import { createContext, useState, useContext } from "react";
import { Movie } from "../hooks/interface";
import { MovieContextProps, MovieContextValues } from "./interface";

const MovieContext = createContext<MovieContextValues | null>(null);

export const MovieContextProvider = ({ children }: MovieContextProps) => {
  const [searchedMovies, setSearchedMovies] = useState<Movie[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [cachedMovies, setCachedMovies] = useState<Movie[] | null>(null);
  const [idFromCache, setIdFromCache] = useState("");

  return (
    <MovieContext.Provider
      value={{
        searchedMovies,
        setSearchedMovies,
        isFetching,
        setIsFetching,
        errorMsg,
        setErrorMsg,
        searchTerm,
        setSearchTerm,
        filteredMovies,
        setFilteredMovies,
        cachedMovies,
        setCachedMovies,
        idFromCache,
        setIdFromCache,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMoviesHook = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error(
      "useMoviesHooke must be used within a MovieContextProvider"
    );
  }
  return { ...context };
};
