import { ArrowRightOutlined } from "@ant-design/icons";
import { mediaUrl } from "../../api/cms";
import { useSite } from "../../context/SiteContext";

// The "Let's Create A Great Design Together!" callback form (Home, All Services).
// The class props carry the scroll-animation hooks of the host page.
function ContactCta({ cta, imageClass = "", formColClass = "", textClass = "", formClass = "" }) {
  const { global } = useSite();
  const cls = (base, extra) => (extra ? `${base} ${extra}` : base);
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className={cls("col-lg-6", imageClass)}>
            <img src={mediaUrl(cta.image)} alt={cta.title} />
          </div>
          <div className={cls("col-lg-6", formColClass)}>
            <div className="contact-content">
              <div className={cls("text-contact", textClass)}>
                <p className="title-contact">{cta.title}</p>
                <p className="sub-contact">{cta.subtitle}</p>
              </div>
              <div className={cls("form-contact", formClass)}>
                <form>
                  <div className="d-flex">
                    <div className="form-group col-4">
                      <input
                        type="text"
                        className="form-control input-form"
                        placeholder={global.namePlaceholder}
                      />
                    </div>
                    <div className="form-group col-4">
                      <input
                        type="email"
                        className="form-control input-form"
                        placeholder={global.emailPlaceholder}
                      />
                    </div>
                    <div className="form-group col-4">
                      <input
                        type="text"
                        className="form-control input-form"
                        placeholder={global.phonePlaceholder}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-contact">
                    {cta.buttonText} <ArrowRightOutlined />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCta;
