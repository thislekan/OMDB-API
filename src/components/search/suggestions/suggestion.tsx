import { SuggestionProps } from "../interface";

export const Suggestion = ({
  title,
  imdbID,
  openSuggestions,
  setIdFromCache,
  setSearchTerm,
}: SuggestionProps): JSX.Element => {
  const selectTitle = () => {
    openSuggestions && openSuggestions(false);
    setIdFromCache && setIdFromCache(title);
    setSearchTerm && setSearchTerm("");
  };

  return (
    <li key={imdbID + title} onClick={selectTitle}>
      {title}
    </li>
  );
};
