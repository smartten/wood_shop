import "./AboutUsStyle.scss";
import { RightOutlined, TwitterOutlined } from "@ant-design/icons";
import { mediaUrl, useCms } from "../../api/cms";
import { useSite } from "../../context/SiteContext";
import Intro from "../common/Intro";
import FlipCard from "../common/FlipCard";

function AboutUs() {
  const { global } = useSite();
  const about = useCms("about-page");
  const team = useCms("team-members?sort=order&pagination[pageSize]=100");

  const error = about.error || team.error;
  if (error) return <div style={{ padding: 40 }}>Could not load content: {error.message}</div>;
  if (!about.data || !team.data) return null;
  const page = about.data;

  return (
    <div className="about-us">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>{page.title}</span>
                  </p>
                  <p className="breadcrumb-text">
                    {global.navHome} <RightOutlined /> {page.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Intro intro={page.intro} />
      <section className="tablov2 container">
        {page.values.map((value) => (
          <FlipCard key={value.id} icon={value.icon} title={value.title} text={value.text} />
        ))}
      </section>
      <section
        className="ozellika"
        data-background="#f9f9f9"
        style={{ background: "rgb(249, 249, 249)" }}
      >
        <div className="container">
          <div className="row align-items-center no-gutters">
            <div className="col-lg-12">
              <div
                className="wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                  textAlign: "center",
                }}
              >
                <div className="boslukalt" />
                <h2
                  className="h2-baslik-hizmetler-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                  {page.teamHeading.title}
                </h2>
                <p
                  className="h2-baslik-hizmetler-2__paragraf wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                  {page.teamHeading.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flooring-master">
        <div className="container">
          <div className="row">
            {team.data.map((member) => (
              <div className="col-3" key={member.documentId}>
                <img src={mediaUrl(member.photo)} alt={member.name} />
                <div className="info">
                  <p className="name">{member.name}</p>
                  <p className="role">{member.role}</p>
                  <p className="icon">
                    <span>
                      <TwitterOutlined />
                    </span>
                    <span>
                      <TwitterOutlined />
                    </span>
                    <span>
                      <TwitterOutlined />
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
