import React, { useState } from "react";
import * as styles from "./feedbackForm.module.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const FeedbackForm = () => {
  const [formValues, setFormValues] = useState({});

  const setValue = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formValues,
      }),
    })
      .then(() => {
        console.log("Form submission success");
        // addToast('Форма успешно отправлена.', {
        //   appearance: 'success',
        //   autoDismiss: true
        // });
      })
      .catch((error) => {
        // addToast(error, {
        //   appearance: 'error',
        //   autoDismiss: true
        // });
        console.error("Form submission error:", error);
      });
  };

  return (
    <div className={styles.feedbackForm} id="form">
      <form
        method="post"
        name="feedback"
        data-netlify="true"
        onSubmit={handleSubmit}
        className={styles.form}
        data-netlify-honeypot="bot-field"
      >
        <div className={styles.inputWrap}>
          <input
            required
            type="text"
            name="name"
            id="nameField"
            autoComplete="off"
            aria-required="true"
            onChange={setValue}
            className={styles.inputField}
          />
          <label className={styles.label} htmlFor="nameField">
            Прізвище та імя
          </label>
        </div>
        <div className={styles.inputWrap}>
          <input
            required
            type="text"
            name="email"
            id="emailField"
            autoComplete="off"
            aria-required="true"
            onChange={setValue}
            className={styles.inputField}
          />
          <label className={styles.label} htmlFor="emailField">
            E-mail
          </label>
        </div>
        <div className={`${styles.inputWrap} ${styles.textareaWrap}`}>
          <textarea
            rows={4}
            autoComplete="off"
            name="description"
            id="description"
            className={styles.textareaField}
            onChange={setValue}
          />
          <label className={styles.label} htmlFor="description">
            Ваше повідомлення
          </label>
        </div>
        <button disabled={!Object.keys(formValues).length >= 1} className={styles.submitButton} type="submit">Відправити</button>
      </form>
    </div>
  );
};
