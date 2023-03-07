import "./FlooringStyle.scss";
import { RightOutlined } from "@ant-design/icons";
function Flooring() {
  return (
    <div className="flooring">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>Flooring</span>
                  </p>
                  <p className="breadcrumb-text">
                    Home <RightOutlined /> Flooring
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
            <div className="menu-left">
              <div className="menu-content">
                <div
                  className="link-menu"
                  style={{ backgroundColor: "#543312" }}
                >
                  <a href="/">
                    <RightOutlined /> Flooring
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/">
                    <RightOutlined /> Floor Raising
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/">
                    <RightOutlined /> Carpet Flooring
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/">
                    <RightOutlined /> PVC Flooring
                  </a>
                </div>
                <div className="link-menu">
                  <a href="/">
                    <RightOutlined /> Wood Flooring
                  </a>
                </div>
              </div>
            </div>
            <div className="content-right">2</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Flooring;
