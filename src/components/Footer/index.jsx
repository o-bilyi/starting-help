import React from "react";
import * as styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.list}>
        <li>© 2022 Starting Help</li>
        <li>
          <a className={styles.link} href="#">
            Статут благодійної організації
          </a>
        </li>
        <li>
          <a className={styles.link} href="#">
            Відмітка в державному реєстрі
          </a>
        </li>
        <li>м.Чернівці</li>
      </ul>
    </div>
  );
};
