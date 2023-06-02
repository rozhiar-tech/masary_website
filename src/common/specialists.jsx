import Link from "next/link";
import React from "react";

// choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "flaticon-microscope",
    title: (
      <>
        High Quality <br />
        Services
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 2,
    color: "pink-icon",
    icon: "flaticon-thinking",
    title: (
      <>
        Fast Working <br />
        Process
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "flaticon-24-hours-1",
    title: (
      <>
        24/7 Customer <br /> Support
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 4,
    color: "sky-icon",
    icon: "flaticon-team",
    title: (
      <>
        We have <br /> Expert Team
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
];

const Specialists = () => {
  return (
    <>
      <section className="choose-area theme-bg pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  Our Specialists
                </span>
                <h3 className="tp-section__title title-white mb-85">
                  Why Choose Us
                </h3>
              </div>
            </div>
          </div>
          {/* <div className="row">
            {choose.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-100 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className={`tp-choose__icon ${item.color} mb-40`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-choose__content">
                    <h4 className="tp-choose__title mb-20">{item.title}</h4>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="row">
            <div className="col-xl-7 col-md-6">
              <div
                className="tp-choose__item ml-75 mb-100 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className={`tp-choose__icon mb-40`}>
                  <i className="flaticon-microscope"></i>
                </div>
                <div className="tp-choose__content">
                  <h4 className="tp-choose__title mb-20">
                    High Quality <br />
                    Services
                  </h4>
                  <p>
                    When it comes to selecting a reliable and efficient partner
                    for your trading and processing needs, Masary Company for
                    General Trading and Processing Ltd stands out as the ideal
                    choice. With a proven track record and years of industry
                    experience, we have established ourselves as a leader in the
                    field. Our commitment to excellence and customer
                    satisfaction is unwavering, ensuring that your business
                    needs are met with the utmost professionalism and attention
                    to detail. We boast a highly skilled team of experts who
                    possess deep knowledge and expertise in the trading and
                    processing sector, enabling us to offer tailored solutions
                    to meet your specific requirements. Additionally, we have
                    built a vast network of trusted suppliers and partners,
                    allowing us to source high-quality products at competitive
                    prices, ensuring maximum value for your investment. Our
                    state-of-the-art facilities and cutting-edge technology
                    ensure efficient processing and timely delivery,
                    guaranteeing that your orders are handled with precision
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tp-choose-option">
                <span>
                  Laboratories Used For Scientific Research :
                  <Link href="/">
                    Take Many Forms<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialists;
