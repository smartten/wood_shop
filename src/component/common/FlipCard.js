import { useState } from "react";
import Icon from "./Icon";

function FlipCard({ icon, title, text }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="tablo--1-ve-2"
      onMouseOver={() => setFlipped(true)}
      onMouseOut={() => setFlipped(false)}
    >
      <div className={flipped ? "box-content d-none" : "box-content"}>
        <div className="icon-right">
          <Icon name={icon} />
        </div>
        <div className="text-icon">
          <b>{title}</b>
        </div>
      </div>
      <div
        className={flipped ? "box-content1" : "box-content1 d-none"}
        style={{ transform: "rotateX(180deg)" }}
      >
        <div className="text-icon">
          <b>{title}</b>
        </div>
        <div className="content-icon">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
