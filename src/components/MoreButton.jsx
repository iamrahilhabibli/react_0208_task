import React from "react";
import moreBtn from "./MoreButton.module.css";

export function MoreButton(props) {
  return (
    <>
      <button className={moreBtn.moreBtn}>{props.btnText}</button>
    </>
  );
}
