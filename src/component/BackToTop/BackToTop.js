import React, { useEffect, useState } from "react";
import { UpOutlined } from "@ant-design/icons";
import "./BackToTop.scss";
function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="back">
      {backToTop && (
        <button className="btnTop" style={{}} onClick={scrollUp}>
          <UpOutlined />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
