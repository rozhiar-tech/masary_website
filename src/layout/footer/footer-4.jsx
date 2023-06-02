import Link from "next/link";
import React from "react";

const FooterFour = ({ style_2 = false }) => {
  return (
    <>
      <footer>
        <div
          className={`footer-area ${
            style_2 ? "pt-105" : "tp-footer-white-content theme-bg pt-95"
          } `}
        >
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-footer-widget__content mb-95">
                      <i>FEEL FREE TO CONTACT US</i>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <a href="tel:0750 333 6020">0750 333 6020</a>
                      </h4>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <a href="tel:0750 333 6020">0773 903 2525</a>
                      </h4>

                      <a href="mailto:noreply@envato.com">noreply@envato.com</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Useful links
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/contact">Contact us</Link>
                        </li>
                        <li>
                          <Link href="/about">Help & About us</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-10">
                        Opening Hours
                      </span>
                      <div className="tp-footer-widget__list">
                        <ul>
                          <li>Office Hours: 8AM - 11PM</li>
                          <li>Office Hours: 8AM - 11PM</li>
                          <li>Sunday - Wekend Day</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-3 mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Customer Service
                    </span>
                    <div className="tp-footer-widget__links">
                      <ul>
                        <li>
                          <a href="#">Orders</a>
                        </li>
                        <li>
                          <a href="#">Product</a>
                        </li>
                        <li>
                          <a href="shop-details">Shipping & Returns</a>
                        </li>
                        <li>
                          <a href="#">Addresses</a>
                        </li>
                        <li>
                          <a href="#">Account details</a>
                        </li>
                        <li>
                          <a href="#">Shop</a>
                        </li>
                        <li>
                          <a href="#">Lost password</a>
                        </li>
                        <li>
                          <a href="#">Account</a>
                        </li>
                        <li>
                          <a href="#">Downloads</a>
                        </li>
                        <li>
                          <a href="#">Orders</a>
                        </li>
                        <li>
                          <a href="#">Logout</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-4 mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Contact Info
                    </span>
                    <div className="tp-footer-widget__links mb-120">
                      <ul>
                        <li>Erbil 100M Road near Karkuk Bridge </li>
                        <li>
                          <a href="tel:(+964)750 333 6020">0750 333 6020</a>
                        </li>
                        <li>
                          <a href="mailto:support@rstheme.com">
                            support@rstheme.com
                          </a>
                        </li>
                        <li>Office Hours: 8AM - 11PM</li>
                        <li>Sunday - Wekend Day</li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__social fw-social">
                      <a href="https://www.facebook.com/MasaryCompanySuli">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>

                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom fw-border">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright copyright-white">
                    <span>
                      © Copyright © {new Date().getFullYear()}
                      <a href="index"> Theme_pure</a>.
                      <i> All Rights Reserved Copyright</i>
                    </span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright-info info-direction">
                    <ul className="d-flex align-items-center">
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
