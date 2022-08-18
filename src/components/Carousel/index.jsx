import React, { useRef, useState } from "react";
import Slider from "react-slick";
import * as styles from "./carousel.module.css";

import LeftIconSVG from "../../images/svg/chevron_left.svg";
import RightIconSVG from "../../images/svg/chevron_right.svg";

export const Carousel = ({ items }) => {
  const customSlider = useRef({});
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const settings = {
    speed: 500,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlideIndex(next),
    afterChange: (current) => setActiveSlideIndex(current),
  };

  const next = () => {
    customSlider.current.slickNext();
  };
  const previous = () => {
    customSlider.current.slickPrev();
  };

  console.log(items[activeSlideIndex]?.frontmatter);

  return (
    <div className={styles.sliderWrap}>
      <div className={styles.sliderItemsWrap}>
        <div className={styles.navigationOfSlider}>
          <button className={styles.navigationButton} onClick={previous}>
            <LeftIconSVG className={styles.navigationIcon} />
          </button>
          <div className={styles.dateOfPost}>{items[activeSlideIndex]?.frontmatter?.date}</div>
          <button className={styles.navigationButton} onClick={next}>
            <RightIconSVG className={styles.navigationIcon} />
          </button>
        </div>
        <Slider ref={(slider) => (customSlider.current = slider)} {...settings}>
          {items?.map(({ frontmatter }) => {
            return (
              <div key={frontmatter.date}>
                <div className={styles.item}>
                  <div className={styles.column}>
                    {frontmatter?.photos?.map(({ img }) => {
                      return (
                        <img
                          key={img.publicURL}
                          className={styles.img}
                          src={img?.publicURL}
                          alt="img alt"
                        />
                      );
                    })}
                    <div className={styles.description}>
                      <h2 className={styles.title}>
                        {frontmatter.title} {frontmatter.date}
                      </h2>
                      <ul className={styles.list}>
                        {frontmatter?.listOfItems?.map((item) => {
                          return <li key={item.title}>{item.title}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
