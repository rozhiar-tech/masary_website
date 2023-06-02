import { Progress } from "antd";
import React from "react";
import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";

import helmetImage from "./assets/helmet.png";

const Choose = () => {
  return (
    <>
      <section
        className="choose-area grey-bg pt-125 pb-70 tp-box-space ml-30 mr-30"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-07.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  who we are
                </span>
                <h3 className="tp-section__title mb-75">Why Choose Us</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7 col-md-6">
              <div
                className="tp-choose__item ml-75 mb-100 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className={`tp-choose__icon mb-40`}>
                  <Image src={helmetImage} alt="icon" width={50} height={50} />
                </div>
                <div className="tp-choose__content">
                  <h4 className="tp-choose__title mb-20 text-black">
                    High Quality <br />
                    Services
                  </h4>
                  <p className="h2">
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
        </div>
      </section>
    </>
  );
};

export default Choose;
