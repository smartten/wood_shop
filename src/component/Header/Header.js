import "./HeaderStyle.scss";
import { MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import { mediaUrl } from "../../api/cms";
import { useSite } from "../../context/SiteContext";

function Header() {
  const { global, services } = useSite();
  return (
    <div className="header">
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="logo col-2">
              <a href="/">
                <img src={mediaUrl(global.logo)} alt={global.siteName} />
              </a>
            </div>
            <div className="menu col-6">
              <div>
                <a className="link" href="/">
                  {global.navHome}
                </a>
              </div>
              <div>
                <a className="link" href="/about-us">
                  {global.navAbout}
                </a>
              </div>
              <div className="dropdown">
                <a className="link">{global.navServices}</a>
                <div className="dropdown-content">
                  {services.map((service) => (
                    <div className="div-for-a" key={service.documentId}>
                      <a href={`/${service.slug}`} className="link-drop">
                        {service.title}
                      </a>
                    </div>
                  ))}
                  <div className="div-for-a">
                    <a href="/all-services" className="link-drop">
                      {global.navAllServices}
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a className="link" href="/blog">
                  {global.navBlog}
                </a>
              </div>
              <div>
                <a className="link" href="/contact">
                  {global.navContact}
                </a>
              </div>
            </div>
            <div className="phone d-flex col-3">
              <div className="icon">
                <MenuOutlined />
              </div>
              <div className="phone-number">
                <PhoneOutlined /> {global.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
