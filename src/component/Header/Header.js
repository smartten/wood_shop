import logo from "./wood-logo.png";
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
                <a className="link" href="/">
                  About Us
                </a>
              </div>
              <div class="dropdown">
                <a class="link">Services</a>
                <div class="dropdown-content">
                  <div className="div-for-a">
                    <a href="" class="link-drop">
                      Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="" class="link-drop">
                      Floor Raising
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="" class="link-drop">
                      Carpet Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="" class="link-drop">
                      PVC Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="" class="link-drop">
                      Wood Flooring
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="" class="link-drop">
                      All Service
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a className="link" href="/">
                  Blog
                </a>
              </div>
              <div>
                <a className="link" href="/">
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
