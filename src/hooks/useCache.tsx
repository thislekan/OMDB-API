import { useEffect } from "react";
import { useMoviesHook } from "../context/movieContext";
import { Movie } from "./interface";

const getMoviesFromCache = (): Movie[] => {
  const moviesList = JSON.parse(localStorage.getItem("cachedMovies") || "[]");
  return moviesList || [];
};

export const useCache = () => {
  const { setCachedMovies } = useMoviesHook();

  const updateCacheFn = (newMovies: Movie[]) => {
    let list: Movie[] = getMoviesFromCache();
    if (list.length && newMovies.length) {
      for (let i = 0; i < newMovies.length; i++) {
        const newMovie = newMovies[i];
        const foundMovie = list.find(
          (entry) => entry.imdbID === newMovie.imdbID
        );
        if (!foundMovie) list.push(newMovie);
      }
    } else {
      list = newMovies;
    }
    setCachedMovies && setCachedMovies([...list]);
    const stringifiedList = JSON.stringify(list);
    localStorage.setItem("cachedMovies", stringifiedList);
  };

  useEffect(() => {
    let movies: Movie[] = getMoviesFromCache();
    if (movies.length && setCachedMovies) {
      setCachedMovies(movies);
    }
  }, [setCachedMovies]);

  return { updateCacheFn };
};
