import image1 from "./wood-services-big-1.jpg";
import image2 from "./divider.jpg";
import React from "react";
import "./floorStyles.scss";
import { RightOutlined } from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}
const items = [
  getItem(
    <a className="floor-menu" href="">
      Flooring
    </a>,
    "1",
    <RightOutlined />
  ),
  getItem(<a href="">Floor Raising</a>, "2", <RightOutlined />),
  getItem(<a href="">Carpet Flooring</a>, "3", <RightOutlined />),
  getItem(<a href="">PVC Flooring</a>, "4", <RightOutlined />),
  getItem(<a href="">Wood Flooring</a>, "5", <RightOutlined />),
];
function Flooring() {
  return (
    <>
      <div className="container-fluid m-0 g-0 p-0">
        <div className="floor-header">
          <div className="col-12 g-0">
            <div class="container">
              <h2>Flooring</h2>
              <p>
                <a href="">Home&nbsp;</a>
                <span style={{ fontWeight: 300 }}>&gt;</span>&nbsp;Flooring
              </p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2.2rem" }} className="row mb-5 p-0 g-0">
          <div className="col-4 px-3">
            <Menu
              style={{
                width: "100%",
              }}
              mode="inline"
              items={items}
            />
            <div className="callbackform mt-4 pb-3">
              <h2>Leave Your Number</h2>
              <p>Let's Call You Back</p>

              <div className="form-popup px-5">
                <form>
                  <input
                    type="text"
                    className="form-popup__input"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    className="form-popup__input"
                    placeholder="Email Address"
                  />
                  <input
                    type="text"
                    className="form-popup__input"
                    placeholder="Phone Number"
                  />
                  <input
                    type="submit"
                    value="Submit Form →"
                    className="custom-buttonf mb-5"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="col-8 px-3">
            <img style={{ width: "100%" }} src={image1} />
            <div className="h2-basik mt-3">
              <h2>Flooring</h2>
              <p>
                Industrial flooring is a type of flooring that is generally used
                in factories, warehouses, workplaces, warehouses, petrol
                stations and parking lots. Production is carried out,
                transported and stored on this type of floor. It should be easy
                to clean and non-slip since they are frequently exposed to
                chemicals.
              </p>
              <img className="divider" src={image2} />
              <p></p>
              <p>
                Flooring service, which is the most trendy floor covering type
                of today, is one of the latest products of technology. It is
                resistant to the harshest chemicals with a highly durable
                structure. Friction and abrasion resistant floors are mostly
                used in high-level operating floors such as factories and
                hangars. This floor, which is long-lasting and has positive
                effects on human health, is also known for being very easy to
                clean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flooring;
