import { Movie } from "../../../hooks/interface";
import { FullDetailsViewProps, TileListProps } from "./interface";
import { SingleTile } from "./tile";
import { ModalComponent } from "../modal";
const FullDetailsSingleTile = ({
  idFromCache = "",
  setIdFromCache,
}: FullDetailsViewProps) => {
  return (
    <ModalComponent setIdFromCache={setIdFromCache}>
      <SingleTile idFromCache={idFromCache} showDetails={true} />
    </ModalComponent>
  );
};

export const TileList = ({
  movieList,
  idFromCache,
  setIdFromCache,
}: TileListProps): JSX.Element => {
  return (
    <>
      {idFromCache && !movieList?.length ? (
        <FullDetailsSingleTile
          idFromCache={idFromCache}
          setIdFromCache={setIdFromCache}
        />
      ) : (
        <div className="tiles">
          <div className="tiles__wrapper">
            <div className="tiles__wrapper__list">
              {movieList?.length &&
                movieList.map((movie: Movie) => (
                  <SingleTile
                    title={movie.Title}
                    imdbID={movie.imdbID}
                    poster={movie.Poster}
                    year={movie.Year}
                    movieType={movie.Type}
                    showDetails={false}
                    key={movie.imdbID + movie.Title}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
