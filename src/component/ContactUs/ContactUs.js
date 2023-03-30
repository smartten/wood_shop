import "./ContactUsStyle.scss";
import {
  RightOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";
function ContactUs() {
  return (
    <div className="contact-us">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="containerv1">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>Contact</span>
                  </p>
                  <p className="breadcrumb-text">
                    Home <RightOutlined /> Contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tablo">
        <div className="containerv1">
          <div className="row">
            <div className="col-4">
              <div className="icon">
                <PhoneOutlined />
              </div>
              <div className="title-tablo">
                <h3>CUSTOMER SERVICE</h3>
              </div>
              <div className="content-tablo">
                <p>+1 (234) 567 89 10</p>
              </div>
            </div>
            <div className="col-4">
              <div className="icon">
                <MailOutlined />
              </div>
              <div className="title-tablo">
                <h3>MAIL ADDRESS</h3>
              </div>
              <div className="content-tablo">
                <p>example@example.com</p>
              </div>
            </div>
            <div className="col-4">
              <div className="icon">
                <HomeOutlined />
              </div>
              <div className="title-tablo">
                <h3>OFFICE</h3>
              </div>
              <div className="content-tablo">
                <p>Yeşilplnar Mh. Tepe Sk. Eyüp İstanbul</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="containerv1">
          <div className="form-contact">
            <div className="form-submit">
              <form>
                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control input-form"
                    id="exampleInputName"
                    name="name"
                    // aria-describedby="emailHelp"
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    className="form-control input-form"
                    id="exampleInputEmail"
                    // aria-describedby="emailHelp"
                    placeholder="Your Email Address"
                    name="email"
                  />
                  <input
                    type="text"
                    className="form-control input-form"
                    id="exampleInputPhone"
                    // aria-describedby="emailHelp"
                    placeholder="Phone Number"
                    name="phone"
                  />
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn-contact">
                  Send Form <ArrowRightOutlined />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14896.603644108816!2d105.77032909999998!3d21.02664685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1678332636542!5m2!1svi!2s"
          style={{ border: 0, width: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}

export default ContactUs;
