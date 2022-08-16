import * as React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import FBIconSVG from "../../images/svg/fb.svg";
import LogoSVG from "../../images/svg/logo.svg";
import InstagramIconSVG from "../../images/svg/instagram.svg";
import EmailIconSVG from "../../images/svg/mail_outline.svg";

import { socialLinks } from "../../../content/meta/config";

import * as styles from "./header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.leftBlock}>
      <Link to="/">
        <LogoSVG />
      </Link>
    </div>
    <div className={styles.rightBlock}>
      <Link target="_blank" to={socialLinks.facebook} className={styles.socialLink}>
        <FBIconSVG className={styles.socialIcon} />
      </Link>

      <Link target="_blank" to={socialLinks.instagram} className={styles.socialLink}>
        <InstagramIconSVG className={styles.socialIcon} />
      </Link>

      <AnchorLink
        stripHash
        to="/#form"
        className={styles.contactUs}
        title="Звязатись"
      >
        Звязатись
        <EmailIconSVG className={styles.emailIcon} />
      </AnchorLink>
    </div>
  </header>
);
