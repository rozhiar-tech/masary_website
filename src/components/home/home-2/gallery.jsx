import Link from "next/link";
import React from "react";

// gallery_content_data
const gallery_content_data = [
  {
    id: 1,
    class: "col-lg-4 col-md-6",
    img: "/assets/img/gallery/1.jpg",
    title: "Grand Melinum Hotel",
  },
  {
    id: 2,
    class: "col-lg-8 col-md-6 d-none d-lg-block",
    img: "/assets/img/gallery/3.jpg",
    title: "Grand Melinum spa",
  },
  {
    id: 3,
    class: "col-lg-4 col-md-6",
    img: "/assets/img/gallery/4.jpg",
    title: "Rand Gallery",
  },
  {
    id: 4,
    class: "col-lg-4 col-md-6",
    img: "/assets/img/gallery/5.jpg",
    title: "City Towers",
  },
  {
    id: 5,
    class: "col-lg-4 col-md-6",
    img: "/assets/img/gallery/6.jpg",
    title: "Imperial Village",
  },
  {
    id: 6,
    class: "col-lg-8 col-md-12 d-lg-none",
    img: "/assets/img/gallery/7.jpg",
    title: "Plastic sewer pipe called Skolan Safe (silent)",
  },
  {
    id: 7,
    class: "col-lg-8 col-md-12 d-lg-none",
    img: "/assets/img/gallery/7.jpg",
    title: "Plastic sewer pipe called Skolan Safe (silent)",
  },
  {
    id: 8,
    class: "col-lg-8 col-md-12 d-lg-none",
    img: "/assets/img/gallery/7.jpg",
    title: "Plastic sewer pipe called Skolan Safe (silent)",
  },
];

const Gallery = () => {
  return (
    <>
      <section className="gallery-area pb-50">
        <div
          className="gallery-bg-title theme-light-bg tp-box-space pt-125 pb-200 mr-30 ml-30"
          style={{
            backgroundImage: `url(/assets/img/shape/shape-bg-06.png)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-section text-center">
                  <span className="tp-section__sub-title sub-title-white left-line-white right-line-white mb-25">
                    Work Gallery
                  </span>
                  <h3 className="tp-section__title title-white mb-80">
                    Masary
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-item-bg wow fadeInUp" data-wow-delay=".3s">
          <div className="container">
            <div className="row">
              {gallery_content_data.map((item) => (
                <div key={item.id} className={item.class}>
                  <div className="gallery-item p-relative mb-30">
                    <img src={item.img} alt="gallery-thumb" />
                    <div className="gallery-item__content">
                      <h4 className="gallery-item__title">
                        <Link href="/portfolio-details">{item.title}</Link>
                      </h4>
                      <span>
                        <i className="fa-solid fa-tag"></i>
                        <Link href="">Masary</Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
