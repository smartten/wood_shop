import React from "react";
import {
  ArrowRightOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import logo1 from "./wood-logo-white.png";
import "./FooterStyle.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="footerv0">
        <div className="join">
          <div className="row">
            <div className="col-5">
              <div className="text">
                <h2>Tham gia bản tin của chúng tôi</h2> {/*Join Our Newsletter */}
                <p>Đăng ký để được thông báo về các dịch vụ và sản phẩm của chúng tôi.</p> {/*Subscribe to be informed about our services and products.*/}
              </div>
            </div>
            <div className="col-5">
              <div className="form-input">
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Địa Chỉ Email Của Bạn"
                    />
                  </div>
                  <button type="submit" class="btn-send">
                    Gửi <ArrowRightOutlined />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-v1">
        <div className="container">
          <div className="text-content">
            <div className="row">
              <div className="col-3" style={{ marginTop: "150px" }}>
                <div className="logo">
                  <img src={logo1} />
                </div>
                <div className="info">
                  <EnvironmentOutlined /> New Jersey, USA
                </div>
                <div className="info">
                  <PhoneOutlined />
                  0987654321
                </div>
                <div className="info">
                  <MailOutlined /> example@mail.com
                </div>
              </div>
              <div className="col-3" style={{ marginTop: "150px" }}>
                <div className="title">
                  <h2>Dịch Vụ</h2>
                </div>
                <div className="link-services">
                  <div className="link">
                    <a href="/">Lát Sàn</a>
                  </div>
                  <div className="link">
                    <a href="/">Nâng Sàn</a>
                  </div>
                  <div className="link">
                    <a href="/">Thảm Trải Sàn</a>
                  </div>
                  <div className="link">
                    <a href="/">Sàn PVC</a>
                  </div>
                  <div className="link">
                    <a href="/">Sàn Gỗ</a>
                  </div>
                </div>
              </div>
              <div className="col-3" style={{ marginTop: "150px" }}>
                <div className="title">
                  <h2>Đường Dẫn Nhanh</h2>
                </div>
                <div className="link-services">
                  <div className="link">
                    <a href="/">Trang Chủ</a>
                  </div>
                  <div className="link">
                    <a href="/">Về Chúng Tôi</a>
                  </div>
                  <div className="link">
                    <a href="/">Blog</a>
                  </div>
                  <div className="link">
                    <a href="/">Gói</a>
                  </div>
                  <div className="link">
                    <a href="/">Liên Hệ</a>
                  </div>
                </div>
              </div>
              <div className="col-3" style={{ marginTop: "150px" }}>
                <div className="title">
                  <h2>Liên Lạc</h2>
                </div>
                <div className="lick-icon">
                  <a className="/">
                    <InstagramOutlined />
                  </a>
                  <a className="/">
                    <InstagramOutlined />
                  </a>
                  <a className="/">
                    <InstagramOutlined />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
