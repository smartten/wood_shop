import React, { useEffect } from "react";
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
import { Card } from "antd";
import "./HomeStyle.scss";
function Home() {
  const contentStyle = {
    height: "100vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const { Meta } = Card;
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    // arrows: false,
    swipeToSlide: true,
    // dotsClass: ".button-1",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          focusOnSelect: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          arrows: false,
          dots: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          focusOnSelect: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          arrows: false,
          dots: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  const settings1 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    // dotsClass: ".button-1",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          focusOnSelect: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          arrows: false,
          dots: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          focusOnSelect: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 500,
          arrows: false,
          dots: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  const settings2 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          focusOnSelect: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 500,
          arrows: false,
          dots: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          focusOnSelect: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          arrows: false,
          dots: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  const datasanpham1 = [
    {
      name: "Sản phẩm 1",
      img: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/7JKvudtEMyjoj5bLADD1ng/48e9fa576c6085295996f0f499f01599/aW1hZ2UucG5n/940w-627h/m%E1%BA%ABu-b%C3%A0n-gh%E1%BA%BF-sofa-b%E1%BB%99.jpg",
      price: "200 000 VND",
    },
    {
      name: "Sản phẩm 2",
      img: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/7JKvudtEMyjoj5bLADD1ng/48e9fa576c6085295996f0f499f01599/aW1hZ2UucG5n/940w-627h/m%E1%BA%ABu-b%C3%A0n-gh%E1%BA%BF-sofa-b%E1%BB%99.jpg",
      price: "200 000 VND",
    },
    {
      name: "Sản phẩm 3",
      img: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/7JKvudtEMyjoj5bLADD1ng/48e9fa576c6085295996f0f499f01599/aW1hZ2UucG5n/940w-627h/m%E1%BA%ABu-b%C3%A0n-gh%E1%BA%BF-sofa-b%E1%BB%99.jpg",
      price: "200 000 VND",
    },
    {
      name: "Sản phẩm 4",
      img: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/7JKvudtEMyjoj5bLADD1ng/48e9fa576c6085295996f0f499f01599/aW1hZ2UucG5n/940w-627h/m%E1%BA%ABu-b%C3%A0n-gh%E1%BA%BF-sofa-b%E1%BB%99.jpg",
      price: "200 000 VND",
    },
    {
      name: "Sản phẩm 5",
      img: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/7JKvudtEMyjoj5bLADD1ng/48e9fa576c6085295996f0f499f01599/aW1hZ2UucG5n/940w-627h/m%E1%BA%ABu-b%C3%A0n-gh%E1%BA%BF-sofa-b%E1%BB%99.jpg",
      price: "200 000 VND",
    },
    {
      name: "Sản phẩm 6",
      img: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/7JKvudtEMyjoj5bLADD1ng/48e9fa576c6085295996f0f499f01599/aW1hZ2UucG5n/940w-627h/m%E1%BA%ABu-b%C3%A0n-gh%E1%BA%BF-sofa-b%E1%BB%99.jpg",
      price: "200 000 VND",
    },
    {
      name: "Sản phẩm 7",
      img: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/7JKvudtEMyjoj5bLADD1ng/48e9fa576c6085295996f0f499f01599/aW1hZ2UucG5n/940w-627h/m%E1%BA%ABu-b%C3%A0n-gh%E1%BA%BF-sofa-b%E1%BB%99.jpg",
      price: "200 000 VND",
    },
    {
      name: "Sản phẩm 8",
      img: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/7JKvudtEMyjoj5bLADD1ng/48e9fa576c6085295996f0f499f01599/aW1hZ2UucG5n/940w-627h/m%E1%BA%ABu-b%C3%A0n-gh%E1%BA%BF-sofa-b%E1%BB%99.jpg",
      price: "200 000 VND",
    },
  ];

  // function animateNumber(finalNumber, delay, startNumber = 0, callback) {
  //   let currentNumber = startNumber;
  //   const interval = window.setInterval(updateNumber, delay);
  //   function updateNumber() {
  //     if (currentNumber >= finalNumber) {
  //       clearInterval(interval);
  //     } else {
  //       currentNumber++;
  //       callback(currentNumber);
  //     }
  //   }
  // }

  // document.addEventListener("DOMContentLoaded", function () {
  //   animateNumber(400, 1, 0, function (number) {
  //     const formattedNumber = number.toLocaleString();
  //     document.getElementById("transaction-count").innerText = formattedNumber;
  //   });

  //   animateNumber(9, 50, 0, function (number) {
  //     const formattedNumber = number.toLocaleString();
  //     document.getElementById("city-count").innerText = formattedNumber;
  //   });
  // });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var up1 = document.getElementsByClassName("up1");
      var up2 = document.getElementsByClassName("up2");
      var up3 = document.getElementsByClassName("up3");
      var up4 = document.getElementsByClassName("up4");
      var up5 = document.getElementsByClassName("upopen");
      var up6 = document.getElementsByClassName("upservices");
      var up7 = document.getElementsByClassName("right-contact");
      var up8 = document.getElementsByClassName("up-contact");
      var up9 = document.getElementsByClassName("left-comment");
      var up10 = document.getElementsByClassName("up-comment");

      if (window.scrollY >= 700) {
        for (var i = 0; i < up1.length; i++) {
          up1[i].classList.add("fadeInRight", "cssanimation");
        }
        for (var i = 0; i < up5.length; i++) {
          up5[i].classList.add("fadeInOpen", "cssanimation");
        }
      }
      if (window.scrollY >= 750) {
        for (var i = 0; i < up2.length; i++) {
          up2[i].classList.add("fadeInRight", "cssanimation");
        }
      }

      if (window.scrollY >= 920) {
        for (var i = 0; i < up3.length; i++) {
          up3[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 950) {
        for (var i = 0; i < up4.length; i++) {
          up4[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1100) {
        for (var i = 0; i < up6.length; i++) {
          up6[i].classList.add("fadeInOpen", "cssanimation");
        }
      }
      if (window.scrollY >= 1440) {
        for (var i = 0; i < up8.length; i++) {
          up8[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1570) {
        for (var i = 0; i < up7.length; i++) {
          up7[i].classList.add("fadeInRight", "cssanimation");
        }
      }
      if (window.scrollY >= 1900) {
        for (var i = 0; i < up10.length; i++) {
          up10[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1940) {
        for (var i = 0; i < up9.length; i++) {
          up9[i].classList.add("fadeInLeft", "cssanimation");
        }
      }
    });
    console.log(window.scrollY);
  }, []);
  return (
    <div className="home">
      <Carousel slide={false}>
        <Carousel.Item>
          <section className="slider">
            <div className="siler-list">
              <div className="slider-item-home">
                <div className="containerv1">
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
                <div className="containerv1">
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
                <div className="containerv1">
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
      <section className="product">
        <div className="containerv1">
          <div className="product-name">
            <h2 className="title-name">Ghế Gỗ</h2>
          </div>
          <Slider {...settings2}>
            {datasanpham1.map((data) => (
              <div>
                <Card
                  hoverable
                  style={
                    {
                      // width: 240,
                    }
                  }
                  cover={<img alt="product" src={data.img} />}
                >
                  <Meta title={data.name} description={data.price} />
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="tablo">
        <div className="containerv1">
          <div className="tablo-content">
            <div
              className="img-content upopen"
              style={{ visibility: "visible" }}
            >
              <img src={img1} />
              <div
                className="countb"
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
                              <span
                                className="odometer-value"
                                // id="transaction-count"
                              >
                                4
                              </span>
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
              <div className="text-title up1">
                <h3>Do you need flooring services?</h3>
              </div>
              <div className="sub-text up3">
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
              <div className="content-2 up2">
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
              <div className="content-2 up2">
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
              <div className="button-get up4">
                <a href="">
                  Get to know us <ArrowRightOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services">
        <div className="containerv1">
          <div className="title-service">
            <h3>Our Flooring Services</h3>
            <p>We are at your service for all your flooring.</p>
          </div>

          <div className="upservices">
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
        <div className="containerv1">
          <div className="row">
            <div className="col-lg-6 up-contact">
              <img src={imgContact} />
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="text-contact up-contact">
                  <p className="title-contact">
                    Let's Create A Great Design Together!
                  </p>
                  <p className="sub-contact">
                    Fill out the detailed information form about our flooring
                    services.
                  </p>
                </div>
                <div className="form-contact right-contact">
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
        <div className="containerv1">
          <div className="icon up-comment">
            <LikeOutlined />
          </div>
          <div className="title-comment up-comment">
            <p className="title-text">What Are Our Customers Saying ?</p>
            <p className="sub-text">Opinions from our happy customers.</p>
          </div>
          <div className="left-comment">
            <Slider {...settings1}>
              {/* <div className="row left-comment"> */}
              <div className="col-3">
                <div className="class-box">
                  <div className="testimon-text">
                    We needed a floor covering for the living room of our house.
                    They did professional work. Thank you.
                  </div>
                  <div className="img-testimon">
                    <img src={imgtest} />
                  </div>
                  <div className="name-test">Nguyen</div>
                </div>
              </div>
              <div className="col-3">
                <div className="class-box">
                  <div className="testimon-text">
                    We needed a floor covering for the living room of our house.
                    They did professional work. Thank you.
                  </div>
                  <div className="img-testimon">
                    <img src={imgtest} />
                  </div>
                  <div className="name-test">Minh</div>
                </div>
              </div>
              <div className="col-3">
                <div className="class-box">
                  <div className="testimon-text">
                    We needed a floor covering for the living room of our house.
                    They did professional work. Thank you.
                  </div>
                  <div className="img-testimon">
                    <img src={imgtest} />
                  </div>
                  <div className="name-test">Hieu</div>
                </div>
              </div>
              <div className="col-3">
                <div className="class-box">
                  <div className="testimon-text">
                    We needed a floor covering for the living room of our house.
                    They did professional work. Thank you.
                  </div>
                  <div className="img-testimon">
                    <img src={imgtest} />
                  </div>
                  <div className="name-test">NMH</div>
                </div>
              </div>
              <div className="col-3">
                <div className="class-box">
                  <div className="testimon-text">
                    We needed a floor covering for the living room of our house.
                    They did professional work. Thank you.
                  </div>
                  <div className="img-testimon">
                    <img src={imgtest} />
                  </div>
                  <div className="name-test">NMH1</div>
                </div>
              </div>
              {/* </div> */}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
