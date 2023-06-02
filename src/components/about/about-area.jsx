import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-12">
              <div
                className="tp-about-thumb mb-60 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/about/about-bg-04.png"
                      alt="about-thumb"
                    />
                    <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">
                        <Count add_style={true} number={12} />
                      </h3>
                      <i>
                        Years of <br />
                        Experience
                      </i>
                    </div>
                  </div>
                  <div className="tp-ab-shape d-none d-md-block d-lg-none d-xl-block">
                    <img
                      className="ab-shape-one"
                      src="/assets/img/about/about-bg-05.jpg"
                      alt="about-shape"
                    />
                    <img
                      className="ab-shape-two"
                      src="/assets/img/about/about.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25">
                    We’ll Ensure You Alwasy Get Best Results.
                  </h3>
                  <a className="tp-section__link" href="#">
                    Read our MIssion & Vission & products Qualities{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <p className=" mr-20 mb-40">
                    Mission: <br />
                    At Masary, our mission is to provide superior products and
                    services that meet the highest standards of quality and
                    reliability. We strive to be a leading supplier of German
                    plastic pipes and fittings, offering innovative solutions
                    for water and drainage systems across Iraq. Our goal is to
                    contribute to the development of sustainable infrastructure
                    that supports the growth and well-being of local
                    communities. <br />
                    Vision:
                    <br /> Our vision is to be the preferred choice for
                    customers seeking top-quality German plastic pipes and
                    fittings in Iraq. We aim to build long-term relationships
                    with our clients based on trust, professionalism, and mutual
                    success. By continuously improving our products and
                    services, embracing technological advancements, and
                    fostering a culture of innovation, we seek to be at the
                    forefront of the industry. Furthermore, we envision a future
                    where efficient and sustainable water and drainage systems
                    are widely implemented throughout Iraq. By providing
                    reliable products that adhere to international standards, we
                    strive to contribute to the overall improvement of
                    infrastructure, water management, and environmental
                    sustainability in the country. <br /> Product Quality :
                    <br /> At Masary for General Trading and Processing, we
                    prioritize the quality of our products above all else. We
                    understand that reliable and durable solutions are crucial
                    for the success and longevity of water and drainage systems.
                    Therefore, we partner with renowned German manufacturers who
                    adhere to stringent quality standards. Our products undergo
                    rigorous testing and inspection processes to ensure they
                    meet or exceed international specifications. By sourcing
                    high-grade materials and employing advanced manufacturing
                    techniques, we consistently deliver products that exhibit
                    exceptional strength, corrosion resistance, and longevity.
                    We are committed to providing our customers with the peace
                    of mind that comes from knowing they are investing in
                    products of the highest quality, enabling them to build
                    robust and efficient water and drainage systems that
                    withstand the test of time.
                  </p>
                </div>
                <div className="tp-about__info-list ab-check-list mb-55">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>Quality
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Customer Focus
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Integrity euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Innovation
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Collaboration
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Sustainability
                    </li>
                  </ul>
                </div>
                <div className="about-content__btn">
                  <Link href="/about" className="tp-btn">
                    About us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
