import React from "react";
import card from "./Card.module.css";
export function Card(props) {
  return (
    <div className={card.cardContainer}>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
