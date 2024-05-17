import "./CarpetFlooringStyle.scss";
import {
  RightOutlined,
  ArrowRightOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import img1 from "./imgFlooring/wood-services-big-1.jpg";
import img2 from "./imgFlooring/divider.jpg";
import React, { useEffect } from "react";

function CarpetFlooring() {
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
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        for (var i = 0; i < up4.length; i++) {
          up4[i].classList.add("fadeInRight", "cssanimation");
        }
        for (var i = 0; i < up3.length; i++) {
          up3[i].classList.add("fadeInLeft", "cssanimation");
        }
      }
    });
  }, []);
  return (
    <div className="carpet-flooring">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item up5">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>Thảm Trải Sàn</span>
                  </p>
                  <p className="breadcrumb-text">
                    Trang Chủ <RightOutlined /> Thảm Trải Sàn
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
                    <RightOutlined /> lát Sàn
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/floor-raising">
                    <RightOutlined /> Nâng Sàn
                  </a>
                </div>
                <div
                  className="link-menu"
                  style={{ backgroundColor: "#543312" }}
                >
                  <a href="/carpet-flooring">
                    <RightOutlined /> Thảm Trải Sàn
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/pvc-flooring">
                    <RightOutlined /> Sàn PVC
                  </a>
                </div>
                <div className="link-menu">
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
                  <h2>Thảm Trải Sàn</h2>
                </div>
                <div className="sub-text">
                Gạch thảm, còn được gọi là thảm mô-đun, là một lựa chọn sàn linh hoạt đang ngày càng phổ biến cho các dự án thương mại thuộc hầu hết mọi loại hình. 
                Có thảm ở khắp mọi nơi bạn đi. Thảm có thể được tìm thấy ở nơi làm việc, ở nhà và thậm chí cả trong phòng tắm. 
                Thảm trải sàn có thể được lắp đặt theo nhiều cách khác nhau để tạo ra những hiệu ứng khác nhau. 
                Thông thường nhất, cùng một loại gạch được sử dụng cho các phòng có màu đồng nhất hoặc hoa văn đơn giản.
                  {/* Carpet tile, also known as modular carpet, is a versatile
                  flooring option that is growing in popularity for commercial
                  projects of almost any type. There is carpet everywhere you
                  go. Carpet can be found at work, in your home, and even in
                  bathrooms. Carpet tiles can be installed in numerous
                  configurations to create different effects. Most commonly, the
                  same tile is used for rooms in a solid color or a simple */}
                  pattern. 
                </div>
                <img className="img-text" src={img2} />
                <div className="sub-text">
                Các đường nối giữa các tấm thảm có thể được ẩn hoặc làm nổi bật tùy thuộc vào hiệu ứng 
                tổng thể mong muốn và tính mô-đun của các tấm thảm có thể khiến nó trở thành công cụ sáng tạo tuyệt vời cho các kiến ​​trúc sư và nhà thiết kế nội thất. 
                Bên cạnh những hiệu ứng sàn tuyệt vời mà bạn có thể đạt được, 
                thảm trải sàn còn giúp tiết kiệm đáng kể cả về chi phí và thời gian để trải thảm từ tường này sang tường khác.
                  {/* The seams between carpet tiles can be hidden or highlighted
                  depending on the overall effect desired, and the modularity of
                  carpet tiles can make it a great creative tool for architects
                  and interior designers. Besides the amazing flooring effects
                  you can achieve, carpet tiles provide significant savings in
                  terms of both cost and time to wall-to-wall carpet.  */}
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

export default CarpetFlooring;
