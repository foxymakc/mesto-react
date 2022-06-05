import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <img
        className="element__image"
        alt={props.card.name}
        src={props.card.link}
        onClick={handleClick}
      />
      <div className="element__content">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-box">
          <button type="button" className="element__like"></button>
          <span className="element__like-number">
            {props.card.likes.length}
          </span>
        </div>
      </div>
      <button type="button" className="element__delete"></button>
    </div>
  );
}

export default Card;
