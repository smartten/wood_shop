import "./AllServicesStyle.scss";
import {
  RightOutlined,
  ArrowRightOutlined,
  LikeOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import imgservice1 from "./imgFlooring/img-service1.jpg";
import imgservice2 from "./imgFlooring/img-service2.jpg";
import imgservice3 from "./imgFlooring/img-service3.jpg";
import imgservice4 from "./imgFlooring/wood-services-4.jpg";
import imgservice5 from "./imgFlooring/wood-services-5.jpg";
import imgContact from "./imgFlooring/img-contact.jpg";
import img1 from "./imgFlooring/wood-services-big-1.jpg";
import img2 from "./imgFlooring/divider.jpg";
import Slider from "react-slick";
import React, { useEffect } from "react";

function AllServices() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    // arrows: false,
    // dotsClass: ".button-1",
  };
  const onHover = () => {
    const ele = document.getElementById("box");
    const ele1 = document.getElementById("content1");
    // const ele1 = document.getElementById("box1");
    // ele.classList.remove("d-blok");
    ele.classList.add("d-none");
    ele1.classList.remove("d-none");
  };
  const onHover1 = () => {
    // const ele = document.getElementById("box");
    const ele1 = document.getElementById("box1");
    const ele2 = document.getElementById("content2");

    // ele.classList.remove("d-blok");
    // ele.classList.add("d-none");
    ele1.classList.add("d-none");
    ele2.classList.remove("d-none");
  };

  const onHoverOut = () => {
    const ele = document.getElementById("box");
    const ele1 = document.getElementById("box1");
    const ele2 = document.getElementById("content1");
    const ele3 = document.getElementById("content2");
    // ele.classList.remove("d-blok");
    ele.classList.remove("d-none");
    ele1.classList.remove("d-none");
    ele2.classList.add("d-none");
    ele3.classList.add("d-none");
  };
  useEffect(() => {
    var up1 = document.getElementsByClassName("up1");
    var up2 = document.getElementsByClassName("up2");
    var up3 = document.getElementsByClassName("up3");
    var up4 = document.getElementsByClassName("up4");
    var up5 = document.getElementsByClassName("up5");
    if (window.scrollY >= 0) {
      for (var i = 0; i < up1.length; i++) {
        up1[i].classList.add("fadeInUp", "cssanimation");
      }
      for (var i = 0; i < up2.length; i++) {
        up2[i].classList.add("fadeInLeft", "cssanimation");
      }
      for (var i = 0; i < up5.length; i++) {
        up5[i].classList.add("fadeInUp", "cssanimation1s");
      }
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        for (var i = 0; i < up4.length; i++) {
          up4[i].classList.add("fadeInRight", "cssanimation");
        }
        for (var i = 0; i < up3.length; i++) {
          up3[i].classList.add("fadeInUp", "cssanimation");
        }
      }
    });
  }, []);
  return (
    <div className="all-services">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item up5">
            <div className="containerv1">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>All Services</span>
                  </p>
                  <p className="breadcrumb-text">
                    Home <RightOutlined /> All Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services up1">
        <div className="containerv1">
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
      </section>
      <section className="contact">
        <div className="containerv1">
          <div className="row">
            <div className="col-lg-6 up3">
              <img src={imgContact} />
            </div>
            <div className="col-lg-6 up4">
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
    </div>
  );
}

export default AllServices;
