import React from "react";
import card from "./Card.module.css";
export function Card(props) {
  console.log(props);
  return (
    <div className={card.cardContainer}>
      <img className={card.cardImages} src={props.image} alt="" />
      <h3 className={card.cardTitle}>{props.title}</h3>
      <p className={card.cardDescription}>{props.description}</p>
    </div>
  );
}
