import React from "react";
import moreBtn from "./MoreButton.module.css";

export function MoreButton(props) {
  return (
    <>
      <button className={moreBtn.moreBtn}>
        <a className={moreBtn.btnLink}>{props.btnText}</a>
      </button>
    </>
  );
}
