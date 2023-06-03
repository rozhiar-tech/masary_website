import AnswerQuestion from "@/common/answer-question";
import Link from "next/link";
import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import firstImage from "./assets/2.jpg";
import secondImage from "./assets/1.jpg";
import thirdImage from "./assets/3.jpg";
import fourthImage from "./assets/4.jpg";
// related product list
const related_product = [
  {
    id: 1,
    img: "/assets/img/shop/shop-09.jpg",
    name: "Sphygmomanometer",
    price: "66.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star",
    ],
  },
  {
    id: 2,
    img: "/assets/img/shop/shop-10.jpg",
    name: "Glucometer",
    price: "46.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-regular fa-star",
    ],
  },
  {
    id: 3,
    img: "/assets/img/shop/shop-11.jpg",
    name: "Oxygen Breathing Machine",
    price: "70.00",
    ratting: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
  },
  {
    id: 4,
    img: "/assets/img/shop/shop-12.jpg",
    name: "Oxygen Breathing Machine",
    price: "70.00",
    ratting: [
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
      "fa-regular fa-star",
    ],
  },
];
// slider setting
const setting = {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

// product_item_list data
const product_item_list = [
  {
    id: 1,
    title: "Product Details",
    active: "active",
    li_id: "home-tab-1",
    data_bs_target: "home-1",
    aria_controls: "home-1",
    aria_selected: true,
  },
  {
    id: 2,
    title: "Additional Info",
    active: "",
    li_id: "information-tab",
    data_bs_target: "additional-information",
    aria_controls: "additional-information",
    aria_selected: false,
  },
  {
    id: 3,
    title: "Review (08)",
    active: "",
    li_id: "reviews-tab",
    data_bs_target: "reviews",
    aria_controls: "reviews",
    aria_selected: false,
  },
  {
    id: 4,
    title: "Faq",
    active: "",
    li_id: "size-chart-tab",
    data_bs_target: "chart",
    aria_controls: "chart",
    aria_selected: false,
  },
];

const ProductDetailsArea = () => {
  const [productCount, setProductCount] = useState(1);
  const addBtn = () => {
    setProductCount((prev) => prev + 1);
  };
  const minusBtn = () => {
    if (productCount >= 1) {
      setProductCount((prev) => prev - 1);
    }
  };

  // product_review

  return (
    <>
      <div class="row">
        <div class="item">
          <Image src={firstImage} alt="shop" width="250" height="250" />
          <h3>Cold and hot water installations</h3>
          <p class="description">
            Our company offers the German brand Banninger for heating and
            cooling networks in residential homes, buildings, and projects. This
            brand encompasses a variety of pipe types. Plastic pipe types:
            (PPR-CT) (PPr) Green color for indoor use and projects Develop a
            black-colored sunscreen specifically designed for application on
            sun-exposed areas. Features : -Made from environmentally friendly
            polypropylene raw materials -High quality and affordable price -%100
            made from Germany -Preserves the taste, smell and color of water
            -High temperature and pressure resistant up to 20 situation -Very
            Easy to Install -Available in sizes from 20ml to 500ml To get more
            Infromation about banningers products check out their website :
            <a href="https://www.baenninger.de/">www.baenninger.de</a>
          </p>
        </div>
        <div class="item">
          <Image src={thirdImage} alt="shop" width="250" height="250" />
          <h3>Drainage Installation</h3>
          <p class="description">
            {" "}
            For this purpose, our company supplies materials from the German
            company Ostendorf for plastic sewer pipes, which includes several
            types 1-Plastic sewer pipe called Skolan Safe (silent) Place of
            use:( Indoor, building, hospital, hotel) Features : -Raw material
            type: Environmentally friendly polypropylene(PP) is white in color
            and coded RAL 7035 -Soundproofing is excellent to the degree dB 17.
            -%100 made from Germany -It does not help to add fire,
            acid-resistant and anti-POH.(Ph 2-12) -High quality, affordable
            price and a long lasting use. -Very Easy to Install -Available in
            sizes from 58ml to 200ml 2-Plastic sewer pipe called (HT safe) Place
            of use:( Indoor, building, hospital, projects) Features : -Raw
            material type: Environmentally friendly polypropylene(PP) is gery in
            color and coded RAL 7043 -%100 made from Germany -High quality,
            affordable price and a long lasting use. -It does not help to add
            fire, acid-resistant and anti-POH.(Ph 2-12) -Very Easy to Install
            -Its anti-sound to the degree 21dB. -Available in sizes from 32ml to
            160ml
          </p>
        </div>
        <div class="item">
          <Image src={secondImage} alt="shop" width="250" height="250" />
          <h3>Plastic sewer pipe called (UPVC)</h3>
          <p class="description">
            Place of use:( Indoor, building, hotel, projects) Features : -Raw
            material type: Environmentally friendly polyphenyl chloride(UPVC) is
            Orange in color and coded RAL 8032 -%100 made from Germany -High
            quality, affordable price and a long lasting use. -acid-resistant
            and anti-POH.(Ph 2-12) -Very Easy to Install -Available in sizes
            from 110ml to 500ml To get more Infromation about Ostendorfs
            products check out their website : www.ostendorf-kunststoffe.com
          </p>
        </div>
        <div class="item">
          <Image src={fourthImage} alt="shop" width="250" height="250" />
          <h3>Plastic sewer pipe called (HT safe)</h3>
          <p class="description">
            Place of use:( Indoor, building, hospital, projects) Features : -Raw
            material type: Environmentally friendly polypropylene(PP) is gery in
            color and coded RAL 7043 -%100 made from Germany -High quality,
            affordable price and a long lasting use. -It does not help to add
            fire, acid-resistant and anti-POH.(Ph 2-12) -Very Easy to Install
            -Its anti-sound to the degree 21dB. -Available in sizes from 32ml to
            160ml
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsArea;
