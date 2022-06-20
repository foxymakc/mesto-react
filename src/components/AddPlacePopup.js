import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      name="popup__element-form"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__field">
        <input
          className="popup__input popup__input_title-element"
          type="text"
          placeholder="Название"
          name="name"
          required
          minLength="2"
          maxLength="30"
          onChange={handleNameChange}
          value={name || ''}
        />
        <span className="popup__error" id="title-element-error"></span>
      </div>
      <div className="popup__field">
        <input
          className="popup__input popup__input_url-element"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          required
          onChange={handleLinkChange}
          value={link || ''}
        />
        <span className="popup__error" id="url-element-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
