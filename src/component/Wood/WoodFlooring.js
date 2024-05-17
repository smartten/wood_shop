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
    <div className="wood-flooring">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item up5">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>Sàn Gỗ</span>
                  </p>
                  <p className="breadcrumb-text">
                    Trang Chủ <RightOutlined /> Sàn Gỗ
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
                <div className="link-menu">
                  <a href="/flooring">
                    <RightOutlined /> Lát Sàn
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/floor-raising">
                    <RightOutlined /> Nâng Sàn
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/carpet-flooring">
                    <RightOutlined /> Thảm Trải Sàn
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/pvc-flooring">
                    <RightOutlined /> Sàn PVC
                  </a>
                </div>
                <div
                  className="link-menu"
                  style={{ backgroundColor: "#543312" }}
                >
                  <a href="/wood-flooring">
                    <RightOutlined /> Sàn Gỗ
                  </a>
                </div>
              </div>

              <div className="form-contact">
                <div className="title-form">
                  <h2>Để Lại Số Của Bạn</h2>
                </div>
                <div className="sub-title">
                  <p>Hãy Gọi Lại Cho Bạn</p>
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
                        placeholder="Họ Và Tên"
                      />
                      <input
                        type="text"
                        className="form-control input-form"
                        id="exampleInputEmail"
                        // aria-describedby="emailHelp"
                        placeholder="Địa Chỉ Email Của Bạn"
                        name="email"
                      />
                      <input
                        type="text"
                        className="form-control input-form"
                        id="exampleInputPhone"
                        // aria-describedby="emailHelp"
                        placeholder="Số Điện Thoại"
                        name="phone"
                      />
                    </div>
                    <button type="submit" className="btn-contact">
                      Gửi Biểu Mẫu <ArrowRightOutlined />
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
                  <h2>Sàn Gỗ</h2>
                </div>
                <div className="sub-text">
                Sàn gỗ nổi bật đặc biệt bởi “độ bền” của nó. Vì lý do này, 
                nó là một mô hình trải sàn được yêu cầu cao. 
                Mặt khác, khi xem xét về mặt giá cả, 
                chúng ta có thể nói rằng có những sản phẩm được chào bán với giá rất hợp lý.
                  {/* Wooden flooring stands out especially with its “durability”.
                  For this reason, it is a highly demanded floor covering model.
                  On the other hand, when we examine in terms of prices, we can
                  say that there are products offered for sale at very
                  reasonable prices. */}
                </div>
                <img className="img-text" src={img2} />
                <div className="sub-text">
                Mặc dù công ty chúng tôi cung cấp cho bạn các tùy chọn thiết kế sàn gỗ nhưng công ty cũng cung cấp dịch vụ giao hàng, 
                hỗ trợ kỹ thuật mạnh mẽ và các tùy chọn giá cả hợp lý. 
                Vì vậy chúng tôi luôn làm hài lòng những khách hàng quan tâm đến chất lượng
                  {/* While our company offers you wooden flooring design options,
                  it also offers delivery, strong technical support and
                  reasonable price options. Therefore, we always satisfy our
                  customers who care about quality. */}
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
                      <b>Độ Tin Cậy</b>
                    </div>
                  </div>
                  <div
                    className="box-content1 d-none"
                    id="content1"
                    style={{ transform: "rotateX(180deg)" }}
                  >
                    <div className="text-icon">
                      <b>Độ Tin Cậy</b>
                    </div>
                    <div className="content-icon">
                      <p>
                      Hãy sống công bằng tuyệt vời, Lacinia cần phải được tuân theo, 
                      nhưng thung lũng và khu vực. 
                      Ngày mai cổng nghe nói nhỏ mà lớn. 
                      Anh ấy cần một nụ cười thật tươi.
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
                      <b>Độ Tin Cậy</b>
                    </div>
                  </div>
                  <div
                    className="box-content1 d-none"
                    id="content2"
                    style={{ transform: "rotateX(180deg)" }}
                  >
                    <div className="text-icon">
                      <b>Độ Tin Cậy</b>
                    </div>
                    <div className="content-icon">
                      <p>
                      Hãy sống công bằng tuyệt vời, Lacinia cần phải được tuân theo, 
                      nhưng thung lũng và khu vực. 
                      Ngày mai cổng nghe nói nhỏ mà lớn. 
                      Anh ấy cần một nụ cười thật tươi.
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
