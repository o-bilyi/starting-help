import React, { useRef } from "react";
import Slider from "react-slick";
import * as styles from "./carousel.module.css";

import Img1 from "../../images/carousel/image.jpg";
import Img2 from "../../images/carousel/image-1.jpg";
import Img3 from "../../images/carousel/image-2.jpg";
import Img4 from "../../images/carousel/image-3.jpg";
import Img5 from "../../images/carousel/image-4.jpg";

import LeftIconSVG from "../../images/svg/chevron_left.svg";
import RightIconSVG from "../../images/svg/chevron_right.svg";

export const Carousel = () => {
  const customSlider = useRef({});

  const settings = {
    speed: 500,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const next = () => {
    customSlider.current.slickNext();
  };
  const previous = () => {
    customSlider.current.slickPrev();
  };

  return (
    <div className={styles.sliderWrap}>
      <div className={styles.sliderItemsWrap}>
        <div className={styles.navigationOfSlider}>
          <button className={styles.navigationButton} onClick={previous}>
            <LeftIconSVG className={styles.navigationIcon} />
          </button>
          <div className={styles.dateOfPost}>21.05.2022</div>
          <button className={styles.navigationButton} onClick={next}>
            <RightIconSVG className={styles.navigationIcon} />
          </button>
        </div>
        <Slider ref={(slider) => (customSlider.current = slider)} {...settings}>
          <div>
            <div className={styles.item}>
              <div className={styles.column}>
                <img className={styles.img} src={Img1} alt="img alt" />
                <img className={styles.img} src={Img2} alt="img alt" />
                <img className={styles.img} src={Img3} alt="img alt" />
              </div>
              <div className={styles.column}>
                <img className={styles.img} src={Img4} alt="img alt" />
                <img className={styles.img} src={Img5} alt="img alt" />
                <div className={styles.description}>
                  <h2 className={styles.title}>Звіт за 21.05.2022</h2>
                  <ul className={styles.list}>
                    <li>допомога дитячому садку</li>
                    <li>допомога центру</li>
                    <li>допомога переселенцям</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.item}>
              <div className={styles.column}>
                <img className={styles.img} src={Img1} alt="img alt" />
                <img className={styles.img} src={Img2} alt="img alt" />
                <img className={styles.img} src={Img3} alt="img alt" />
              </div>
              <div className={styles.column}>
                <img className={styles.img} src={Img4} alt="img alt" />
                <img className={styles.img} src={Img5} alt="img alt" />
                <div className={styles.description}>
                  <h2 className={styles.title}>Звіт за 21.05.2022</h2>
                  <ul className={styles.list}>
                    <li>допомога дитячому садку</li>
                    <li>допомога центру</li>
                    <li>допомога переселенцям</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
