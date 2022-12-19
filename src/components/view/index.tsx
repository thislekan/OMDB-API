import { EmptyScreen } from "./empty/empty";
import { TileList } from "./tiles/tileList";
import { useMoviesHook } from "../../context/movieContext";
import { Pagination } from "../pagination/pagination";
import { SpinnerComponent } from "../spinner/spinner";
import { ErrorComponent } from "../exceptions";

export const TileView = (): JSX.Element => {
  const { searchedMovies, isFetching, errorMsg, idFromCache, setIdFromCache } =
    useMoviesHook();
  const showEmpty = !searchedMovies?.length && !errorMsg;
  console.log({ idFromCache });

  return (
    <div className="movie-view">
      <div className="movie-view__wrapper">
        <div className="movie-view__wrapper__content">
          {isFetching && <SpinnerComponent />}
          {!!showEmpty && <EmptyScreen />}
          {!!errorMsg && <ErrorComponent />}
          {(!!searchedMovies?.length || !!idFromCache) && (
            <>
              <TileList
                movieList={searchedMovies || []}
                idFromCache={idFromCache}
                setIdFromCache={setIdFromCache}
              />
              <Pagination />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
