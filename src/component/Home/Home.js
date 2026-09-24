import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ArrowRightOutlined, LikeOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import { mediaUrl, useCms } from "../../api/cms";
import { useSite } from "../../context/SiteContext";
import Intro from "../common/Intro";
import ContactCta from "../common/ContactCta";
import "./HomeStyle.scss";

// Each hero slide keeps its own CSS class (positioning and default background);
// the image chosen in the CMS overrides the background.
const SLIDE_CLASSES = ["slider-item-home", "slider-item-home-2", "slider-item-home-3"];

const sliderSettings = {
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
};

const SCROLL_ANIMATIONS = [
  { at: 200, className: "up1", animation: "fadeInRight" },
  { at: 200, className: "upopen", animation: "fadeInOpen" },
  { at: 250, className: "up2", animation: "fadeInRight" },
  { at: 420, className: "up3", animation: "fadeInUp" },
  { at: 450, className: "up4", animation: "fadeInUp" },
  { at: 600, className: "upservices", animation: "fadeInOpen" },
  { at: 940, className: "up-contact", animation: "fadeInUp" },
  { at: 1070, className: "right-contact", animation: "fadeInRight" },
  { at: 1400, className: "up-comment", animation: "fadeInUp" },
  { at: 1440, className: "left-comment", animation: "fadeInLeft" },
];

function Home() {
  const { services } = useSite();
  const home = useCms("home-page");
  const testimonials = useCms("testimonials?sort=order&pagination[pageSize]=100");

  useEffect(() => {
    const onScroll = () => {
      SCROLL_ANIMATIONS.forEach(({ at, className, animation }) => {
        if (window.scrollY >= at) {
          Array.from(document.getElementsByClassName(className)).forEach((el) =>
            el.classList.add(animation, "cssanimation")
          );
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const error = home.error || testimonials.error;
  if (error) return <div style={{ padding: 40 }}>Could not load content: {error.message}</div>;
  if (!home.data || !testimonials.data) return null;
  const page = home.data;

  return (
    <div className="home">
      <Carousel slide={false}>
        {page.slides.map((slide, i) => (
          <Carousel.Item key={slide.id}>
            <section className="slider">
              <div className="siler-list">
                <div
                  className={SLIDE_CLASSES[i % SLIDE_CLASSES.length]}
                  style={
                    slide.image
                      ? { backgroundImage: `url(${mediaUrl(slide.image)})` }
                      : undefined
                  }
                >
                  <div className="container">
                    <div className="slide-content">
                      <div className="text-slider">
                        <p className="text-title">
                          <span>{slide.lineOne}</span>
                        </p>
                        <p className="text-title">{slide.lineTwo}</p>
                        <p className="sub-text">{slide.subtitle}</p>
                        {slide.buttonText && (
                          <a href={slide.buttonUrl || "#"} className="btn btn-detail">
                            {slide.buttonText} <ArrowRightOutlined />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Carousel.Item>
        ))}
      </Carousel>
      <Intro intro={page.intro} animated />
      <section className="our-services">
        <div className="container">
          <div className="title-service">
            <h3>{page.servicesHeading.title}</h3>
            <p>{page.servicesHeading.subtitle}</p>
          </div>
          <div className="upservices">
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
        </div>
      </section>
      <ContactCta
        cta={page.cta}
        imageClass="up-contact"
        textClass="up-contact"
        formClass="right-contact"
      />
      <section className="comment">
        <div className="container">
          <div className="icon up-comment">
            <LikeOutlined />
          </div>
          <div className="title-comment up-comment">
            <p className="title-text">{page.testimonialsHeading.title}</p>
            <p className="sub-text">{page.testimonialsHeading.subtitle}</p>
          </div>
          <div className="row left-comment">
            {testimonials.data.map((item) => (
              <div className="col-3" key={item.documentId}>
                <div className="class-box">
                  <div className="testimon-text">{item.quote}</div>
                  <div className="img-testimon">
                    <img src={mediaUrl(item.avatar)} alt={item.name} />
                  </div>
                  <div className="name-test">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
