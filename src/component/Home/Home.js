import React from "react";
// import { Carousel } from "antd";
import Carousel from "react-bootstrap/Carousel";
import {
  ArrowRightOutlined,
  SmileOutlined,
  ClockCircleOutlined,
  LeftOutlined,
  RightOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import img1 from "./img/wood1-about.png";
import img2 from "./img/our-service.jpg";
import imgContact from "./img/img-contact.jpg";
import imgtest from "./img/man1.png";
import imgservice1 from "./img/img-service1.jpg";
import imgservice2 from "./img/img-service2.jpg";
import imgservice3 from "./img/img-service3.jpg";
import imgservice4 from "./img/wood-services-4.jpg";
import imgservice5 from "./img/wood-services-5.jpg";
import Slider from "react-slick";
import "./HomeStyle.scss";
function Home() {
  const contentStyle = {
    height: "100vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    // arrows: false,
    // dotsClass: ".button-1",
  };

  return (
    <div className="home">
      <Carousel slide={false}>
        <Carousel.Item>
          <section className="slider">
            <div className="siler-list">
              <div className="slider-item-home">
                <div className="container">
                  <div className="slide-content">
                    <div className="text-slider">
                      <p className="text-title">
                        <span>Innovative Modern </span>
                      </p>
                      <p className="text-title">Flooring Service</p>
                      <p className="sub-text">
                        Custom flooring within your budget.
                      </p>
                      <a href="" target="_blank" className="btn btn-detail">
                        Learn More <ArrowRightOutlined />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="slider">
            <div className="siler-list">
              <div className="slider-item-home-2">
                <div className="container">
                  <div className="slide-content">
                    <div className="text-slider">
                      <p className="text-title">
                        <span>Do You Need</span>
                      </p>
                      <p className="text-title">Flooring Service</p>
                      <p className="sub-text">
                        Then you are in the right place
                      </p>
                      <a href="" target="_blank" className="btn btn-detail">
                        Learn More <ArrowRightOutlined />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="slider">
            <div className="siler-list">
              <div className="slider-item-home-3">
                <div className="container">
                  <div className="slide-content">
                    <div className="text-slider">
                      <p className="text-title">
                        <span>Get Flooring</span>
                      </p>
                      <p className="text-title">Service Now</p>
                      <p className="sub-text">
                        Then you are in the right place
                      </p>
                      <a href="" target="_blank" className="btn btn-detail">
                        Learn More <ArrowRightOutlined />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
      </Carousel>
      <section className="tablo">
        <div className="container">
          <div className="tablo-content">
            <div className="img-content">
              <img src={img1} />
              <div
                className="countb wow fadeInLeft"
                data-wow-delay="1.1s"
                style={{
                  visibility: "visible",
                }}
              >
                <div className="counter-box" style={{ visibility: "visible" }}>
                  <span
                    className="odometer odometer-auto-theme"
                    data-count={240}
                    data-status="yes"
                  >
                    <div className="odometer-inside">
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">2</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">4</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">0</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </span>
                  <h6>Private Client Service</h6>
                </div>
                <div
                  className="countt wow fadeInUp"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div
                    className="counter-box"
                    style={{ visibility: "visible" }}
                  >
                    <span
                      className="odometer odometer-auto-theme"
                      data-count={24}
                      data-status="yes"
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">2</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">4</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <h6>Years of Experience</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-content">
              <div className="text-title">
                <h3>Do you need flooring services?</h3>
              </div>
              <div className="sub-text">
                <p>
                  With our expert staff, we add a new perspective to your home
                  in economic, luxury, fast and quality flooring and
                  installation services. Choose the flooring service package
                  that fits your budget, and we'll come and renew it right away.
                </p>
              </div>
              <div>
                <img
                  className="divider"
                  width="120"
                  height="15"
                  title="divider"
                  alt="divider"
                  src="https://garantiwebtasarim.com/wordpress/wood/wp-content/uploads/2022/05/divider.jpg"
                />
              </div>
              <div className="content-2">
                <div className="icon">
                  <SmileOutlined />
                </div>
                <div className="content-icon">
                  <div className="title-icon">Professional Team</div>
                  <div className="text-icon">
                    We produce guaranteed solutions in all flooring works with
                    our competent and experienced team.
                  </div>
                </div>
              </div>
              <div className="content-2">
                <div className="icon">
                  <ClockCircleOutlined />
                </div>
                <div className="content-icon">
                  <div className="title-icon">Quick Flooring</div>
                  <div className="text-icon">
                    Thanks to our solid expertise, we build custom spaces by
                    covering your floors very quickly.
                  </div>
                </div>
              </div>
              <div className="button-get">
                <a href="">
                  Get to know us <ArrowRightOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services">
        <div className="container">
          <div className="title-service">
            <h3>Our Flooring Services</h3>
            <p>We are at your service for all your flooring.</p>
          </div>

          <div>
            <Slider {...settings}>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice1} />
                </div>
                <div className="text-service">
                  <h2>Flooring</h2>
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice2} />
                </div>
                <div className="text-service">
                  <h2>Carpet Flooring</h2>
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice3} />
                </div>
                <div className="text-service">
                  <h2>Floor Raising</h2>
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice4} />
                </div>
                <div className="text-service">
                  <h2>PVC Flooring</h2>
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice5} />
                </div>
                <div className="text-service">
                  <h2>Wood Flooring</h2>
                </div>
              </div>
            </Slider>
          </div>
          {/* <div className="buttn-slider">
            <button className="button-1">
              <LeftOutlined />
            </button>
            <button className="button-1">
              <RightOutlined />
            </button>
          </div> */}
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={imgContact} />
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="text-contact">
                  <p className="title-contact">
                    Let's Create A Great Design Together!
                  </p>
                  <p className="sub-contact">
                    Fill out the detailed information form about our flooring
                    services.
                  </p>
                </div>
                <div className="form-contact">
                  <form>
                    <div className="d-flex">
                      <div className="form-group col-4">
                        <input
                          type="text"
                          className="form-control input-form"
                          id="exampleInputName"
                          // aria-describedby="emailHelp"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="form-group col-4">
                        <input
                          type="email"
                          className="form-control input-form"
                          id="exampleInputEmail1"
                          // aria-describedby="emailHelp"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group col-4">
                        <input
                          type="text"
                          className="form-control input-form"
                          id="exampleInputPhone"
                          // aria-describedby="emailHelp"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div> */}
                    <button type="submit" className="btn-contact">
                      Call Back <ArrowRightOutlined />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="comment">
        <div className="container">
          <div className="icon">
            <LikeOutlined />
          </div>
          <div className="title-comment">
            <p className="title-text">What Are Our Customers Saying ?</p>
            <p className="sub-text">Opinions from our happy customers.</p>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="class-box">
                <div className="testimon-text">
                  We needed a floor covering for the living room of our house.
                  They did professional work. Thank you.
                  {/* <i class="fas fa-quote-right quote" aria-hidden="true"></i> */}
                </div>
                <div className="img-testimon">
                  <img src={imgtest} />
                </div>
                <div className="name-test">Adam</div>
              </div>
            </div>
            <div className="col-3">
              <div className="class-box">
                <div className="testimon-text">
                  We needed a floor covering for the living room of our house.
                  They did professional work. Thank you.
                  {/* <i class="fas fa-quote-right quote" aria-hidden="true"></i> */}
                </div>
                <div className="img-testimon">
                  <img src={imgtest} />
                </div>
                <div className="name-test">Adam</div>
              </div>
            </div>
            <div className="col-3">
              <div className="class-box">
                <div className="testimon-text">
                  We needed a floor covering for the living room of our house.
                  They did professional work. Thank you.
                  {/* <i class="fas fa-quote-right quote" aria-hidden="true"></i> */}
                </div>
                <div className="img-testimon">
                  <img src={imgtest} />
                </div>
                <div className="name-test">Adam</div>
              </div>
            </div>
            <div className="col-3">
              <div className="class-box">
                <div className="testimon-text">
                  We needed a floor covering for the living room of our house.
                  They did professional work. Thank you.
                  {/* <i class="fas fa-quote-right quote" aria-hidden="true"></i> */}
                </div>
                <div className="img-testimon">
                  <img src={imgtest} />
                </div>
                <div className="name-test">Adam</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
