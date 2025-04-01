import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

import image1 from "@/assets/images/project 1.jpg";
import { BsArrowRight } from "react-icons/bs";
type Props = {};

const ProjectItem = (props: Props) => {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-card-image"]}>
        <Image src={image1} alt="" fill />
      </div>

      <div className={styles["project-card-content"]}>
        <div className={styles["project-card-text"]}>
          <h5>WebNova.com</h5>
        </div>
        <div className={styles["project-card-text-2"]}>
          <span>Agency</span>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
