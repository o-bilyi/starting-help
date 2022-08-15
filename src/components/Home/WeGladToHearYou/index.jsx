import React from "react";
import { FeedbackForm } from "../../FeedbackForm";
import * as styles from "./weGladToHearYou.module.css";

export const WeGladToHearYou = () => {
  return (
    <div className={styles.weGladToHearYou}>
      <div className={styles.widthContainer}>
        <h4 className={styles.subTitle}>
          потрібна домомога чи можете допопомогти?{" "}
        </h4>
        <h2 className={styles.title}>Ми раді почути Вас!</h2>
        <FeedbackForm />
      </div>
    </div>
  );
};
