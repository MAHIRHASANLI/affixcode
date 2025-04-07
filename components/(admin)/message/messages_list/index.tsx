import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
type Props = {};
import img from "@/assets/images/1.png";

const MessagesList = (props: Props) => {
  return (
    <div className={styles["list-container"]}>
      <div className={styles.search}>
        <input type="text" placeholder="Axtar" />
      </div>
      <div className={styles["list-wrapper"]}>
        <div className={styles.item}>
          <div className={styles.images}>
            <Image alt="" src={img} fill />
          </div>
          <div className={styles.content}>
            <h5>Adi Soyadi</h5>
            <p>Mesaji</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.images}>
            <Image alt="" src={img} fill />
          </div>
          <div className={styles.content}>
            <h5>Adi Soyadi</h5>
            <p>Mesaji</p>
          </div>
        </div>{" "}
        <div className={styles.item}>
          <div className={styles.images}>
            <Image alt="" src={img} fill />
          </div>
          <div className={styles.content}>
            <h5>Adi Soyadi</h5>
            <p>Mesaji</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.images}>
            <Image alt="" src={img} fill />
          </div>
          <div className={styles.content}>
            <h5>Adi Soyadi</h5>
            <p>Mesaji</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesList;
