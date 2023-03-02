import logo from "./wood-logo.png";
import "./HeaderStyle.scss";
import { Menu, Drawer } from "antd";
function Header() {
  function getItem(label, key, children) {
    return {
      key,
      label,
      children,
    };
  }
  const items = [
    getItem(
      <a className="link-for-res" href="/">
        Home
      </a>,
      "home"
    ),
    getItem(
      <a className="link-for-res" href="/">
        About Us
      </a>,
      "about"
    ),
    getItem(<a className="link-for-res">Services</a>, "services", [
      getItem(
        <a className="link-for-sub" href="/offshore-development">
          Flooring
        </a>,
        "1"
      ),
      getItem(
        <a className="link-for-sub" href="/web-application">
          Floor Raising
        </a>,
        "2"
      ),
      getItem(
        <a className="link-for-sub" href="/mobile-application">
          Carpet Flooring
        </a>,
        "3"
      ),
      getItem(
        <a className="link-for-sub" href="/custom-software">
          PVC Flooring
        </a>,
        "11"
      ),
      getItem(
        <a className="link-for-sub" href="/testing-service">
          Wood Flooring
        </a>,
        "4"
      ),
      getItem(
        <a className="link-for-sub" href="/cloud-service">
          All Services
        </a>,
        "5"
      ),
    ]),
    getItem(
      <a className="link-for-res" href="/">
        Packages
      </a>,
      "packages"
    ),
    getItem(
      <a className="link-for-res" href="/">
        Blog
      </a>,
      "blog"
    ),
    getItem(
      <a className="link-for-res" href="/">
        Contact
      </a>,
      "contact"
    ),
  ];
  return (
    <div className="header">
      <div className="header-content">
        <div className="container">
          <div className="d-flex">
            <div className="logo">
              <a href="/">
                <img src={logo} />
              </a>
            </div>
            <div className="menu">
              <Menu
                style={{
                  width: "100%",
                }}
                mode="inline"
                theme="light"
                items={items}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
