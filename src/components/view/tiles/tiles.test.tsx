import { render, screen } from "@testing-library/react";
import { SingleTile } from "./tile";

test("Render single tile", () => {
  render(
    <SingleTile
      title="The walking dead"
      runtime="1hr"
      movieType="series"
      year="1990"
      plot="no plot"
      poster=""
      language=""
      showDetails={true}
      actors=""
      genre=""
      imdbID=""
    />
  );
  const titleElement = screen.queryByText("walking", { exact: false });
  const imgElement = screen.queryByAltText("poster", { exact: false });

  expect(titleElement).toHaveTextContent("The walking dead");
  expect(imgElement).toHaveClass("image");
});
