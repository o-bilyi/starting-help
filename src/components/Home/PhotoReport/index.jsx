import React from "react";
import { Carousel } from "../../Carousel";

import * as styles from "./photoReport.module.css";
import { useStaticQuery, graphql } from "gatsby";

export const PhotoReport = () => {
  const {allMarkdownRemark: {nodes}} = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            photos {
              img {
                publicURL
              }
            }
            listOfItems {
              title
            }
          }
        }
      }
    }
  `);

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
        <Carousel items={nodes} />
      </div>
    </div>
  );
};
