import "./WoodFlooringStyle.scss";
import {
  RightOutlined,
  ArrowRightOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import img1 from "./imgFlooring/wood-services-big-1.jpg";
import img2 from "./imgFlooring/divider.jpg";
import React, { useEffect } from "react";

function WoodFlooring() {
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
  //   useEffect(() => {
  //     // document.title = "AVEO Global - Financial";
  //   }, []);
  return (
    <div className="wood-flooring">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>Wood Flooring</span>
                  </p>
                  <p className="breadcrumb-text">
                    Home <RightOutlined /> Wood Flooring
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
              <div className="menu-content">
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
                <div className="link-menu">
                  <a href="/pvc-flooring">
                    <RightOutlined /> PVC Flooring
                  </a>
                </div>
                <div
                  className="link-menu"
                  style={{ backgroundColor: "#543312" }}
                >
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
            <div className="content-right">
              <div className="img-flo">
                <img src={img1} />
              </div>
              <div className="content-text-right">
                <div className="title-right">
                  <h2>Wood Flooring</h2>
                </div>
                <div className="sub-text">
                  Wooden flooring stands out especially with its “durability”.
                  For this reason, it is a highly demanded floor covering model.
                  On the other hand, when we examine in terms of prices, we can
                  say that there are products offered for sale at very
                  reasonable prices.
                </div>
                <img className="img-text" src={img2} />
                <div className="sub-text">
                  While our company offers you wooden flooring design options,
                  it also offers delivery, strong technical support and
                  reasonable price options. Therefore, we always satisfy our
                  customers who care about quality.
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

export default WoodFlooring;
