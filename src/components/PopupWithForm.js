function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <form className="popup__container" name={props.name} noValidate>
        <h2 className="popup__title">{props.title}</h2>
        <fieldset className="popup__fieldset">
          {props.children}
          <button type="submit" className="popup__submit">
            {props.buttonText}
          </button>
        </fieldset>
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
