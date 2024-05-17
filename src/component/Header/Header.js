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
        Trang Chủ
      </a>,
      "home"
    ),
    getItem(
      <a className="link-for-res" href="/">
        Về Chúng Tôi
      </a>,
      "about"
    ),
    getItem(<a className="link-for-res">Services</a>, "services", [
      getItem(
        <a className="link-for-sub" href="/flooring">
          Lát Sàn
        </a>,
        "1"
      ),
      getItem(
        <a className="link-for-sub" href="/floor-raising">
          Nâng Sàn
        </a>,
        "2"
      ),
      getItem(
        <a className="link-for-sub" href="/carpet-flooring">
          Trải Thảm
        </a>,
        "3"
      ),
      getItem(
        <a className="link-for-sub" href="/pvc-flooring">
          Sàn PVC
        </a>,
        "11"
      ),
      getItem(
        <a className="link-for-sub" href="/wood-flooring">
          Sàn Gỗ
        </a>,
        "4"
      ),
      getItem(
        <a className="link-for-sub" href="/all-services">
          Tất Cả Dịch Vụ
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
        Liên Hệ
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
                  Trang Chủ
                </a>
              </div>
              <div>
                <a className="link" href="/about-us">
                  Về Chúng Tôi
                </a>
              </div>
              <div class="dropdown">
                <a class="link">Dịch Vụ</a>
                <div class="dropdown-content">
                  <div className="div-for-a">
                    <a href="/flooring" class="link-drop">
                      Lát Sàn
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="/floor-raising" class="link-drop">
                      Nâng Sàn
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="/carpet-flooring" class="link-drop">
                      Thảm Trải Sàn
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="pvc-flooring" class="link-drop">
                      Sàn PVC
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="wood-flooring" class="link-drop">
                      Sàn Gỗ
                    </a>
                  </div>
                  <div className="div-for-a">
                    <a href="all-services" class="link-drop">
                      Tất Cả Dịch Vụ
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
                  Liên Hệ
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
