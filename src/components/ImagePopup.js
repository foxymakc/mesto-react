function ImagePopup(props) {
  return (
    <div
      className={`popup popup_full-scrin ${props.card ? "popup_opened" : ""}`}
    >
      <figure className="popup__container-image">
        <img
          className="popup__image"
          src={props.card?.link}
          alt={props.card?.name}
        />
        <figcaption className="popup__image-title">
          {props.card ? props.card.name : ""}
        </figcaption>
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
