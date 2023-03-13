import "./PVCFlooringStyle.scss";
import {
  RightOutlined,
  ArrowRightOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import img1 from "./imgFlooring/wood-services-big-1.jpg";
import img2 from "./imgFlooring/divider.jpg";
import React, { useEffect } from "react";

function PVCFlooring() {
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
        up1[i].classList.add("fadeInRight", "cssanimation");
      }
      for (var i = 0; i < up2.length; i++) {
        up2[i].classList.add("fadeInLeft", "cssanimation");
      }
      for (var i = 0; i < up5.length; i++) {
        up5[i].classList.add("fadeInUp", "cssanimation1s");
      }
    }
    if (window.scrollY >= 500) {
      for (var i = 0; i < up4.length; i++) {
        up4[i].classList.add("fadeInRight", "cssanimation");
      }
      for (var i = 0; i < up3.length; i++) {
        up3[i].classList.add("fadeInLeft", "cssanimation");
      }
    }
  }, []);
  return (
    <div className="pvc-flooring">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item up5">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>PVC Flooring</span>
                  </p>
                  <p className="breadcrumb-text">
                    Home <RightOutlined /> PVC Flooring
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
            <div className="menu-left">
              <div className="menu-content up2">
                <div className="link-menu">
                  <a href="/flooring">
                    <RightOutlined /> Flooring
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/floor-raising">
                    <RightOutlined /> Floor Raising
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/carpet-flooring">
                    <RightOutlined /> Carpet Flooring
                  </a>
                </div>
                <div
                  className="link-menu"
                  style={{ backgroundColor: "#543312" }}
                >
                  <a href="/pvc-flooring">
                    <RightOutlined /> PVC Flooring
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/wood-flooring">
                    <RightOutlined /> Wood Flooring
                  </a>
                </div>
              </div>

              <div className="form-contact">
                <div className="title-form">
                  <h2>Leave Your Number</h2>
                </div>
                <div className="sub-title">
                  <p>Let's Call You Back</p>
                </div>
                <div className="form-submit">
                  <form>
                    <div className="form-group col-12">
                      <input
                        type="text"
                        className="form-control input-form"
                        id="exampleInputName"
                        name="name"
                        // aria-describedby="emailHelp"
                        placeholder="Full Name"
                      />
                      <input
                        type="text"
                        className="form-control input-form"
                        id="exampleInputEmail"
                        // aria-describedby="emailHelp"
                        placeholder="Your Email Address"
                        name="email"
                      />
                      <input
                        type="text"
                        className="form-control input-form"
                        id="exampleInputPhone"
                        // aria-describedby="emailHelp"
                        placeholder="Phone Number"
                        name="phone"
                      />
                    </div>
                    <button type="submit" className="btn-contact">
                      Submit Form <ArrowRightOutlined />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="content-right up1">
              <div className="img-flo">
                <img src={img1} style={{ width: "100%" }} />
              </div>
              <div className="content-text-right">
                <div className="title-right">
                  <h2>PVC Flooring</h2>
                </div>
                <div className="sub-text">
                  PVC flooring service is a flooring service applied to
                  special-purpose facilities by our company. There are many
                  options for flooring. In addition to the polyurethane or epoxy
                  material flooring options, PVC flooring service is a method
                  used to obtain an anti-static floor.
                </div>
                <img className="img-text" src={img2} />
                <div className="sub-text">
                  Static electricity loads can cause very dangerous results in
                  medical electronic devices, electronic device facilities and
                  some chemical explosive facilities. For this purpose, you can
                  make your facilities safer by taking advantage of the PVC
                  flooring service applied by our company. Floor grounding
                  service may not be provided for our customers who want to
                  benefit from PVC flooring services for aesthetic purposes. In
                  this way, you can get rid of high costs and only get an
                  aesthetic and affordable floor.
                </div>
              </div>
              <div className="tablo">
                <div
                  className="tablo--1-ve-2"
                  onMouseOver={onHover}
                  onMouseOut={onHoverOut}
                >
                  <div className="box-content" id="box">
                    <div className="icon-right">
                      <LikeOutlined />
                    </div>
                    <div className="text-icon">
                      <b>Reliability</b>
                    </div>
                  </div>
                  <div
                    className="box-content1 d-none"
                    id="content1"
                    style={{ transform: "rotateX(180deg)" }}
                  >
                    <div className="text-icon">
                      <b>Reliability</b>
                    </div>
                    <div className="content-icon">
                      <p>
                        Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Cras ultricies ligula sed magna
                        dictum porta. Proin eget tortor risus.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="tablo--1-ve-2"
                  onMouseOver={onHover1}
                  onMouseOut={onHoverOut}
                >
                  <div className="box-content" id="box1">
                    <div className="icon-right">
                      <LikeOutlined />
                    </div>
                    <div className="text-icon">
                      <b>Reliability</b>
                    </div>
                  </div>
                  <div
                    className="box-content1 d-none"
                    id="content2"
                    style={{ transform: "rotateX(180deg)" }}
                  >
                    <div className="text-icon">
                      <b>Reliability</b>
                    </div>
                    <div className="content-icon">
                      <p>
                        Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Cras ultricies ligula sed magna
                        dictum porta. Proin eget tortor risus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PVCFlooring;
