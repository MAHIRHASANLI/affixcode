import React from "react";
import styles from "./index.module.css";
import ContactTitle from "@/components/contact/contact_title";
import ContactForm from "@/components/contact/contact_form";
type Props = {};

const ContactSection = (props: Props) => {
  return (
    <section className="section">
      <div className={styles["contact-grid"]}>
        <div className={styles["contact-grid-item"]}>
          <ContactTitle />
        </div>
        <div className={styles["contact-grid-item"]}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
