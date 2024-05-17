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
      // var bigGuy = document.getElementsByClassName("big-guys");
      if (window.scrollY >= 200) {
        for (var i = 0; i < up1.length; i++) {
          up1[i].classList.add("fadeInRight", "cssanimation");
        }
        for (var i = 0; i < up5.length; i++) {
          up5[i].classList.add("fadeInOpen", "cssanimation");
        }
      }
      if (window.scrollY >= 250) {
        for (var i = 0; i < up2.length; i++) {
          up2[i].classList.add("fadeInRight", "cssanimation");
        }
      }
      // if (window.scrollY >= 1560) {
      //   for (var i = 0; i < bigGuy.length; i++) {
      //     bigGuy[i].classList.add("fadeInLeft", "cssanimation");
      //   }
      // }
      if (window.scrollY >= 420) {
        for (var i = 0; i < up3.length; i++) {
          up3[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 450) {
        for (var i = 0; i < up4.length; i++) {
          up4[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 600) {
        for (var i = 0; i < up6.length; i++) {
          up6[i].classList.add("fadeInOpen", "cssanimation");
        }
      }
      if (window.scrollY >= 940) {
        for (var i = 0; i < up8.length; i++) {
          up8[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1070) {
        for (var i = 0; i < up7.length; i++) {
          up7[i].classList.add("fadeInRight", "cssanimation");
        }
      }
      if (window.scrollY >= 1400) {
        for (var i = 0; i < up10.length; i++) {
          up10[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1440) {
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
                <div className="container">
                  <div className="slide-content">
                    <div className="text-slider">
                      <p className="text-title">
                        <span>Sáng Tạo Hiện Đại </span>
                      </p>
                      <p className="text-title">Dịch Vụ Lát Sàn</p>
                      <p className="sub-text">
                        Lát Sàn Tuỳ Chọn Trong Ngân Sách Của Bạn.
                      </p>
                      <a href="" target="_blank" className="btn btn-detail">
                        Tìm Hiểu Thêm <ArrowRightOutlined />
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
                        <span>Bạn Có Cần</span>
                      </p>
                      <p className="text-title">Dịch Vụ Lát Sàn</p>
                      <p className="sub-text">
                        Vậy Thì Bạn Đang Ở Đúng Nơi
                      </p>
                      <a href="" target="_blank" className="btn btn-detail">
                        Tìm Hiểu Thêm <ArrowRightOutlined />
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
                        <span>Nhận Lát Sàn</span>
                      </p>
                      <p className="text-title">Dịch Vụ Ngay Bây Giờ</p>
                      <p className="sub-text">
                        Vậy Thì Bạn Đang Ở Đúng Nơi
                      </p>
                      <a href="" target="_blank" className="btn btn-detail">
                        Tìm Hiểu Thêm <ArrowRightOutlined />
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
                  <h6>Dịch Vụ Khách Hàng Cá Nhân</h6>
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
                    <h6>Số Năm Kinh Nghiệm</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-content">
              <div className="text-title up1">
                <h3>Bạn Có Cần Dịch Vụ Lát Sàn?</h3>
              </div>
              <div className="sub-text up3">
                <p>
                Với đội ngũ nhân viên chuyên nghiệp của chúng tôi, 
                chúng tôi mang đến một góc nhìn mới cho ngôi nhà của bạn với các dịch vụ lắp đặt và lát sàn kinh tế, 
                sang trọng, nhanh chóng và chất lượng. Hãy chọn gói dịch vụ lát sàn phù hợp với túi tiền của bạn, 
                chúng tôi sẽ đến làm mới ngay.
                  
                  {/* With our expert staff, we add a new perspective to your home
                  in economic, luxury, fast and quality flooring and
                  installation services. Choose the flooring service package
                  that fits your budget, and we'll come and renew it right away. */}
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
                  <div className="title-icon">Đội Ngũ Chuyên Nghiệp</div>  {/*Professional Team*/ }
                  <div className="text-icon">
                  Chúng tôi tạo ra các giải pháp đảm bảo trong mọi công trình lát sàn với 
                  đội ngũ có năng lực và giàu kinh nghiệm.
                   
                    {/* We produce guaranteed solutions in all flooring works with
                    our competent and experienced team. */}
                  </div>
                </div>
              </div>
              <div className="content-2 up2">
                <div className="icon">
                  <ClockCircleOutlined />
                </div>
                <div className="content-icon">
                  <div className="title-icon">Lát Sàn Nhanh Chóng</div> {/*Quick Flooring*/ }
                  <div className="text-icon">
                  Nhờ chuyên môn vững chắc, chúng tôi xây dựng không gian tùy chỉnh 
                  bằng cách phủ sàn của bạn rất nhanh chóng.
                    
                    {/* Thanks to our solid expertise, we build custom spaces by
                    covering your floors very quickly. */}
                  </div>
                </div>
              </div>
              <div className="button-get up4">
                <a href="">
                  Nhận Biết Chúng Tôi Tốt Hơn <ArrowRightOutlined /> {/*Get to know us*/ }
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services">
        <div className="container">
          <div className="title-service">
            <h3>Dịch Vụ Lát Sàn Của Chúng Tôi</h3>  {/*Our Flooring Services*/ }
            <p>Chúng tôi luôn sẵn sàng phục vụ cho tất cả các loại sàn của bạn.</p> {/*We are at your service for all your flooring.*/ }
          </div>

          <div className="upservices">
            <Slider {...settings}>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice1} />
                </div>
                <div className="text-service">
                  <h2>Lát Sàn</h2>  {/*Flooring */ }
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice2} />
                </div>
                <div className="text-service">
                  <h2>Nâng Sàn</h2> {/*Floor Raising*/ } 
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice3} />
                </div>
                <div className="text-service">
                  <h2>Thảm Trải Sàn</h2> {/*Carpet Flooring */ }
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice4} />
                </div>
                <div className="text-service">
                  <h2>Sàn PVC</h2> {/*PVC Flooring */ }
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice5} />
                </div>
                <div className="text-service">
                  <h2>Sàn Gỗ</h2> {/*Wood Flooring */ }
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
            <div className="col-lg-6 up-contact">
              <img src={imgContact} />
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="text-contact up-contact">
                  <p className="title-contact">
                    Hãy Cùng Nhau Tạo Ra Một Thiết Kế Tuyệt Vời! 
                    {/*Let's Create A Great Design Together!  */ }
                  </p>
                  <p className="sub-contact">
                  Điền vào mẫu thông tin chi tiết về các dịch vụ sàn của chúng tôi.
                    {/*Fill out the detailed information form about our flooring
                    services. */ }
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
                          placeholder="Họ Và Tên"
                        />
                      </div>
                      <div className="form-group col-4">
                        <input
                          type="email"
                          className="form-control input-form"
                          id="exampleInputEmail1"
                          // aria-describedby="emailHelp"
                          placeholder="Địa Chỉ Email"
                        />
                      </div>
                      <div className="form-group col-4">
                        <input
                          type="text"
                          className="form-control input-form"
                          id="exampleInputPhone"
                          // aria-describedby="emailHelp"
                          placeholder="Số Điện Thoại"
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
                      Gọi Lại <ArrowRightOutlined />
                      {/*Call Back */ }
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
          <div className="icon up-comment">
            <LikeOutlined />
          </div>
          <div className="title-comment up-comment">
            <p className="title-text">Khách hàng của chúng tôi đang nói gì ?</p> {/*What Are Our Customers Saying ? */ }
            <p className="sub-text">Ý kiến ​​từ những khách hàng hài lòng của chúng tôi.</p> {/*Opinions from our happy customers. */ }
          </div>
          <div className="row left-comment">
            <div className="col-3">
              <div className="class-box">
                <div className="testimon-text">
                Chúng tôi cần một tấm trải sàn cho phòng khách của ngôi nhà của chúng tôi. 
                Họ đã làm công việc chuyên nghiệp. Cảm ơn.
                  {/*We needed a floor covering for the living room of our house.
                  They did professional work. Thank you.*/ }
                  {/* <i class="fas fa-quote-right quote" aria-hidden="true"></i>  */}
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
                Chúng tôi cần một tấm trải sàn cho phòng khách của ngôi nhà của chúng tôi. 
                Họ đã làm công việc chuyên nghiệp. Cảm ơn.
                  {/*We needed a floor covering for the living room of our house.
                  They did professional work. Thank you. */ }
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
                Chúng tôi cần một tấm trải sàn cho phòng khách của ngôi nhà của chúng tôi. 
                Họ đã làm công việc chuyên nghiệp. Cảm ơn.
                  {/*We needed a floor covering for the living room of our house.
                  They did professional work. Thank you. */ }
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
                Chúng tôi cần một tấm trải sàn cho phòng khách của ngôi nhà của chúng tôi. 
                Họ đã làm công việc chuyên nghiệp. Cảm ơn.
                  {/*Flooring */ }
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
