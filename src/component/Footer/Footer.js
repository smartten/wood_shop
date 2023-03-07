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
      <div className="container footerv0">
        <div className="join">
          <div className="row">
            <div className="col-5">
              <div className="text">
                <h2>Join Our Newsletter</h2>
                <p>Subscribe to be informed about our services and products.</p>
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
                      placeholder="Your Email Address"
                    />
                  </div>
                  <button type="submit" class="btn-send">
                    Send <ArrowRightOutlined />
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
                  <h2>Services</h2>
                </div>
                <div className="link-services">
                  <div className="link">
                    <a href="/">Flooring</a>
                  </div>
                  <div className="link">
                    <a href="/">Floor Raising</a>
                  </div>
                  <div className="link">
                    <a href="/">Carpet Flooring</a>
                  </div>
                  <div className="link">
                    <a href="/">PVC Flooring</a>
                  </div>
                  <div className="link">
                    <a href="/">Wood Flooring</a>
                  </div>
                </div>
              </div>
              <div className="col-3" style={{ marginTop: "150px" }}>
                <div className="title">
                  <h2>Quick Links</h2>
                </div>
                <div className="link-services">
                  <div className="link">
                    <a href="/">Home</a>
                  </div>
                  <div className="link">
                    <a href="/">About Us</a>
                  </div>
                  <div className="link">
                    <a href="/">Blog</a>
                  </div>
                  <div className="link">
                    <a href="/">Packages</a>
                  </div>
                  <div className="link">
                    <a href="/">Contact</a>
                  </div>
                </div>
              </div>
              <div className="col-3" style={{ marginTop: "150px" }}>
                <div className="title">
                  <h2>Get In Touch</h2>
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
