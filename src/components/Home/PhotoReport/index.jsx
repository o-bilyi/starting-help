import React from "react";
import { Carousel } from "../../Carousel";

import * as styles from "./photoReport.module.css";

export const PhotoReport = () => {
  return (
    <div className={styles.photoReport}>
      <div className={styles.widthContainer}>
        <h2 className={styles.title}>Фотозвіт</h2>
        <p className={styles.description}>
          Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum. Lorem
          Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including.
        </p>
        <Carousel />
      </div>
    </div>
  );
};
