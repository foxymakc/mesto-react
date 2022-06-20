import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const userAvatarRef = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: userAvatarRef.current.value,
    });
    userAvatarRef.current.value = "";
  }

  return (
    <PopupWithForm
      name="popup__avatar-form"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__field">
        <input
          className="popup__input popup__input_url-element"
          type="url"
          placeholder="Ссылка на картинку"
          name="avatar"
          required
          ref={userAvatarRef}
        />
        <span className="popup__error" id="url-avatar-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
