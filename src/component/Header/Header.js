import logo from "./wood-logo.png";
import logo2 from "./wood-logo2.png";
import "./HeaderStyle.scss";
import { Menu, Drawer } from "antd";
import { MenuOutlined, PhoneOutlined } from "@ant-design/icons";
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
        <a className="link-for-sub" href="/flooring">
          Flooring
        </a>,
        "1"
      ),
      getItem(
        <a className="link-for-sub" href="/floor-raising">
          Floor Raising
        </a>,
        "2"
      ),
      getItem(
        <a className="link-for-sub" href="/carpet-flooring">
          Carpet Flooring
        </a>,
        "3"
      ),
      getItem(
        <a className="link-for-sub" href="/pvc-flooring">
          PVC Flooring
        </a>,
        "11"
      ),
      getItem(
        <a className="link-for-sub" href="/wood-flooring">
          Wood Flooring
        </a>,
        "4"
      ),
      getItem(
        <a className="link-for-sub" href="/all-services">
          All Services
        </a>,
        "5"
      ),
    ]),
    getItem(
      <a className="link-for-res" href="/blog">
        Blog
      </a>,
      "blog"
    ),
    getItem(
      <a className="link-for-res" href="/contact">
        Contact
      </a>,
      "contact"
    ),
  ];
  return (
    <div className="header">
      <div style={{ zIndex: 999 }} id="infor" className="overlay transition">
        <p class="loader-content">
          <img src={logo2} style={{ width: "40%" }} />
        </p>
        <div class="loader-line-mask">
          <div class="loader-line"></div>
        </div>
      </div>
      <div className="header-content">
        <div className="containerv1">
          <div className="row">
            <div className="logo col-2">
              <a href="/">
                <img src={logo} />
              </a>
            </div>
            <div className="menu col-6">
              <div>
                <a className="link" href="/">
                  Home
                </a>
              </div>
              <div>
                <a className="link" href="/about-us">
                  About Us
                </a>
              </div>
              <div class="dropdown">
                <a class="link">Services</a>
                <div class="dropdown-content">
                  <div className="div-for-a">
                    <a href="/flooring" class="link-drop">
                      Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="/floor-raising" class="link-drop">
                      Floor Raising
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="/carpet-flooring" class="link-drop">
                      Carpet Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="pvc-flooring" class="link-drop">
                      PVC Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="wood-flooring" class="link-drop">
                      Wood Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="all-services" class="link-drop">
                      All Service
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a className="link" href="/blog">
                  Blog
                </a>
              </div>
              <div>
                <a className="link" href="/contact">
                  Contact
                </a>
              </div>
              {/* <Menu
                style={{
                  width: "100%",
                }}
                mode="inline"
                theme="light"
                items={items}
              /> */}
            </div>
            <div className="phone d-flex col-3">
              <div className="icon">
                <MenuOutlined />
              </div>
              <div className="phone-number">
                <PhoneOutlined /> +1 (234) 567 89 10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
