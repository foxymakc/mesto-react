import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name="popup__info"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__field">
          <input
            className="popup__input popup__input_name"
            type="text"
            placeholder="Жак-Ив Кусто"
            name="userName"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__error" id="popup-name-error"></span>
        </div>
        <div className="popup__field">
          <input
            className="popup__input popup__input_about-me"
            type="text"
            placeholder="Исследователь океана"
            name="job"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__error" id="popup-aboutme-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="popup__element-form"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
          />
          <span className="popup__error" id="url-element-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="popup__avatar-form"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__field">
          <input
            className="popup__input popup__input_url-element"
            type="url"
            placeholder="Ссылка на картинку"
            name="avatar"
            required
          />
          <span className="popup__error" id="url-avatar-error"></span>
        </div>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
