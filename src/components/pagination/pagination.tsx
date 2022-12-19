import { useSearchMovies } from "../../hooks/useSearchMovies";

export const Pagination = () => {
  const { setPageCount, pageCount, totalPages } = useSearchMovies();
  const seekOrGoback = (value: boolean) => () => {
    setPageCount(value ? pageCount + 1 : pageCount - 1);
  };
  return (
    <div className="pagination">
      <div className="pagination__seek">
        <button disabled={pageCount <= 1} onClick={seekOrGoback(false)}>
          Prev
        </button>
        <input type="number" name="page" id="" disabled value={pageCount} />
        <button
          onClick={seekOrGoback(true)}
          disabled={pageCount === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
