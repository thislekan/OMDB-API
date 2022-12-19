import { MovieContextProps } from "../../../context/interface";

export const ModalComponent = ({
  children,
  setIdFromCache,
}: MovieContextProps) => {
  const handleClick = () => {
    if (setIdFromCache) setIdFromCache("");
  };
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__wrapper__content">
          <button className="delete-btn" onClick={handleClick}>
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
