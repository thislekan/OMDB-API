import tvStatic from "../../../media/tv-static.png";

export const EmptyScreen = () => {
  return (
    <div className="empty">
      <div className="empty__wrapper">
        <div className="empty__wrapper__content">
          <div className="poster">
            <img
              src={tvStatic}
              alt="A static TV representaion in cartoon"
              className=""
            />
          </div>
          <div className="instruction">
            <h4>
              No movies for now! To see a movie, Please enter the movie title in
              the text field above
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
