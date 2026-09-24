import { ArrowRightOutlined } from "@ant-design/icons";
import { mediaUrl } from "../../api/cms";
import Icon from "./Icon";
import Odometer from "./Odometer";
import divider from "./divider.jpg";

// The "Do you need flooring services?" block shared by Home and About Us.
// `animated` adds the scroll-animation hooks used by the Home page.
function Intro({ intro, animated }) {
  const [primary, secondary] = intro.stats || [];
  const up = (name) => (animated ? ` ${name}` : "");

  return (
    <section className="tablo">
      <div className="container">
        <div className="tablo-content">
          <div
            className={`img-content${up("upopen")}`}
            style={animated ? { visibility: "visible" } : undefined}
          >
            <img src={mediaUrl(intro.image)} alt={intro.title} />
            <div
              className={animated ? "countb" : "countb wow fadeInLeft"}
              data-wow-delay="1.1s"
              style={{ visibility: "visible" }}
            >
              {primary && (
                <div className="counter-box" style={{ visibility: "visible" }}>
                  <Odometer value={primary.value} />
                  <h6>{primary.label}</h6>
                </div>
              )}
              {secondary && (
                <div
                  className="countt wow fadeInUp"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="counter-box" style={{ visibility: "visible" }}>
                    <Odometer value={secondary.value} />
                    <h6>{secondary.label}</h6>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="text-content">
            <div className={`text-title${up("up1")}`}>
              <h3>{intro.title}</h3>
            </div>
            <div className={`sub-text${up("up3")}`}>
              <p>{intro.text}</p>
            </div>
            <div>
              <img
                className="divider"
                width="120"
                height="15"
                title="divider"
                alt="divider"
                src={divider}
              />
            </div>
            {(intro.features || []).map((feature) => (
              <div className={`content-2${up("up2")}`} key={feature.id}>
                <div className="icon">
                  <Icon name={feature.icon} />
                </div>
                <div className="content-icon">
                  <div className="title-icon">{feature.title}</div>
                  <div className="text-icon">{feature.text}</div>
                </div>
              </div>
            ))}
            {intro.buttonText && (
              <div className={`button-get${up("up4")}`}>
                <a href={intro.buttonUrl || "#"}>
                  {intro.buttonText} <ArrowRightOutlined />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
