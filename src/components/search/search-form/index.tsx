import { BaseSyntheticEvent } from "react";
import { useSearchMovies } from "../../../hooks/useSearchMovies";
import { SearchFormProps } from "../interface";

export const SearchForm = ({
  openSuggestionsFn,
  setErrorMsg,
  setSearchedMovies,
  searchTerm,
  setSearchTerm,
  errorMsg,
  setFilteredMovies,
  cachedMovies,
  idFromCache,
  setIdFromCache,
}: SearchFormProps) => {
  const { debouncedFindMovie } = useSearchMovies();

  const trackChanges = (e: BaseSyntheticEvent) => {
    if (idFromCache) return;
    const text = e.target.value;
    setSearchTerm && setSearchTerm(text);
    if (cachedMovies?.length) {
      openSuggestionsFn(true);
      const filtered = cachedMovies.filter((movie) =>
        movie.Title.toLowerCase().includes(text.toLowerCase())
      );

      filtered.length && setFilteredMovies && setFilteredMovies([...filtered]);
      !filtered.length && debouncedFindMovie(text);
    } else if (text.length > 1) {
      debouncedFindMovie(text);
    }
    if (errorMsg && setErrorMsg && !text) setErrorMsg("");
    if (!text) {
      openSuggestionsFn(false);
      setFilteredMovies && setFilteredMovies([]);
    }
  };

  const toggleSuggestions = (value: boolean) => () => {
    if (value === true) return openSuggestionsFn(value);
    return setTimeout(() => openSuggestionsFn(value), 250);
  };
  const clearInputField = () => {
    setSearchTerm && setSearchTerm("");
    setErrorMsg && setErrorMsg("");
    setSearchedMovies && setSearchedMovies([]);
    setIdFromCache && setIdFromCache("");
  };

  const concludeSearch = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (searchTerm) debouncedFindMovie(searchTerm);
  };

  return (
    <div className="search-form">
      <form action="" onSubmit={concludeSearch}>
        <div className="search-form__input-div">
          <input
            type="text"
            name="search"
            id="search"
            value={searchTerm || idFromCache}
            onChange={trackChanges}
            onFocus={toggleSuggestions(true)}
            onBlur={toggleSuggestions(false)}
            placeholder="Enter movie title"
          />
          <button className="delete-input" onClick={clearInputField}>
            X
          </button>
        </div>
      </form>
    </div>
  );
};
