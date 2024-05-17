import "./FlooringStyle.scss";
import {
  RightOutlined,
  ArrowRightOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import img1 from "./imgFlooring/wood-services-big-1.jpg";
import img2 from "./imgFlooring/divider.jpg";
import React, { useEffect } from "react";

function Flooring() {
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
    <div className="flooring">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item up5">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>Lát Sàn</span>
                  </p>
                  <p className="breadcrumb-text">
                    Trang Chủ <RightOutlined /> Lát Sàn
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
                <div
                  className="link-menu"
                  style={{ backgroundColor: "#543312" }}
                >
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
                <div className="link-menu">
                  <a href="/wood-flooring">
                    <RightOutlined /> Sàn Gỗ
                  </a>
                </div>
              </div>

              <div className="form-contact">
                <div className="title-form">
                  <h2>Để Lại Số Của Bạn</h2> {/*Leave Your Number */ }
                </div>
                <div className="sub-title">
                  <p>Hãy Gọi Lại Cho Bạn</p> {/*Let's Call You Back<*/ }
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
            <div className="content-right">
              <div className="img-flo up1">
                <img src={img1} style={{ width: "100%" }} />
              </div>
              <div className="content-text-right up1">
                <div className="title-right">
                  <h2>Lát Sàn</h2>
                </div>
                <div className="sub-text">
                Sàn công nghiệp là loại sàn được sử dụng phổ biến trong các nhà máy, 
                nhà kho, nơi làm việc, nhà kho, trạm xăng, bãi đỗ xe. Quá trình sản xuất được thực hiện, 
                vận chuyển và lưu trữ trên loại sàn này. 
                Nó phải dễ làm sạch và không trơn trượt vì chúng thường xuyên tiếp xúc với hóa chất.
                  
                  {/* Industrial flooring is a type of flooring that is generally
                  used in factories, warehouses, workplaces, warehouses, petrol
                  stations and parking lots. Production is carried out,
                  transported and stored on this type of floor. It should be
                  easy to clean and non-slip since they are frequently exposed
                  to chemicals. */}
                </div>
                <img className="img-text" src={img2} />
                <div className="sub-text">
                Dịch vụ trải sàn là loại hình trải sàn thịnh hành nhất hiện nay, 
                là một trong những sản phẩm mới nhất của công nghệ. 
                Nó có khả năng chống lại các hóa chất khắc nghiệt nhất với cấu trúc có độ bền cao. 
                Sàn chịu ma sát và mài mòn chủ yếu được sử dụng ở các sàn vận hành cao cấp như nhà máy, nhà chứa máy bay. 
                Loại sàn này có tuổi thọ lâu dài và có tác dụng tích cực đối với sức khỏe con người, 
                còn nổi tiếng là rất dễ lau chùi.
                 
                  {/* Flooring service, which is the most trendy floor covering type
                  of today, is one of the latest products of technology. It is
                  resistant to the harshest chemicals with a highly durable
                  structure. Friction and abrasion resistant floors are mostly
                  used in high-level operating floors such as factories and
                  hangars. This floor, which is long-lasting and has positive
                  effects on human health, is also known for being very easy to
                  clean. */}
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
                        {/* Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Cras ultricies ligula sed magna
                        dictum porta. Proin eget tortor risus. */}
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
                        {/* Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Cras ultricies ligula sed magna
                        dictum porta. Proin eget tortor risus. */}
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

export default Flooring;
