import React, { useState } from "react";
import * as styles from "./feedbackForm.module.css";
import { useToasts } from "react-toast-notifications";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const initialState = {
  name: "",
  email: "",
  description: "",
  error: {
    email: null,
    name: null,
  },
};

const validation = {
  name: (val) => {
    if (val.length < 5) {
      return "Заповність своє Прізвище та імя!";
    }
    return null;
  },
  email: (val) => {
    let error = null;
    const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailValidation.test(val)) {
      error = "Не корекний E-mail!";
    }
    return error;
  },
  description: (val) => {
    if (val.length < 10) {
      return "Не менше 10 символів!";
    }
    return null;
  },
};

export const FeedbackForm = () => {
  const { addToast } = useToasts();
  const [formValues, setFormValues] = useState(initialState);

  const onFieldChange = (event) => {
    const errorText = validation[event.target.name](event.target.value);

    setFormValues({
      [event.target.name]: event.target.value,
      error: {
        ...formValues.error,
        [event.target.name]: errorText,
      },
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
        setFormValues(initialState);
        addToast("Форма успішно відправлена.", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((error) => {
        addToast(error, {
          appearance: "error",
          autoDismiss: true,
        });
        console.error("Form submission error:", error);
      });
  };

  const isDisableSubmitButton = formValues.error && formValues.error.name || formValues.error.email;

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
            onChange={onFieldChange}
            aria-required="true"
            value={formValues["name"]}
            className={styles.inputField}
          />
          <label className={styles.label} htmlFor="nameField">
            Прізвище та імя
          </label>
          {formValues.error?.name && (
            <p className={styles.errorText}>{formValues.error?.name}</p>
          )}
        </div>
        <div className={styles.inputWrap}>
          <input
            required
            type="text"
            name="email"
            id="emailField"
            autoComplete="off"
            onChange={onFieldChange}
            aria-required="true"
            value={formValues["email"]}
            className={styles.inputField}
          />
          <label className={styles.label} htmlFor="emailField">
            E-mail
          </label>
          {formValues.error?.email && (
            <p className={styles.errorText}>{formValues.error?.email}</p>
          )}
        </div>
        <div className={`${styles.inputWrap} ${styles.textareaWrap}`}>
          <textarea
            rows={4}
            id="description"
            autoComplete="off"
            name="description"
            onChange={onFieldChange}
            value={formValues["description"]}
            className={styles.textareaField}
          />
          <label className={styles.label} htmlFor="description">
            Ваше повідомлення
          </label>
          {formValues.error?.description && (
            <p className={styles.errorText}>{formValues.error?.description}</p>
          )}
        </div>
        <button
          disabled={isDisableSubmitButton}
          className={styles.submitButton}
          type="submit"
        >
          Відправити
        </button>
      </form>
    </div>
  );
};
