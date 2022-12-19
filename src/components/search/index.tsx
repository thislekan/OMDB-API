import { useState } from "react";
import { useMoviesHook } from "../../context/movieContext";
import { SearchForm } from "./search-form";
import { SuggestionsList } from "./suggestions";

export const SearchComponent = (): JSX.Element => {
  const {
    filteredMovies,
    setIdFromCache,
    setErrorMsg,
    setSearchedMovies,
    searchTerm,
    setSearchTerm,
    errorMsg,
    setFilteredMovies,
    cachedMovies,
    idFromCache,
  } = useMoviesHook();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const openSuggestions = (value: boolean) => setShowSuggestions(value);
  const conditions =
    showSuggestions && (filteredMovies?.length || cachedMovies?.length);
  return (
    <div className="search-div">
      <SearchForm
        openSuggestionsFn={openSuggestions}
        setErrorMsg={setErrorMsg}
        setSearchedMovies={setSearchedMovies}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        errorMsg={errorMsg}
        setFilteredMovies={setFilteredMovies}
        cachedMovies={cachedMovies}
        idFromCache={idFromCache}
        setIdFromCache={setIdFromCache}
      />
      {!!conditions && (
        <SuggestionsList
          openSuggestionsFn={setShowSuggestions}
          setIdFromCache={setIdFromCache}
          cachedMovies={cachedMovies}
          filteredMovies={filteredMovies}
          setSearchTerm={setSearchTerm}
        />
      )}
    </div>
  );
};
