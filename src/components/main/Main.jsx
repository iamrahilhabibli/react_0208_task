import React from "react";
import { Card } from "./Card";
import main from "./Main.module.css";
import { Cards } from "./Cards";
export function Main() {
  const cardData = [
    {
      image: "image1",
      title: "title1",
      description: "description1",
    },
    {
      image: "image2",
      title: "title2",
      description: "description2",
    },
    {
      image: "image3",
      title: "title3",
      description: "description3",
    },
  ];

  return (
    <div className={main.cardWrapper}>
      <Cards data={cardData} />
    </div>
  );
}
