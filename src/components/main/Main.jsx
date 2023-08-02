import React from "react";
import main from "./Main.module.css";
import { Cards } from "./Cards";
import imageOne from "../../images/1.svg";
import imageTwo from "../../images/2.svg";
import imageThree from "../../images/3.svg";

export function Main() {
  const cardData = [
    {
      image: imageOne,
      title: "title1",
      description: "description1",
    },
    {
      image: imageTwo,
      title: "title2",
      description: "description2",
    },
    {
      image: imageThree,
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
