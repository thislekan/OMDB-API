import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination } from "./pagination";

test("Confirm prev pagination button is found", () => {
  render(<Pagination />);
  const prevButton = screen.getByText("Prev");
  expect(prevButton).toHaveAttribute("disabled");
});

test("Confirm next pagination button is found", () => {
  render(<Pagination />);
  const prevButton = screen.getByText("Next");
  expect(prevButton).not.toHaveAttribute("disabled");
});

test("Confirm input element in pagination is found", () => {
  render(<Pagination />);
  const input = screen.getByDisplayValue("1");
  expect(input).toHaveAttribute("disabled");
});

test("Fire Next event", () => {
  render(<Pagination />);
  const input = screen.getByDisplayValue(1);
  const nextButton = screen.getByText("Next");
  fireEvent.click(nextButton);
  expect(input).toHaveValue(2);
});

test("Fire Prev event", () => {
  render(<Pagination />);
  const input = screen.getByDisplayValue(1);
  const prevButton = screen.getByText("Prev");
  fireEvent.click(prevButton);
  expect(input).toHaveValue(1);
});
