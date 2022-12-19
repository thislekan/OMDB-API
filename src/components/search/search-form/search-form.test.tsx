import { fireEvent, render, screen } from "@testing-library/react";
import { SearchForm } from "./index";

test("should show search form", () => {
  render(
    <SearchForm
      openSuggestionsFn={jest.fn()}
      setErrorMsg={jest.fn()}
      setSearchTerm={jest.fn()}
      setFilteredMovies={jest.fn()}
      searchTerm=""
      setSearchedMovies={jest.fn()}
      errorMsg={undefined}
      cachedMovies={[]}
      idFromCache=""
      setIdFromCache={jest.fn()}
    />
  );
  const input = screen.getByPlaceholderText("Enter movie title");
  expect(input).toHaveValue("");
});

// test("should fire event on change", () => {
//   render(
//     <SearchForm
//       openSuggestionsFn={jest.fn()}
//       setErrorMsg={jest.fn()}
//       setSearchTerm={jest.fn()}
//       setFilteredMovies={jest.fn()}
//       searchTerm=""
//       setSearchedMovies={jest.fn()}
//       errorMsg=""
//       cachedMovies={[]}
//       idFromCache=""
//       setIdFromCache={jest.fn()}
//     />
//   );
//   const input = screen.getByPlaceholderText("Enter movie title");
//   fireEvent.change(input, {
//     target: { value: "Change is here" },
//   });
//   console.log(input);
//   expect(input).toHaveValue("Change is here");
// });
