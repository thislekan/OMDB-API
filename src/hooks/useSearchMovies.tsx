import { useState, useRef, useEffect } from "react";
import { useMoviesHook } from "../context/movieContext";
import { useCache } from "./useCache";
import { debounceFn } from "../utils/debounce";

export const useSearchMovies = () => {
  const { updateCacheFn } = useCache();
  const {
    setSearchedMovies,
    setIsFetching,
    setErrorMsg,
    searchTerm,
    setFilteredMovies,
  } = useMoviesHook();
  const [pageCount, setPageCount] = useState(1);
  const prevPageCount = useRef(1);
  const totalPage = useRef(0);
  const waitFor = pageCount > 1 ? 0 : 1500;

  const findMovie = async (value: string) => {
    setIsFetching && setIsFetching(true);
    setFilteredMovies && setFilteredMovies([]);
    try {
      const encodedTerm = encodeURIComponent(value);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=c05820ad&s=${encodedTerm}&page=${pageCount}`
      );
      const result = await response.json();
      setIsFetching && setIsFetching(false);

      if (result?.Search && setSearchedMovies) {
        setSearchedMovies(result.Search);
        updateCacheFn(result.Search);
        setErrorMsg && setErrorMsg("");
        const allPages = Number(result?.totalResults);
        if (allPages !== totalPage.current) totalPage.current = allPages;
      }

      if (result?.Error && setErrorMsg) {
        setErrorMsg(result.Error);
        setSearchedMovies && setSearchedMovies(null);
      }
    } catch (error) {
      setIsFetching && setIsFetching(false);
      console.error(error);
      throw error;
    }
  };

  const debouncedFindMovie = debounceFn((value) => findMovie(value), waitFor);

  useEffect(() => {
    if (pageCount && pageCount !== prevPageCount.current) {
      prevPageCount.current = pageCount;
      debouncedFindMovie(searchTerm);
    }
  }, [debouncedFindMovie, pageCount, searchTerm]);

  return {
    debouncedFindMovie,
    setPageCount,
    pageCount,
    totalPages: totalPage.current,
  };
};
