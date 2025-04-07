"use client";
import React from "react";
import { RiTelegram2Fill } from "react-icons/ri";
import styles from "./index.module.css";
import { useFormik } from "formik";
import contactMessageValidationSchema from "@/validations/contact_message.validation";
import { ContactMessagePostRequest } from "@/api/contact_message_requests";
import { trimObject } from "@/utils/trim_object";
type Props = {};

const ContactForm = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactMessageValidationSchema,
    onSubmit: async (values) => {
      try {
        await ContactMessagePostRequest(trimObject(values));
        alert("Mesajınız göndərildi!");
        formik.resetForm();
      } catch {
        alert("Mesaj göndərilmədi. Xahiş edirik yenidən cəhd edin.");
      }
    },
  });
  return (
    <div className={styles["form-wrapper"]}>
      <form className={styles["contact-form"]} onSubmit={formik.handleSubmit}>
        <div className={styles["form-item"]}>
          <input
            type="text"
            placeholder="Ad, Soyad"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            name="fullName"
          />
        </div>
        <p className={styles["form-item-error"]}>{formik.errors.fullName}</p>
        <div className={styles["form-item"]}>
          <input
            type="email"
            placeholder="E-poçt"
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
          />
        </div>
        <p className={styles["form-item-error"]}>{formik.errors.email}</p>
        <div className={styles["form-item"]}>
          <input
            type="text"
            placeholder="Əlaqə nömrəsi"
            onChange={formik.handleChange}
            value={formik.values.phone}
            name="phone"
          />
        </div>
        <p className={styles["form-item-error"]}>{formik.errors.phone}</p>
        <div className={styles["form-item"]}>
          <textarea
            name="message"
            id=""
            rows={5}
            placeholder="Mesaj"
            onChange={formik.handleChange}
            value={formik.values.message}
          ></textarea>
        </div>
        <p className={styles["form-item-error"]}>{formik.errors.message}</p>
        <div className={styles["form-item-btn"]}>
          <button type="submit">
            Göndər <RiTelegram2Fill />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
