import { SuggestionsListProps } from "../interface";
import { Suggestion } from "./suggestion";

export const SuggestionsList = ({
  openSuggestionsFn,
  filteredMovies,
  cachedMovies,
  setIdFromCache,
  setSearchTerm,
}: SuggestionsListProps): JSX.Element => {
  const suggestedList = filteredMovies?.length ? filteredMovies : cachedMovies;
  return (
    <div className="suggestions-list">
      <ul>
        {suggestedList?.length &&
          suggestedList.map((movie) => (
            <Suggestion
              imdbID={movie.imdbID}
              title={movie.Title}
              openSuggestions={openSuggestionsFn}
              key={movie.imdbID + movie.Title}
              setIdFromCache={setIdFromCache}
              setSearchTerm={setSearchTerm}
            />
          ))}
      </ul>
    </div>
  );
};
