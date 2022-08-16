import { Link } from "gatsby";
import React from "react";
import config from "../../../content/meta/config";
import * as styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>© 2022 Starting Help</li>
        <li>
          <Link
            target="_blank"
            className={styles.link}
            to={config.charterOfCharitableOrganization}
          >
            Статут благодійної організації
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className={styles.link}
            to={config.noteInTheStateRegister}
          >
            Відмітка в державному реєстрі
          </Link>
        </li>
        <li>м.Чернівці</li>
      </ul>
    </footer>
  );
};
