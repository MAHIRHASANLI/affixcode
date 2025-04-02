import React from "react";
import { RiTelegram2Fill } from "react-icons/ri";
import styles from "./index.module.css";
type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className={styles["form-wrapper"]}>
      <form className={styles["contact-form"]}>
        <div className={styles["form-item"]}>
          <input type="text" placeholder="Ad, Soyad" />
        </div>
        <div className={styles["form-item"]}>
          <input type="email" placeholder="E-poçt" />
        </div>
        <div className={styles["form-item"]}>
          <input type="email" placeholder="Əlaqə nömrəsi" />
        </div>
        <div className={styles["form-item"]}>
          <textarea name="" id="" rows={5} placeholder="Mesaj"></textarea>
        </div>
        <div className={styles["form-item-btn"]}>
          <button>
            Göndər <RiTelegram2Fill />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
