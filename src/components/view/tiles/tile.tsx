import { useEffect, useState } from "react";
import { Movie } from "../../../hooks/interface";
import { TileProps } from "./interface";

export const SingleTile = ({
  title,
  runtime,
  year,
  poster,
  plot,
  actors,
  genre,
  language,
  showDetails,
  movieType,
  idFromCache,
}: TileProps) => {
  const [data, setData] = useState<Movie | null>(null);

  useEffect(() => {
    if (idFromCache) {
      const fetchMovie = async () => {
        try {
          const encodedTerm = encodeURIComponent(idFromCache);
          const response = await fetch(
            `https://www.omdbapi.com/?apikey=c05820ad&t=${encodedTerm}`
          );
          const data = await response.json();
          if (data) setData(data);
        } catch (error) {
          throw error;
        }
      };
      fetchMovie();
    }
  }, [idFromCache]);

  return (
    <div className="tile">
      <div className="tile__wrapper">
        <div className="tile__wrapper__content">
          <div className="poster">
            <img
              src={poster || data?.Poster}
              alt={`${title || data?.Title} movie poster`}
              className="image"
            />
            <p className="genre">{genre}</p>
          </div>
          <div className="description">
            <div className="description__children">
              <div className="description__children__child">
                <p className="title">
                  <span>Title:</span> {title || data?.Title}
                </p>
              </div>
              <div
                className={`description__children__child ${
                  showDetails ? "description__children__child--summary" : ""
                }`}
              >
                <p>
                  <span>Year:</span> {year || data?.Year}
                </p>
                <p className="can-hide">
                  <span>Type:</span> {movieType || data?.Type}
                </p>
                {showDetails && (
                  <>
                    <p>{language}</p>
                    <p className="can-hide">{runtime || data?.Runtime}</p>
                  </>
                )}
              </div>
              {showDetails && (
                <>
                  <div className="description__children__child description__children__child--actors">
                    <p>
                      <span>Actors:</span>
                    </p>
                  </div>
                  <div className="description__children__child description__children__child--actors">
                    {(actors || data?.Actors)?.split(",").map((actor) => (
                      <p>{actor}</p>
                    ))}
                  </div>
                  <div className="description__children__child description__children__child--actors">
                    <p>
                      <span>Plot:</span>
                    </p>
                  </div>
                  <div className="description__children__child description__children__child--plot">
                    <p>{plot || data?.Plot}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
