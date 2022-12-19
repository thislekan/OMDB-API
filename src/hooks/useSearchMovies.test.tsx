import { renderHook, act } from "@testing-library/react";
import { useSearchMovies } from "./useSearchMovies";

test("Should properly use custom hook", () => {
  const { result } = renderHook(() => useSearchMovies());
  expect(result.current.pageCount).toBe(1);
  expect(result.current.totalPages).toBe(0);

  act(() => {
    result.current.setPageCount(2);
    result.current.debouncedFindMovie("hero");
  });

  expect(result.current.pageCount).toBe(2);
  expect(result.current.totalPages).toBe(0);
});
