import React from "react";
import styles from "./index.module.css";
import { IoArrowForward } from "react-icons/io5";
type Props = {};

const ContactCallToAction = (props: Props) => {
  return (
    <div className={styles["action-wrapper"]}>
      <div className={styles.number}>
        <h1>+994 77 711 31 21</h1>
      </div>
      <div className={styles.arrow}>
        <IoArrowForward />
      </div>
    </div>
  );
};

export default ContactCallToAction;
