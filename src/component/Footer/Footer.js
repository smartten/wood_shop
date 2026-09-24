import React from "react";
import {
  ArrowRightOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { mediaUrl } from "../../api/cms";
import { useSite } from "../../context/SiteContext";
import Icon from "../common/Icon";
import "./FooterStyle.scss";

function Footer() {
  const { global, services } = useSite();
  return (
    <div className="footer">
      <div className="footerv0">
        <div className="join">
          <div className="row">
            <div className="col-5">
              <div className="text">
                <h2>{global.newsletterTitle}</h2>
                <p>{global.newsletterText}</p>
              </div>
            </div>
            <div className="col-5">
              <div className="form-input">
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder={global.newsletterPlaceholder}
                    />
                  </div>
                  <button type="submit" className="btn-send">
                    {global.newsletterButton} <ArrowRightOutlined />
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
                  <img src={mediaUrl(global.logoWhite)} alt={global.siteName} />
                </div>
                <div className="info">
                  <EnvironmentOutlined /> {global.address}
                </div>
                <div className="info">
                  <PhoneOutlined />
                  {global.phone}
                </div>
                <div className="info">
                  <MailOutlined /> {global.email}
                </div>
              </div>
              <div className="col-3" style={{ marginTop: "150px" }}>
                <div className="title">
                  <h2>{global.footerServicesTitle}</h2>
                </div>
                <div className="link-services">
                  {services.map((service) => (
                    <div className="link" key={service.documentId}>
                      <a href={`/${service.slug}`}>{service.title}</a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-3" style={{ marginTop: "150px" }}>
                <div className="title">
                  <h2>{global.footerLinksTitle}</h2>
                </div>
                <div className="link-services">
                  {global.quickLinks.map((link) => (
                    <div className="link" key={link.id}>
                      <a href={link.url}>{link.label}</a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-3" style={{ marginTop: "150px" }}>
                <div className="title">
                  <h2>{global.footerTouchTitle}</h2>
                </div>
                <div className="lick-icon">
                  {global.socials.map((social) => (
                    <a href={social.url} key={social.id}>
                      <Icon name={social.platform} />
                    </a>
                  ))}
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
