import "./ContactUsStyle.scss";
import { RightOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useCms } from "../../api/cms";
import { useSite } from "../../context/SiteContext";
import Icon from "../common/Icon";

function ContactUs() {
  const { global } = useSite();
  const { data: page, error } = useCms("contact-page");

  if (error) return <div style={{ padding: 40 }}>Could not load content: {error.message}</div>;
  if (!page) return null;

  return (
    <div className="contact-us">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>{page.title}</span>
                  </p>
                  <p className="breadcrumb-text">
                    {global.navHome} <RightOutlined /> {page.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tablo">
        <div className="container">
          <div className="row">
            {page.cards.map((card) => (
              <div className="col-4" key={card.id}>
                <div className="icon">
                  <Icon name={card.icon} />
                </div>
                <div className="title-tablo">
                  <h3>{card.title}</h3>
                </div>
                <div className="content-tablo">
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="form-contact">
            <div className="form-submit">
              <form>
                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control input-form"
                    name="name"
                    placeholder={global.namePlaceholder}
                  />
                  <input
                    type="text"
                    className="form-control input-form"
                    placeholder={global.emailPlaceholder}
                    name="email"
                  />
                  <input
                    type="text"
                    className="form-control input-form"
                    placeholder={global.phonePlaceholder}
                    name="phone"
                  />
                  <textarea
                    className="form-control"
                    placeholder={global.messagePlaceholder}
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn-contact">
                  {page.submitLabel} <ArrowRightOutlined />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {page.mapEmbedUrl && (
        <section className="maps">
          <iframe
            title="Map"
            src={page.mapEmbedUrl}
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      )}
    </div>
  );
}

export default ContactUs;
