import "./ServiceStyle.scss";
import { RightOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { mediaUrl } from "../../api/cms";
import { useSite } from "../../context/SiteContext";
import FlipCard from "../common/FlipCard";
import divider from "../common/divider.jpg";

function ServicePage() {
  const { slug } = useParams();
  const { global, services } = useSite();
  const service = services.find((item) => item.slug === slug);

  useEffect(() => {
    const add = (name, ...classes) =>
      Array.from(document.getElementsByClassName(name)).forEach((el) =>
        el.classList.add(...classes)
      );
    add("up1", "fadeInRight", "cssanimation");
    add("up2", "fadeInLeft", "cssanimation");
    add("up5", "fadeInUp", "cssanimation1s");
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="flooring">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item up5">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>{service.title}</span>
                  </p>
                  <p className="breadcrumb-text">
                    {global.navHome} <RightOutlined /> {service.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-flooring">
        <div className="container">
          <div className="content">
            <div className="menu-left up2">
              <div className="menu-content">
                {services.map((item) => (
                  <div
                    className="link-menu"
                    style={item.slug === slug ? { backgroundColor: "#543312" } : undefined}
                    key={item.documentId}
                  >
                    <a href={`/${item.slug}`}>
                      <RightOutlined /> {item.title}
                    </a>
                  </div>
                ))}
              </div>

              <div className="form-contact">
                <div className="title-form">
                  <h2>{global.sidebarFormTitle}</h2>
                </div>
                <div className="sub-title">
                  <p>{global.sidebarFormSubtitle}</p>
                </div>
                <div className="form-submit">
                  <form>
                    <div className="form-group col-12">
                      <input
                        type="text"
                        className="form-control input-form"
                        name="name"
                        placeholder={global.namePlaceholder}
                      />
                      <input
                        type="text"
                        className="form-control input-form"
                        placeholder={global.emailPlaceholder}
                        name="email"
                      />
                      <input
                        type="text"
                        className="form-control input-form"
                        placeholder={global.phonePlaceholder}
                        name="phone"
                      />
                    </div>
                    <button type="submit" className="btn-contact">
                      {global.sidebarFormButton} <ArrowRightOutlined />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="content-right">
              <div className="img-flo up1">
                <img
                  src={mediaUrl(service.heroImage)}
                  alt={service.title}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="content-text-right up1">
                <div className="title-right">
                  <h2>{service.title}</h2>
                </div>
                <div className="sub-text">{service.paragraphOne}</div>
                <img className="img-text" src={divider} alt="divider" />
                <div className="sub-text">{service.paragraphTwo}</div>
              </div>
              <div className="tablo">
                {(service.highlights || []).map((item) => (
                  <FlipCard key={item.id} icon={item.icon} title={item.title} text={item.text} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicePage;
