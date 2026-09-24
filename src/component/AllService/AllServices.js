import "./AllServicesStyle.scss";
import { RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import React, { useEffect } from "react";
import { mediaUrl, useCms } from "../../api/cms";
import { useSite } from "../../context/SiteContext";
import ContactCta from "../common/ContactCta";

const sliderSettings = {
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
};

function AllServices() {
  const { global, services } = useSite();
  const { data: home, error } = useCms("home-page");
  const loaded = Boolean(home);

  useEffect(() => {
    if (!loaded) return undefined;
    const add = (name, ...classes) =>
      Array.from(document.getElementsByClassName(name)).forEach((el) =>
        el.classList.add(...classes)
      );
    add("up1", "fadeInUp", "cssanimation");
    add("up2", "fadeInLeft", "cssanimation");
    add("up5", "fadeInUp", "cssanimation1s");
    const onScroll = () => {
      if (window.scrollY >= 300) {
        add("up4", "fadeInRight", "cssanimation");
        add("up3", "fadeInUp", "cssanimation");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loaded]);

  if (error) return <div style={{ padding: 40 }}>Could not load content: {error.message}</div>;
  if (!home) return null;

  return (
    <div className="all-services">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item up5">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>{global.navAllServices}</span>
                  </p>
                  <p className="breadcrumb-text">
                    {global.navHome} <RightOutlined /> {global.navAllServices}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services up1">
        <div className="container">
          <Slider {...sliderSettings}>
            {services.map((service) => (
              <div className="col-3" key={service.documentId}>
                <div className="img-service">
                  <img src={mediaUrl(service.thumbnail)} alt={service.title} />
                </div>
                <div className="text-service">
                  <h2>{service.title}</h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <ContactCta cta={home.cta} imageClass="up3" formColClass="up4" />
    </div>
  );
}

export default AllServices;
