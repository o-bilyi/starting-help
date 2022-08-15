import * as styles from "./firstSection.module.css";
import React from "react";
import HeardIconSVG from "../../../images/svg/heart.svg";

import { AnchorLink } from "gatsby-plugin-anchor-links";

export const FirstSection = () => (
  <React.Fragment>
    <div className={styles.firstSection}>
      <h4 className={styles.subTitle}>First Section</h4>
      <h1 className={styles.title}>
        Ми вже почали допомагати.
        <br />
        <span className={styles.differentColor}>Допоможіть і Ви.</span>
      </h1>
      <ul className={styles.list}>
        <li>
          Допомагаємо діткам,які знаходяться в дитячому будинки і дітям ,які
          вимушено покинули свої будинки внаслідок війни
        </li>
        <li>Допомагаємо людям похилого віку ,які знаходяться в пансіонаті</li>
        <li>Допомагаємо адресно людям ,які надають запити</li>
      </ul>
      <div className={styles.buttons}>
        <AnchorLink to="/#form" title="Допомогти" className={styles.help}>
          Допомогти
          <HeardIconSVG />
        </AnchorLink>
        <AnchorLink to="/#form" title="Отримати допомогу" className={styles.getHelp}>
          Отримати допомогу
        </AnchorLink>
      </div>
    </div>
  </React.Fragment>
);
