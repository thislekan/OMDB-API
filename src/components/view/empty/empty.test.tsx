import { render, screen } from "@testing-library/react";
import { EmptyScreen } from "./empty";

test("All elements in empty component are well displayed", () => {
  render(<EmptyScreen />);
  const imgElement = screen.getByAltText(
    "A static TV representaion in cartoon"
  );
  const noMovieElement = screen.getByText(
    "No movies for now! To see a movie, Please enter the movie title in the text field above"
  );

  expect(imgElement).toHaveAttribute("alt");
  expect(noMovieElement).toHaveTextContent(
    "No movies for now! To see a movie, Please enter the movie title in the text field above"
  );
});
