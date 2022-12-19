import { useMoviesHook } from "../../context/movieContext";
import errorImg from "../../media/error.webp";

export const ErrorComponent = () => {
  const { errorMsg } = useMoviesHook();

  return (
    <div className="error-div">
      <div className="error-div__wrapper">
        <div className="error-div__wrapper__content">
          <img src={errorImg} alt="Presenting errors via a media file" />
          <h3>{errorMsg}</h3>
          {errorMsg === "Movie not found!" ? (
            <p>Try another movie title</p>
          ) : (
            <p>Please check your network connection or reach out to support</p>
          )}
        </div>
      </div>
    </div>
  );
};
